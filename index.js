//birinchi masala
//function rev(arg){
//    let b = arg.reverse;
//    return b;
//};
//rev('salom', 'alik');

//Ikkinchi masala
//function findLongestWord(text) {
//    let words = text.split(' ');
//    let longestWord = '';
//    for (let j = 0; j < words.length; j++) {
//      let word = words[j];
//        if (word.length > longestWord.length) {
//        longestWord = word;
//      }
//    }
//    return longestWord;
//  }
//  let inputText = 'Bobur maktab tomonga qarab harakatlanib ketmoqda edi.';
//  let longestWord = findLongestWord(inputText);
//  console.log('Uzun soz: ', longestWord);

//Uchinchi masala
//function unlilarSoni(text) {
//    let counter = 0;
//    let unlilar = ['a', 'e', 'i', 'o', 'u'];
//    text = text.toLowerCase();
//    for (let i = 0; i < text.length; i++) {
//      let unli = text[i];
//        if (unlilar.includes(unli)) {
//        counter++;
//      }
//    }
//    return counter;
//  }
//  let inputText = 'Yangi yil ham kirib keldi.';
//  let unlilarsoni = unlilarSoni(inputText);
//  console.log('Unlilar soni: ', unlilarsoni);

//to'rtinchi masala
//function isPalindrome(text) {
//    let cleanText = text.replace('').toLowerCase();  
//    let reversedText = cleanText.split('').reverse().join('');
//    return cleanText === reversedText;
//  }
//  let inputText = 'salom, turkiya, fargona, radar';
//  let Palindromic = isPalindrome(inputText);
//  console.log('palindrome:', Palindromic);

//Beshinchi masala
//function Duplicates(array) {
//    return Array.from(new Set(array));
//  }
//  var inputArray = [6, 6, 12, 3, 3, 34, 34, 34, 5, 5, 5];
//  var array = Duplicates(inputArray);
//  console.log('qatnashuvchilar:', array);

//Oltinchi masala
//function boshHarfliWords(text) {
//    let words = text.split(' ');
//    let boshHarfliWords = words.map(function(word) {
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    });
//    var boshHarfliText = boshHarfliWords.join(' ');
//    return boshHarfliText;
//  }
//  let inputText = 'assalomu alaykum john amaki';
//  let boshHarfliText = boshHarfliWords(inputText);
//  console.log('Bosh harfli text:', boshHarfliText);

//Yettinchi masala
//function MissingNumber(array) {
//    let n = array.length + 1;
//    let eSum = (n * (n + 1)) / 2;
//    let Sum = array.reduce((sum, num) => sum + num, 0);
//    return eSum - Sum;
//  }
//  let inputArray = [1, 2, 3, 5, 6, 7, 8];
//  let missingNumber = MissingNumber(inputArray);
//  console.log('Yetishmayotgan raqam :', missingNumber);