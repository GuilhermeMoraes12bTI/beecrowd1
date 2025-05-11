function esfera ( raio){
let volumeTotal = (raio*raio*raio) * 3.14159 * (4/3.0)
return volumeTotal
}

let volume1 = esfera(3)
let volume2 = esfera(15)
let volume3 = esfera(1523)

console.log (`Volume 1 = ${volume1.toFixed(3)}`)
console.log (`Volume 2 = ${volume2.toFixed(3)}`)
console.log (`Volume 3 = ${volume3.toFixed(3)}`)

