// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('card-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const cardDisplay = document.getElementById('card-display');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Create HTML for the card message
        const cardHTML = `
            <div class="card-content">
                <h2>Happy Birthday, ${name}!</h2>
                <p>${message}</p>
            </div>
        `;

        // Display the card message
        cardDisplay.innerHTML = cardHTML;

        // Clear the form inputs
        nameInput.value = '';
        messageInput.value = '';
    });
});
