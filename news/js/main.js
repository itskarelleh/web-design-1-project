//The Article Title
var theArticleTitle;

//The Article Image
var theArticleImage;

//The Article constructor
function theArticle(mTitle=String, mImage=Image){

    this.theArticleTitle = mTitle;
    this.theArticleImage = mImage;
}     

//The Articles
var articleOne = new theArticle("Bonjour Monde", "../img/globe.jpeg");
var articleTwo = new theArticle("Comment allez vous?", "../img/download.jpg");
//var articleThree = new theArticle("","../img/");



var theImage = document.createElement("IMG");

//Insert Img after article div
var theArticleDiv = document.getElementsByClassName("article");


theImage.after(theArticleDiv);
function theArticleContainer(){
    theImage.setAttribute("src", theArticle);
}

console.log(articleOne,articleTwo);