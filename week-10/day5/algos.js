// Anagrams are capPhrase1 or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.



string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false



function isAnagrams(stringA, stringB) {
  
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
    if (stringA.length !== stringB.length) return false;
    let aCharMap = {};
    let bCharMap = {};
  
    for (let i = 0; i < stringA.length; i++) {
      bCharMap[stringB[i]] = bCharMap[stringB[i]] + 1 || 1;
      aCharMap[stringA[i]] = aCharMap[stringA[i]] + 1 || 1;
    }
    
    for (let q of stringB) {
      if (bCharMap[q] !== aCharMap[q]) {
        return false;
      }
    }
    return true;
}  
console.log(`isAnagram : ${isAnagrams('A gentleman', 'Elegant man')}`)
console.log(`isAnagram : ${isAnagrams('Clint Eastwood', 'Old West Action')}`)
console.log(`isAnagram : ${isAnagrams('idontlikealgos', 'algoverybad')}`)


// write a function that capitalizes the first character of every word in a string

const phrase1 = "randy doesnt like giving algos";
const phrase2 = "arent you glad its friday";
const phrase3 = "i wonder whats for lunch today";

const capitalize = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  let result = capitalize('i wonder whats for lunch today');
  console.log(result);

  //Write a function that finds the missing number in a given integer array
//   const missingNum = (arr) => {
//     const sum = ((arr.length + 1) * (arr.length + 2)) / 2;
//     const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
//     return sum - arrSum(arr);
//   };
// let arr1 = [1,2,3,4,5,6,7,8,10];
// console.log(missingNum(arr1));
//expect result: 9