function init() {
   'use strict';
    
    var mImage;
    var mTitle;
    
    class Work{
        constructor(workImage = 'alex-', workTitle, workImageUrl){
            workImage.this = 'img/alex-smith-688708-unsplash.jpg';
            workTitle.this = "Hello World!";
        }
        
    }
    
    function createWork(imageUrl, titleString){
        //Function to Insert Element after
        Element.prototype.appendAfter = function(element){
            element.parentNode.insertBefore(this, element.nextSibling);
        }
        
        //1. Create new container, thumbnail, image src and title for the work
        //Create a new container for the work
        var worksContainer = document.find
        var newWork = document.createElement("div");
        newWork.setAttribute("class", "project");
        //Create a new Thumbnail holder
        var newThumbnailHolder = document.createElement("div");
        newThumbnailHolder.setAttribute("class", "thumbnail");
        
        //Create a new Title
        var newTitle = document.createElement("h3");
        newTitle.setAttribute("class", "project-heading");
        
        //Create a New Image
        var newImage = document.createElement("img");
        newImage.setAttribute("class", "the-img");
        
        //2. Place the Elements in the correct place
        //Insert the Image into the Thumbnail Holder
        newThumbnailHolder.appendChild(newImage);
        
        //Insert the tile after the thumbnail div
        newImage.appendAfter(document.getElementsByClassName('thumbnail'));
        
        //add img src to Imagediv
        newImage.src = imageUrl.src;
        //add Title to title div
    }
    
    function displayWork (){
        createWork("img/", "Hello World!");
    }
    
}

window.onload = init;