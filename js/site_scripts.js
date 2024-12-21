var photos = []; //Declaring an empty array to store image elements
var fileNames = []; //Declaring an empty element to store image filename
var imageList = []; //Declaring an empty array to store html list that contains image
var image; //Declare empty variable to store the assembled image list codes
var openList = "<li class='partner'>"; // Declare a variable to contain the open list tag
var closeList = "</li>"; //Declare a variable to contain the close list tag
// create a loop to creATE 6 images  starting with index 0
for (var i = 0; i < 6; i++) {
    fileNames.push("partner" + (i + 1)); //create image filename and store in the array
    photos.push("<img src='images/partners/" + fileNames[i] + ".png'>"); //Assemblingthe filename into a large element
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;

//Random codes
var code = " "; /* Initialize null value */
var getCode = "";
var btnvalue;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";