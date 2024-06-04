const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/cities-skylines-manhattan.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://cdn.pfps.gg/pfps/2170-alone.gif';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log("hahah")
}

// window object helps in getting the computed styles of the element passed
//window.getComputedStyle(<element>)