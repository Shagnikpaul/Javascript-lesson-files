const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}






/*
creating child 
document.createElement('img')

appending..
document.<element>.appendChild(<childname>)


*/


/* 
    removing child 
    <element/node>.removeChild(<child_name>)

    remove itself
    <any_element>.remove()

*/