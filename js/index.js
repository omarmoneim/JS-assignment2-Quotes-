// function myQuote(){
//  var quotes = [
//     '"Resentment is like drinking poison and waiting for your enemies to die."',
//     '"It\'s not what happens to you, but how you react to it that matters."',
//     '"The best revenge is massive success."',
//     '"Do not take life too seriously. You will not get out alive."',
//     '"You miss 100% of the shots you don\'t take."',
//   ];

//    var quoteFounder = [
//     "--Nelson Mandela",
//     "--Epictetus",
//     "--Frank Sinatra",
//     "--Elbert Hubbard",
//     "--Wayne Gretzy",
//   ];

//   var qNum=Math.floor(Math.random() * quotes.length);
//   document.getElementById("quotes").innerHTML=(quotes[qNum]);
//   document.getElementById("quote-author").innerHTML=(quoteFounder[qNum]);

// }

// var quotes = [];
// var quoteFounder = [];
// document.getElementById("qbutton").onclick = function () {
//   quotes = [
//     '"Resentment is like drinking poison and waiting for your enemies to die."',
//     '"It\'s not what happens to you, but how you react to it that matters."',
//     '"The best revenge is massive success."',
//     '"Do not take life too seriously. You will not get out alive."',
//     '"You miss 100% of the shots you don\'t take."',
//     '"So many books, so little time."',
//     '"A room without books is like a body without a soul."',

//     `" Don't walk in front of me… I may not follow <br>
//        Don't walk behind me… I may not lead <br>
//         Walk beside me… just be my friend." `,
//   ];

//   quoteFounder = [
//     "--Nelson Mandela",
//     "--Epictetus",
//     "--Frank Sinatra",
//     "--Elbert Hubbard",
//     "--Wayne Gretzy",
//     "--Frank Zappa",
//     "--Marcus Tullius Cicero",
//     "--Albert Camus",
//   ];

// };

var quotes = [];
var quoteFounder = [];
var arr;
document.getElementById("qbutton").onclick = function () {
  quotes = [
    '"Resentment is like drinking poison and waiting for your enemies to die."',
    '"It\'s not what happens to you, but how you react to it that matters."',
    '"The best revenge is massive success."',
    '"Do not take life too seriously. You will not get out alive."',
    '"You miss 100% of the shots you don\'t take."',
    '"So many books, so little time."',
    '"A room without books is like a body without a soul."',

    `" Don't walk in front of me… I may not follow <br>
       Don't walk behind me… I may not lead <br>
        Walk beside me… just be my friend." `,
  ];

  quoteFounder = [
    "--Nelson Mandela",
    "--Epictetus",
    "--Frank Sinatra",
    "--Elbert Hubbard",
    "--Wayne Gretzy",
    "--Frank Zappa",
    "--Marcus Tullius Cicero",
    "--Albert Camus",
  ];

  var qNum;
  do {
    qNum = Math.floor(Math.random() * quotes.length);
    console.log("inside do  "+" "+ qNum)
  } 
  while (arr === qNum);
  console.log("before"+" "+ arr);

  arr = qNum;
  console.log("after "+" "+ arr);

  document.getElementById("quotes").innerHTML = quotes[qNum];
  // console.log(quotes[qNum]);

  document.getElementById("quote-author").innerHTML = quoteFounder[qNum];
  // console.log(quoteFounder[qNum]);
};
