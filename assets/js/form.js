// Function to change the background image based on selected destination  
function changeBackground(destination) {  
    const body = document.body;  
    switch (destination) {  
        case 'Mara':  
            body.style.backgroundImage = 'url("images/mara.jpg")'; // Replace with your actual image path  
            break;  
        case 'Nakuru':  
            body.style.backgroundImage = 'url("images/nakuru.jpg")'; // Replace with your actual image path  
            break;  
        case 'Nairobi':  
            body.style.backgroundImage = 'url("images/nairobi.jpg")'; // Replace with your actual image path  
            break;  
        case 'Amboseli':  
            body.style.backgroundImage = 'url("images/amboseli.jpg")'; // Replace with your actual image path  
            break;
        case 'Samburu':  
            body.style.backgroundImage = 'url("images/samburu.jpg")'; // Replace with your actual image path  
            break;
        case 'Diani':  
            body.style.backgroundImage = 'url("images/diani.jpg")'; // Replace with your actual image path  
            break;
        default:  
            body.style.backgroundImage = 'url("images/default.jpg")'; // A default background image  
            break;  
    }  
    // Also set the background size and style for a proper effect  
    body.style.backgroundSize = 'cover'; // Cover the entire viewport  
    body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating of the image  
    body.style.backgroundPosition = 'center'; // Center the image  
}  

// Add event listener to the destination select field  
document.getElementById('destination').addEventListener('change', function() {  
    const selectedDestination = this.value;  
    changeBackground(selectedDestination);  
});  

// Existing submit button event listener  
document.getElementById('submitButton').addEventListener('click', function() {  
    let formMessage = document.getElementById('formMessage');  

    // Simple validation (you can add more complex validation as needed)  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const phone = document.getElementById('phone').value;  
    const destination = document.getElementById('destination').value;  
    const start = document.getElementById('start').value;  
    const end = document.getElementById('end').value;  
    const adults = document.getElementById('adults').value; // Get number of adults  
    const children = document.getElementById('children').value; // Get number of children  
    const notes = document.getElementById('notes').value; // Get the additional notes  

    if (name && email && phone && destination && start && end && people) {  
        formMessage.innerHTML = `<p>Booking Submitted Successfully!</p>  
                                 <p>Name: ${name}<br>  
                                 Email: ${email}<br>  
                                 Phone: ${phone}<br>  
                                 Destination: ${destination}<br>  
                                 Start Date: ${start}<br>  
                                 End Date: ${end}<br>  
                                 Number of Adults: ${adults}<br>  
                                 Number of Children: ${children}<br>  
                                 Additional Notes: ${notes}</p>`;  
        formMessage.style.color = "green";  

        // Redirecting to another page (replace 'thankyou.html' with your desired link)  
        window.location.href = 'thankyou.html'; // You can specify the URL (or keep it as a download, etc.)  
        
    } else {  
        formMessage.innerHTML = "<p>Please fill all fields correctly.</p>";  
        formMessage.style.color = "red";  
    }  
});
