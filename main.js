
var palindrome = function(word) {
  var newWord = word.split(" ");
  newWord = newWord.join("");
  
  var forwardArr = newWord.split("");
  var reverseArr = newWord.split("").reverse();
  
  if(forwardArr.join("")===reverseArr.join("")){
    return true;
  }
  else{
    return false;
  }
};

var dashInsert = function(num) {
  var numArray = num.toString().split("");
  var newNum = "";
  for(var i=1; i<numArray.length; i++){
    if ((+numArray[i]%2===0)||(+numArray[i-1]%2===0)) {
      newNum = newNum + numArray[i];
    }
    else{
      newNum = newNum + "-" + numArray[i];
    }
  };
  return newNum;
};

var ceasarCipher = function(string, shift) {
  var newString = "";

  for(var i=0; i<string.length; i++){
   
    code = string.toLowerCase().charCodeAt(i);

    if (96<code<123) {
      if (code+shift<123) {
        newString += 
          String.fromCharCode(code).toUpperCase()===string[i] ? 
            String.fromCharCode(code+shift).toUpperCase() : 
            String.fromCharCode(code+shift);
      }
      else {
        newString += 
          String.fromCharCode(code).toUpperCase()===string[i] ? 
            String.fromCharCode(96+((code+shift)-122)).toUpperCase() : 
            String.fromCharCode(96+((code+shift)-122));
      }; 
    }
    else{
      newString += String.fromCharCode(code);
    };
  };
  return newString;
};