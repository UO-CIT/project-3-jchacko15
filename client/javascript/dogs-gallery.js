// jshint esversion: 6
let failHandler = () => {

    console.log("Fail -- unknown breed");

     $(".photos").empty().html("<h3>Error -- breed not found<h3>");
  };

//1. Define the onclick handler
let clickHandler = function() {
  let imgElem;
  let prefixURL =
    'http://api.flickr.com/services/feeds/photos_public.gne?tags=';
  let suffixURL = '&format=json&jsoncallback=?';
  //get value entered by user from textbox

   flickrTag = document.querySelector('input[type = "text"]').value;
  console.log(flickrTag);
   newtag="";
    for(i=0;i<flickrTag.length;i++){
    if(flickrTag.charAt(i)!=" "){
        newtag+=flickrTag.charAt(i);
    }
    }
  let requestURL = prefixURL + newtag + suffixURL;

  //clear old photos
  document.querySelector('.photos').innerHTML = '';

  $.getJSON(requestURL, function(dogAPIresponse) {
    dogAPIresponse.items.forEach(function(item, index) {
      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new element to hold the image
        // but hide it so we can fade it in
        let imgElem = document.createElement('img');
        imgElem.hidden = true;

        // set the attribute to the response url
        imgElem.setAttribute('src', item.media.m);
        imgElem.setAttribute('width', '100');

        // attach the img tag to the main
        // photos element and then fade it in
        document.querySelector('.photos').appendChild(imgElem);
        imgElem.hidden = false;
      }
    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});
