var NumberOfWords = 35//the length of the array

var words = new BuildArray(NumberOfWords)//creating the new array

// The varibles of the array

words[1] = "Hot or Cold"
words[2] = "Minecraft"
words[3] = "Call of Duty"
words[4] = "Olympic Rings"
words[5] = "HIMYM"
words[6] = "Game of Thrones"
words[7] = "TMNT"
words[8] = "Batman"
words[9] = "Superman"
words[10] = "WonderWoman"
words[11] = "Spiderman"
words[12] = "Ironman"
words[13] = "Captain America"
words[14] = "Hulk"
words[15] = "Michael Jordan"
words[16] = "Friends"
words[17] = "Suits"
words[18] = "Disneyland"
words[19] = "Pulp Fiction"
words[20] = "Basketball"
words[21] = "Football"
words[22] = "Voleyball"
words[23] = "Facebook"
words[24] = "Bill Gates"
words[25] = "Apple"
words[26] = "Ipod"
words[27] = "Macroeconomics"
words[28] = "Microeconomics"
words[29] = "Microsoft"
words[30] = "Donald Trump"
words[31] = "Hillary Clinton"
words[32] = "Elvis Presley"
words[33] = "Santa Claus"
words[34] = "Museum"
words[35] = "Submarine"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
