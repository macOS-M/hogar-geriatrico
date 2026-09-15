import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createServer } from "node:net";

const hostname = "127.0.0.1";
const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

function findAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.once("error", reject);
    server.listen(0, hostname, () => {
      const address = server.address();
      assert(address && typeof address === "object");
      const { port } = address;
      server.close((error) => (error ? reject(error) : resolve(port)));
    });
  });
}

async function waitForHomepage(url, processOutput) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(url);
      const html = await response.text();

      assert.equal(response.status, 200);
      assert.match(html, /Hogar Geriátrico La Sabana/);
      return;
    } catch (error) {
      if (processOutput.exitCode !== null) {
        throw new Error(
          `Next.js exited before the smoke test completed.\n${processOutput.logs}`,
          { cause: error },
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error(`Timed out waiting for ${url}.\n${processOutput.logs}`);
}

const port = await findAvailablePort();
const url = `http://${hostname}:${port}`;
const processOutput = { exitCode: null, logs: "" };
const nextProcess = spawn(
  process.execPath,
  [nextCli, "start", "--hostname", hostname, "--port", String(port)],
  { stdio: ["ignore", "pipe", "pipe"] },
);

nextProcess.stdout.on("data", (chunk) => {
  processOutput.logs += chunk;
});
nextProcess.stderr.on("data", (chunk) => {
  processOutput.logs += chunk;
});
nextProcess.once("exit", (code) => {
  processOutput.exitCode = code;
});

try {
  await waitForHomepage(url, processOutput);
  console.log(`Smoke test passed: ${url} returned the expected homepage.`);
} finally {
  if (nextProcess.exitCode === null) {
    nextProcess.kill();
  }
}
