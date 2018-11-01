let theArticleTitle;
let theArticleImage;

class theArticle{
    constructor(mTitle = String, mImage = Image){

        this.theArticleTitle = mTitle;
        this.theArticleImage = mImage;
    }     
}

let titleContainer = document.getElementsByClassName("article-heading");
let imgContainer = document.getElementsByClassName("thumbnail");

class articleContainer extends theArticle{
    constructor(mTitleContainer, mImgContainer){
        this.theTitleContainer = mTitleContainer;
        this.theImgContainer = mImgContainer;
    }
}

var theArticles = new theArticle("Bonjour Monde", "../img/globe.jpeg");

var theArticlesLength = theArticles.length;

for(i = 0; i < theArticlesLength; i++){
    var newElement = document.createElement('div');
    newElement.className = "article";
    newElement.innerHTML = theArticles[i];
    document.body.appendChild(newElement);

}

var theArticlesSection = document.getElementById("latest-articles");
