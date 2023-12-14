//selecting elements
const headEl = document.getElementsByClassName("head")[0];

// gelobal vraibales
let imgCount = 9;

// functions
const listImages = () => {
  for (let i = 0; i < imgCount; i++) {
    const pageImg = document.createElement("img");
    pageImg.src = `https://source.unsplash.com/random/300x30${i}`;
    pageImg.classList.add(`page-Img`);
    headEl.appendChild(pageImg);
  }
};

listImages();
// eventlisnters
window.addEventListener("lod", listImages);
