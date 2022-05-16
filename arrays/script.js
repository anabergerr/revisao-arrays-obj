const fruits = ['maca', 'pera', 'banana', 'kiwi', 'tomate'];

// fazer uma funcao que percorra cada item desse array de frutas usando um for convencioal e 
// mostre ele no seu console

//console.log(fruits[1])

function sweepingArray(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  }
}

//sweepingArray(fruits);

//Agora vamos fazer a mesma coisa usando o forEach
//lembrar que o forEach não retorna nada

function sweepingArrayForEach(array) {
  array.forEach((element) => {
    console.log(element)
  })
}

//sweepingArrayForEach(fruits)

//Agora quermos percorrer nosso array usando map

function sweepingArrayMap(array) {
  return array.map((element) => element)
}

//console.log(sweepingArrayMap(fruits))




/*
05 - Encontre o filho mais velho
Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo
que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.
Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.
A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------
"Ao passar os argumentos 40 e, deve retornar: 'O filho mais velho tem 12 anos.'"
*/

function findOldestSon(pedroAge, kidsAge) {
  //Descobrir qual é a idade do ultimo filho, já que se foram passada a idade de 3 dos seus filhos.
  let someAges = 0
  let ageLastKid = 0
  kidsAge.forEach(age => {
    someAges += age
    ageLastKid = pedroAge - someAges
  })
  // agora eu tenho todas as idades dos 4 filhos do Pedro
  kidsAge.push(ageLastKid)
  //preciso descobrir qual filho tem a maior idade agora
  //O ACUMULADOR É variável que vai servir como acumuladora (que é o valor retornado na ultima iteração e inicia com o valor inicial)
  const olderBrother = kidsAge.reduce((acc, valueAtual) => {
    const biggerAge = acc > valueAtual ? acc : valueAtual
    //console.log(getBiggerAge)
    //console.log(acc)
    return biggerAge
  }, 0)

  const phrase = `O filho mais velho tem ${olderBrother} anos.`

  return phrase

}

console.log(findOldestSon(40, [11, 8, 9]))


