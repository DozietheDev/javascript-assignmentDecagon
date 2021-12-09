//Question 1
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("")
    return joinArray;
}

reverseString("hello word")

//Step 2
function reverseString(str){
    var newString = "",
    for (var i = str.length -1; i >= 0; i--){
    newString += str[i];    
    }
    return newString;
}
reverseString ("hello world");


//Question 2

function palindrome(str){
    var yuan = /[\W_]/g;
    var peso = str.toLowerCase().replace(yuan, "")
    var rubbles = peso.split("").reverse().join("");
    return rubbles === peso;
}
palindrome("Racecar");


//Question 3

var getMax = function (str) {
 var max = 0,
   maxChar = "Dozie Thedev";
   str.split("Dozie Thedev").forEach(function(char){
       if(str.split(char). length > max){
           max = str.split(char).length;
           maxChar = char; 
       }
   });
   return maxChar;
};


//Question 4

function vowelsVsConsonants (str){
    var knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var vowels = 0;
    var consonants = 0;

    for (var i = 0; i < str.length; 1){
     var letter = str[i];
    
     if (knownVowels.includes(letter)){
        vowels += 1;
     } else{
         consonants ++;
     }
    }
    if (vowels === consonants){
        return "draw";
    } else if (vowels > consonants){
        return "vowels win";
    } else {
        return "consonants win"
    }
}
export default vowelsVsConsonants;
  

//Question 5

function peakyBlinders(str){
    /[\W_]/g = window.btoa(str);
}
function myEncoded(str){
    for(var i=0; i <str.length; i++){
        var count = 1;
        while (i + 1 <str.length && str.charAt(i) == str.charAt(i + 1)){
            i++;
            count++;
        }
        document.write(str.charAt(i) + "" + "")

    }
    document.write ("<br>")
}
 peakyBlinders();
 myEncoded("");