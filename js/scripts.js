$(document).ready(function() {
  var translateWord = function(inputString) {
    inputString = inputString.toLowerCase();
    var vowelPosition = -1;
    vowelPosition = inputString.search(/[aeiou]/i);

    var suffix = inputString.slice(0,vowelPosition);
    inputString = inputString.slice(vowelPosition,inputString.length);
    var pigLatin = inputString.concat(suffix);
    if(pigLatin.search(/[aeiou]\b/i) != -1) {
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
