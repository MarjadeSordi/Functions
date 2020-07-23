const notas =[2.0, 4.4, 5.0, 7.2, 9.0, 10, 5.2, 9.3]

let notasBaixas = []
for (i in notas) {
    if (notas[i] >=7 ){
        notasBaixas.push(i)
    }
}

console.log(notasBaixas)

//Com callback

const notasBaixas2 = notas.filter (function (nota) {
    return nota > 7 
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)