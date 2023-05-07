# Puerco Bot

Puerco Bot es un bot de WhatsApp desarrollado en Node.js que utiliza las bibliotecas whatsapp-web.js, qrcode-terminal, dotenv y openai. Esta herramienta te permite responder a tus contactos de WhatsApp mediante inteligencia artificial de OpenAI.

## Requisitos previos
- Node.js instalado (versión 18 o superior)
- Cuenta en OpenAI (para obtener una clave API)

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/jeverduzco/puerco-bot.git
```
```bash
cd puerco-bot
```
Instalar las dependencias:
```bash
npm install
```
Crear un archivo .env en la raíz del proyecto.

```bash
touch .env
```
 Agregar la siguiente línea.
```bash
OPENAI_API_KEY="your key here"
```
Asegúrate de reemplazar `your key here` con tu clave API de OpenAI.

Ejecutar el bot:
```bash
node index.js
```
Una vez iniciado el bot, se generará un código QR en la terminal que deberás escanear con tu dispositivo móvil para vincular tu cuenta de WhatsApp.

## GPT-4

Para usar GPT-4, debes cambiar la versión de la API de OpenAI en el archivo `index.js`. Para ello, cambia en la línea 54 de `gpt-3.5-turbo` a `gpt-4`.

## Uso

Para utilizar Puerco Bot, simplemente dile a un contacto en WhatsApp que te envie un mensaje que empiece con `#`, por ejemplo `#hola`. El bot procesará el mensaje y responderá automáticamente utilizando la inteligencia artificial de OpenAI.

El comando `#reset` permite reiniciar la conversación con el bot y eliminar el contexto de la inteligencia artificial.

## Contribuciones

Si deseas contribuir al proyecto, por favor crea una solicitud de extracción (pull request) con tus cambios y mejoras.

## NOTA: 

No puedo garantizar que no te bloqueen usando este método, aunque a mí me ha funcionado. WhatsApp no permite bots o clientes no oficiales en su plataforma, por lo que esto no debe considerarse totalmente seguro.

## Licencia

Puerco Bot está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.