// Previous JavaScript code remains...

// Initialize EmailJS
emailjs.init("4aVv8rtXId-dzNGa-"); // Replace with your EmailJS public key

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    formStatus.textContent = 'Sending...';
    formStatus.className = 'form-status loading';

    // Prepare template parameters
    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        tour: this.tour.value,
        message: this.message.value
    };

    // Send email using EmailJS
    emailjs.send('service_62zs3mc', 'template_ilaqvos', templateParams)
        .then(function() {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'form-status success';
            contactForm.reset();
        }, function(error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'form-status error';
            console.error('EmailJS error:', error);
        });
});

// Previous JavaScript code continues...
