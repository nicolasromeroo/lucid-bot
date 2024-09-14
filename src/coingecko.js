
const axios = require('axios')
const config = require('../config/config')

async function getCryptoPrice(cryptoName) {
  try {
    const cryptoId = cryptoName.toLowerCase();
    const response = await axios.get(`${config.coingeckoApiUrl}/simple/price`, {
      params: {
        ids: cryptoId,
        vs_currencies: 'usd',
      },
    })

    if (response.data[cryptoId]) {
      const price = response.data[cryptoId].usd;
      return `El precio actual de ${cryptoName} es $${price}.`
    } else {
      return `Lo siento, no tengo información sobre ${cryptoName}.`
    }
  } catch (error) {
    return 'Error al consultar el precio de la criptomoneda.'
  }
}

module.exports = getCryptoPrice
