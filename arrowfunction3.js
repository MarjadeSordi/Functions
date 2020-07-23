let ComparacomThis = function(param){
    console.log(this===param)
}

ComparacomThis(global)
const obj={}
ComparacomThis=ComparacomThis.bind(obj)
ComparacomThis(global)
ComparacomThis(obj)

let ComparathiscomArrow = param => console.log(this===param)
ComparathiscomArrow(global)
ComparathiscomArrow(module.exports)

ComparathiscomArrow = ComparathiscomArrow.bind(obj)
ComparathiscomArrow(obj)
ComparathiscomArrow(module.exports)