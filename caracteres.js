
/* Problema 2 : Dada uma string, queremos saber quantas letras consecutivas podemos
 pegar sem repetir nenhuma..*/
function longestSubstring(s) {
    let maxLength = 0; //guarda o maior tamanho
    let start = 0; // começo da sequencia
    let seen = {}; //guarda quais letras  apareceram e onde

    for (let end = 0; end < s.length; end++) { // para olhar cada string
        let char = s[end]; // letra atual
        if (seen[char] >= start) {
            start = seen[char] + 1; // onde a letra apareceu
        }
        seen[char] = end;
        maxLength = Math.max(maxLength, end - start + 1); // verifica se a sequencia é maior q a anterior
    }

    return maxLength; // tamanho maior  sem repetição
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("aakdiuiuidshuh"))

/*  esse código é como  se você está arrumando roupas no cabide, mas não pode repetir nenhuma peça no mesmo cabide.
 Seu objetivo: colocar o máximo de peças possíveis sem repetir nenhuma.*/