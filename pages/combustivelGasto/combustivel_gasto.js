
function quantidadeDeLitrosNecessarios(horas, velocidadeMedia) {
    let distancia = horas * velocidadeMedia
    let litro = distancia / 12
    return litro
}

let litro1 = quantidadeDeLitrosNecessarios(10, 85)
let litro2 = quantidadeDeLitrosNecessarios(2, 92)
let litro3 = quantidadeDeLitrosNecessarios(22, 67)

console.log(`${litro1.toFixed(3)}`)
console.log(`${litro2.toFixed(3)}`)
console.log(`${litro3.toFixed(3)}`)