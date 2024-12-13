// Initialize EmailJS with your public key
(function() {
    emailjs.init("Sd9rT2KpNm05I6EEZ"); // Replace with your actual public key
})();

// Get the form and add submit event listener
document.querySelector('.rvsp__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const guests = document.getElementById('number').value;
    const attending = document.getElementById('attendance').value;
    const comment = document.getElementById('textarea').value;

    // Prepare template parameters
    const templateParams = {
        to_email: 'hmwesterlund25@gmail.com',
        from_name: name,
        from_email: email,
        guest_count: guests,
        attendance: attending,
        message: comment
    };

    // Send email using EmailJS
    emailjs.send('service_hllqc8f', 'template_yz6sfon', templateParams)
        .then(function(response) {
            alert('RSVP sent successfully!');
            // Clear the form
            event.target.reset();
        }, function(error) {
            alert('Failed to send RSVP. Please try again.');
            console.error('EmailJS error:', error);
        });
});