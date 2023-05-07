const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const messageHistories = {};

client.on('message', async (message) => {
    console.log(message.body);

    if (message.body.startsWith("#")) {
        const senderId = message.from;
        const userMessage = message.body.substring(1);

        if (!messageHistories[senderId]) {
            messageHistories[senderId] = [
                { role: "system", content: "You are a very smart friend and answer everything in less than 200 characters." },
            ];
        }

        if (userMessage === "reset") {
            delete messageHistories[senderId];
            message.reply("The history has been deleted.");
        } else {
            messageHistories[senderId].push({ role: "user", content: userMessage });

            const reply = await runCompletion(messageHistories[senderId]);
            message.reply(reply);

            messageHistories[senderId].push({ role: "assistant", content: reply });
        }
    }
});

async function runCompletion (messages) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
    });
    return completion.data.choices[0].message.content;
}