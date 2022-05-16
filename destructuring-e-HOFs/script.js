const { bands } = require('./data');

//Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

function getBandsEUA(array) {
  return array.filter(({ country }) => country === 'United States')
    .map(({ bandName }) => bandName)
}

//console.log(getBandsEUA(bands))


//Filtre e retorne um array com as informações das bandas que contenham 'Rock' no gênero musical

function getGenders(array) {
  return array.filter(({ genre }) => genre === 'Rock')
}

//console.log(getGenders(bands));


