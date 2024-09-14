
// probando openai
require('dotenv').config()
const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "¿Cuál es el clima hoy?" }],
    });

    console.log('Respuesta:', response.choices[0].message.content)
  } catch (error) {
    console.error('Error en la API de OpenAI:', error)
  }
}

testOpenAI()
