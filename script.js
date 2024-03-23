//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var squares = document.querySelectorAll(".square");

    // Function to change the color of squares
    function changeColor(square) {
        squares.forEach(function(sq) {
            if (sq !== square) {
                sq.style.backgroundColor = "#6F4E37"; // Coffee color
            }
        });
    }

    // Add event listeners to each square
    squares.forEach(function(square) {
        square.addEventListener("mouseenter", function() {
            changeColor(square);
        });

        square.addEventListener("mouseleave", function() {
            // Restore original color
            squares.forEach(function(sq) {
                sq.style.backgroundColor = "#E6E6FA"; // Lavender color
            });
        });
    });
});
