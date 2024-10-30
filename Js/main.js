var quotes =[
    {
        quote : "“Be yourself; everyone else is already taken.”" ,
        author :"― Oscar Wilde" ,
        img : "images/1.jpg",
    },
   {
        quote :"“So many books, so little time.” ",
        author :"― Frank Zappa " ,
        img : "images/2.jpg",
    },
    {
        quote :" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author :"― Albert Einstein " ,
        img : "images/3.jpg",
    },
    {
        quote :"“A room without books is like a body without a soul.” ",
        author :"― Marcus Tullius Cicero " ,
        img : "images/4.jpg",
    },
    {
        quote :"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        author :"― Bernard M. Baruch " ,
        img : "images/5.jpg",
    },
    {
        quote :"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        author :"― Dr. Seuss " ,
        img : "images/6.jpg",
    },
    {
        quote :"“Be the change that you wish to see in the world.” ",
        author :"― Mahatma Gandhi " ,
        img : "images/7.jpg",
    },
    {
        quote :"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ",
        author :"― J.K. Rowling, Harry Potter and the Goblet of Fire " ,
        img : "images/8.jpg",
    },
    {
        quote :"“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend” ",
        author :"― Albert Camus " ,
        img : "images/9.jpg",
    },
    {
        quote :"“If you tell the truth, you don't have to remember anything.” ",
        author :"― Mark Twain " ,
        img : "images/10.jpg",
    },
];


var secNumIndex ;
var alreadyDisplayed = [] ;

function addQuote(){
    do{
        var numIndex = Math.floor(Math.random()*quotes.length) ; 
    }while (secNumIndex == numIndex || alreadyDisplayed.includes(numIndex) );
    secNumIndex == numIndex ;
    alreadyDisplayed.push(numIndex);
    document.getElementById("quote").innerHTML= quotes[numIndex].quote ;
    document.getElementById("author").innerHTML= quotes[numIndex].author ;
    document.getElementById("img").setAttribute('src', quotes[numIndex].img) ;
}