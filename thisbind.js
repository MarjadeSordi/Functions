const pessoa= {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//Paradigma, o this se refere a pessoa e não a função

const pessoa1= pessoa.falar.bind(pessoa)
pessoa1()