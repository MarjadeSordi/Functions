let dobro = function (a) {
    return 2*a
}

dobro =(a) => {
    return 2*a
}

dobro = a => 2* a //return está implicito, serve para funções pequenas que não serão necessárias posteriormente.
console.log(dobro(3))

let ola = function(){
    return "Olá"
}
console.log(ola())

ola = () => "Olá"
console.log(ola())
ola =_=>"Olá!"//possuí parametros 
console.log(ola())