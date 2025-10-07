
/* Problema 3 : mapeamento de numeros com letras correspondentes
retornando suas combinacoes possiveis*/
const letras_nums = {
    "0" :"#@!",
    "1":"abc",
    "2" : "def",
    "3" : "ghi",
    "4" : "jkl",
    "5" : "mno",
    "6" : "pqr",
    "7" : "stu",
    "8" : "vwx" ,
    "9" : "yz"
};

function combinacao(digitos){
    if (digitos === 0) return [];

    let resul =[];

    function deVolta(indice, caminho){
        if (indice === digitos.length){
            resul.push(caminho)
            return
        }

        let letras = letras_nums[digitos[indice]]
        for (let letra of letras){
            deVolta(indice + 1, caminho + letra)
        }
    }
    deVolta(0, "")
    return resul
}
console.log(combinacao("14"))
