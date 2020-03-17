document.addEventListener('DOMContentLoaded', function() {

    // When the user scrolls, execute the stickyHeader function
    window.onscroll = function() {stickyHeader()};

    // Get the header
    var header = document.getElementById("mytopbar");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position
    // remove "sticky" when you leave the scroll position
    function stickyHeader() {
        if(window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
})

// Function to handle the button being pressed
function buttonPlay() {
    var txt;
    if(confirm("Did you mean to press the button?")){
        txt = "The button, was indeed pressed";
    }
    else {
        txt = "Well then. I guess it was a mistake";
    }

    document.getElementById("welcome-message").innerText = txt;
}