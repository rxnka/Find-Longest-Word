// function that accepts a string as a prameter and findes the longest word in it
function longestWord(str){
    const strArray = str.split(' ').sort(function(str1 , str2 ) {return str2.length - str1.length} )[0];
    return strArray;
}
console.log(longestWord('The longest word in the English language is usually considered to be: antidisestablishmentarianism.'));