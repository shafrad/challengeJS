function spell(word){
    let i = word.length; 
    i = i - 1;
    let reverse = ""; 
    for (let x = i; x >= 0; x--)
        {
         reverse += (word.charAt(x));
     }
    return reverse;
}
var word = 'ibu ratna';
var balik = word + ' ' + spell(word);
var array = balik.split(' ');
console.log(array)
