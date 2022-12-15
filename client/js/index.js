// Select the parent element that contains all of the accordion buttons
var accordionParent = document.getElementById("accordion-parent");

// Attach the event listener to the parent element
accordionParent.addEventListener("click", function(event) {
// Check if the clicked element is an accordion button
if (event.target.classList.contains("accordion")) {
    // If it is, toggle the "active" and "show" classes on the clicked element and its corresponding panel
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("show");
}
});


