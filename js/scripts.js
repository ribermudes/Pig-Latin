$(document).ready(function() {
  var translateWord = function(inputString) {
    inputString = inputString.toLowerCase();
    var vowelPosition = -1;
    var vowels = ["a","e","i","o","u"];
    for (var i=0; i<inputString.length; i+=1) {
      if(vowels.indexOf(inputString[i]) != -1) {
        if (!(inputString[i]==="u" && inputString[i-1]==="q")) {
          vowelPosition = i;
          break;
        }
      }
    }
    var suffix = inputString.slice(0,vowelPosition);
    inputString = inputString.slice(vowelPosition,inputString.length);
    var pigLatin = inputString.concat(suffix);
    if(vowels.indexOf(pigLatin[pigLatin.length-1]) != -1) {
      pigLatin = pigLatin + "yay";
    } else {
      pigLatin = pigLatin + "ay";
    }
    return pigLatin;
  }

  var translate = function(inputSentence) {
    var inputArray = inputSentence.split(" ");

    var translatedSentence = "";
    inputArray.forEach(function(word) {
      translatedSentence = translatedSentence + translateWord(word) + " ";
    });
    return translatedSentence;
  }


  $("form#questions").submit(function(event){
    event.preventDefault();
    var output = translate($("#name").val());
    $("p").text(output);
  });
});
