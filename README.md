# Hogar Geriátrico La Sabana

Sitio web informativo para Hogar Geriátrico La Sabana, una organización dedicada al cuidado de larga estancia de personas adultas mayores, con tres sedes en Costa Rica.

## Estado del proyecto

Etapa inicial de definición de contenido y requisitos. Este repositorio todavía no contiene una aplicación ni instrucciones de instalación o ejecución.

La información operativa de este documento fue proporcionada por el hogar y deberá revisarse antes de publicarla. Las funciones y tecnologías descritas son propuestas, no implementaciones existentes.

## Objetivo

Ayudar a las personas adultas mayores y sus familias a conocer el hogar, entender los servicios y condiciones de admisión, comparar las sedes y ponerse en contacto para consultar o coordinar una visita.

## Alcance inicial

- Inicio con presentación del hogar y acceso directo a contacto y sedes.
- Servicios y cuidados, incluyendo qué está incluido y qué tiene costo adicional.
- Directorio de las tres sedes y una página informativa por sede.
- Instalaciones, habitaciones y fotografías reales identificadas por sede.
- Admisión, requisitos, criterios de precio y preguntas frecuentes.
- Contacto, horario de atención y enlaces de ubicación.


## Sedes

| Sede | Referencia de ubicación proporcionada |
| --- | --- |
| La Sabana #1 · Nunciatura | Rohrmoser, 100 metros al sur y 200 metros al oeste de la casa de Óscar Arias. |
| La Sabana #2 · Paseo Colón | Paseo Colón, 225 metros al norte de la Toyota. |
| La Sabana #3 · Boulevard Rohrmoser | Del AMPM del triángulo de Rohrmoser, 25 metros al norte; casa en la acera izquierda, con portón color crema. |

Pendiente confirmar los enlaces exactos de Google Maps o Waze y las características particulares de cada sede.

## Servicios informados

- Cuidado especializado de larga estancia.
- Personal capacitado para el cuidado de personas adultas mayores las 24 horas.
- Control y seguimiento del tratamiento médico.
- Servicios de medicina general, enfermería, terapia física, terapia ocupacional y nutrición.
- Cinco tiempos de comida con menú balanceado.
- Cuidado de la imagen personal.
- Lavado y planchado de ropa.
- Actividades recreativas.
- Wifi para residentes.
- Baños adaptados para personas adultas mayores; el hogar indica adecuación a la Ley 7600, pendiente de validación antes de su publicación.
- Ambulancia privada para emergencias médicas.
- Cámaras en las instalaciones; pendiente precisar áreas monitoreadas y condiciones de privacidad.

La disponibilidad de personal de cuidado las 24 horas no implica presencia permanente de todos los profesionales. Se debe confirmar la frecuencia de atención y la disponibilidad de cada servicio por sede.

### Condiciones y exclusiones

- No se incluyen medicamentos que no suministre la Caja Costarricense de Seguro Social (CCSS).
- No se incluyen complementos nutricionales.
- El retiro mensual de medicamentos se realiza cuando corresponde a la clínica a la que pertenece el hogar. Pendiente aclarar esta condición por sede.
- Los familiares se encargan de las citas médicas. Existe una alternativa de acompañamiento con costo adicional, sujeta a coordinación.
- Pendiente confirmar si el servicio de ambulancia tiene costo adicional y sus condiciones.

## Habitaciones y tarifas

El hogar cuenta con habitaciones privadas y compartidas. La mensualidad varía según el nivel de dependencia de la persona adulta mayor y el tipo de habitación.

El sitio debe explicar estos criterios y facilitar la consulta de una cotización. La disponibilidad de habitaciones deberá confirmarse directamente con el hogar.

## Requisitos de ingreso informados

1. Cédula original de la persona adulta mayor.
2. Fotocopia de la cédula del representante legal.
3. Epicrisis de la persona adulta mayor.
4. Lista de medicamentos con dosis y horarios.

Estos documentos se recibirán por el proceso privado de admisión que defina el hogar. El sitio público no solicitará expedientes médicos ni documentos de identidad mediante su formulario de contacto inicial.

## Contacto

- **Teléfono:** 6005-3095.
- **Horario de atención de consultas:** lunes a viernes, de 8:00 a. m. a 5:00 p. m.
- **Pendiente:** confirmar si el número recibe WhatsApp y centraliza las consultas de las tres sedes.

El horario de consultas debe distinguirse del cuidado residencial las 24 horas y de los horarios de visita de familiares, todavía por confirmar.

## Tecnología propuesta

- **TypeScript** como lenguaje principal.
- **React y Next.js** para el sitio público.
- **Node.js** para las funciones de servidor que sean necesarias.
- Páginas pregeneradas para contenido informativo cuando sea posible.
- Información común del hogar y contenido específico de cada sede organizados por separado para facilitar actualizaciones.

No se contempla inicialmente una API independiente ni una base de datos. Su necesidad se evaluará si se requiere almacenar solicitudes o administrar contenido dinámico. Un editor de contenido se considerará según quién mantendrá el sitio.

## Criterios de diseño y calidad

- Diseño adaptable a celulares, tabletas y computadoras.
- Lenguaje claro, respetuoso y fácil de leer.
- Fotografías auténticas con autorización de publicación.
- Navegación con teclado, contraste adecuado, textos alternativos y objetivo de accesibilidad WCAG 2.2 AA.
- Imágenes optimizadas y carga rápida.
- Títulos, descripciones y contenido de ubicación útiles para buscadores.
- HTTPS y, si se implementa un formulario, validación, protección contra spam, confirmación de recepción y aviso de privacidad.
- Contactos, servicios, horarios y condiciones revisados antes del lanzamiento.

## Información pendiente

- Logo, identidad visual e historia del hogar.
- Fotografías autorizadas y ubicación exacta de cada sede.
- Servicios, tipos de habitación e instalaciones disponibles por sede.
- Frecuencia y disponibilidad de atención profesional.
- Horarios de visita y comunicación con familiares.
- Proceso de valoración, visita e ingreso.
- Condiciones de servicios adicionales y atención de emergencias.
- Validación de afirmaciones sobre accesibilidad y descripción del sistema de cámaras.
- Canal de recepción de consultas y responsable de responderlas.
- Responsable de actualizar el contenido del sitio.
- Dominio y alojamiento.

## Referencias de investigación

Sitios consultados como referencia de estructura y contenido; no implican afiliación ni certificación de sus servicios:

- [Hogar Bethel](https://www.hogardeancianosbethel.com/): información práctica sobre cuidados, habitaciones y visitas.
- [Residencias Valentina](https://www.residenciasvalentina.com/): instalaciones, fotografías y servicios.
- [Alfa y Omega](https://www.alfayomega-cevida.com/): presentación de modalidades de cuidado.
- [Sanitas Mayores](https://www.sanitas.es/mayores): organización de servicios y contacto con familias.
- [Documentación de Next.js](https://nextjs.org/docs): referencia técnica para la arquitectura propuesta.
- [WCAG — W3C](https://www.w3.org/WAI/standards-guidelines/wcag/): referencia de accesibilidad web.
