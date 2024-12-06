// script.js
document.querySelectorAll('.book a').forEach(bookLink => {
    bookLink.addEventListener('click', function(event) {
        alert('You clicked on ' + this.querySelector('p').innerText);
        // You can remove the alert if you just want to navigate to the link
        // event.preventDefault(); // Uncomment to prevent navigation
        // window.location.href = this.href; // Uncomment to control navigation manually
    });
});