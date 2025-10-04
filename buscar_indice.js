
/* Problema 1 : Criar um array de numeros inteiros,
tem que ter um numero x, precisa encontrar dois valores da array que somam
a esse numero x, deve retornar os indices desses numeros */

let nums = [2, 7, 11, 15];
let target = 12; 

function soma(nums, target){
    let map ={};

    for (let i =0; i < nums.length; i++){
        let num = nums[i]; // numero atual
        let comple = target -num; // quanto falta para o numero x

        if (comple in map){ //  se o complemento ta no mapa
            return [map[comple], i]; //retorna o indice do complemento e o atual 
        }
        map [num] = i; // guardao numero e seu indice
    }
};
//let res = soma(nums, target);
console.log(soma(nums, target));

/* Imagine que você está no mercado
Você tem uma lista de compras (o array nums) e um valor de dinheiro que quer gastar (target).
Você precisa achar dois produtos que juntos custem exatamente esse valor.
Como você faz?
Você anda pelo mercado (percorre o array).
Cada vez que vê um produto, você pensa:
“Se eu comprar este produto, quanto falta para dar o valor exato do meu dinheiro?”
Você olha no seu caderninho (o map) para ver se já anotou antes algum produto que custa exatamente o que falta.
Se sim: você achou os dois produtos! 
Se não: você anota no caderninho o preço deste produto e a posição dele, para poder usar mais tarde. */