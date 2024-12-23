//index.js

// Event listeners for "Hire Me" and "Get Resume" buttons
document.addEventListener('DOMContentLoaded', function() {
    const hireMeButton = document.querySelector('.intro-buttons .btn.common-btn');
    const getResumeButton = document.querySelector('.intro-buttons .btn.ghost-btn');

    // Function to handle button clicks
    function handleButtonClick(url) {
        window.location.href = url;
    }

    // Add click event listener for "Hire Me" button
    if (hireMeButton) {
        hireMeButton.addEventListener('click', function() {
            handleButtonClick('mailto:maryem.hadjwannes@gmail.com'); // Replace with your hire link
        });
    }

    // Add click event listener for "Get Resume" button
    if (getResumeButton) {
        getResumeButton.addEventListener('click', function() {
            handleButtonClick('https://drive.google.com/file/d/1-etVaYQhuRZGmu1ydzrffne15_V8hRNF/view?usp=sharing'); // Replace with your resume link
        });
    }
});







const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});





// Select the form and submit button
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form inputs
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const phone = contactForm.querySelector('input[placeholder="Your Phone"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Perform validation (optional)
        if (name && email && phone && message) {
            // Send the form data to EmailJS
            emailjs.send("service_hkzy63e", "template_k9bcd43", {
                from_name: name,
                from_email: email,
                phone: phone,
                message: message
            }).then(function(response) {
                alert("Your message has been sent!");
                contactForm.reset();  // Reset the form after successful submission
            }, function(error) {
                alert("Oops! Something went wrong. Please try again.");
            });

            // Optionally, log the form submission
            console.log("Form submitted:", { name, email, phone, message });
        } else {
            alert("Please fill out all fields!");
        }
    });
}
