// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const form = document.querySelector('form');
const remove_h2 = document.querySelector('h2');
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

form.onsubmit = function(prevent) {
    prevent.preventDefault();

    form.innerHTML = '<p class = "message">Thank you for your message!</p>';
    remove_h2.remove();
};
