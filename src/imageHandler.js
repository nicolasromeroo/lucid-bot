
const path = require('path');

function sendCryptoImage(cryptoName) {
  const cryptoLower = cryptoName.toLowerCase();
  const images = {
    bitcoin: 'bitcoin.png',
    ethereum: 'ethereum.png',
    solana: 'solana.png',
  };

  if (images[cryptoLower]) {
    const imagePath = path.join(__dirname, '../assets/images', images[cryptoLower]);
    return `Enviando imagen de ${cryptoName}: ${imagePath}`;
  } else {
    return `No tengo una imagen para ${cryptoName}.`;
  }
}

module.exports = sendCryptoImage;
