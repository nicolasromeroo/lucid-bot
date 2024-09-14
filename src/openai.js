
require('dotenv').config()
const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  try {
    const userInput = "muéstrame la imagen de bitcoin"
    const cryptoName = userInput.split('muéstrame la imagen de')[1]?.trim()
    
    if (!cryptoName) {
      throw new Error("No se pudo extraer el nombre de la criptomoneda.")
    }
    
    console.log('Nombre de la criptomoneda:', cryptoName)

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Muéstrame la imagen de ${cryptoName}` }],
    })

    console.log('Respuesta:', response.choices[0].message.content)
  } catch (error) {
    console.error('Error en la API de OpenAI:', error)
  }
}

main()
