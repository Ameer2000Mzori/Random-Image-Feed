//selecting elements
var headEl = document.getElementsByClassName("head")[0];
// gelobal vraibales
var imgCount = 9;
// functions
var listImages = function () {
    for (var i = 0; i < imgCount; i++) {
        var pageImg = document.createElement("img");
        pageImg.src = "https://source.unsplash.com/random/300x30".concat(i);
        pageImg.classList.add("page-Img");
        headEl.appendChild(pageImg);
    }
};
listImages();
// eventlisnters
window.addEventListener("lod", listImages);
