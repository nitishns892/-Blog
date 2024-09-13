let radio = document.querySelector("#r1");
radio.addEventListener("click", myfun)

function myfun(){

let blogs = document.querySelectorAll(".b");
let blog1 = document.querySelectorAll(".a");

blogs.forEach(function(element) {
    // Check the current display property
    if (element.style.display === 'none') {
        // If it's 'none', set it to 'block' (or original display)
        element.style.display = 'flex';
    } else {
        // If it's not 'none', set it to 'none'
        blog1.forEach(function(element1) {
            if (element1.style.display === 'none') {
                element1.style.display = 'flex';
            }
        });
        element.style.display = 'none';
    }
});
}

let radio1 = document.querySelector("#r2");
radio1.addEventListener("click", myfun1)


function myfun1(){
    let blogs = document.querySelectorAll(".a");
    let blog1 = document.querySelectorAll(".b");

    blogs.forEach(function(element) {
        // Check the current display property
        if (element.style.display === 'none') {
            // If it's 'none', set it to 'block' (or original display)
            element.style.display = 'flex';
        } else {
            // If it's not 'none', set it to 'none'
            blog1.forEach(function(element1) {
                if (element1.style.display === 'none') {
                    element1.style.display = 'flex';
                }
            });
            element.style.display = 'none';
        }
    });
}