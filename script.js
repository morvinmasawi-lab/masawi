document.getElementById("studentForm").addEventListener("submit", function(e){

    e.preventDefault(); // stop form from reloading



    // Show success message

    const messageDiv = document.getElementById("message");

    messageDiv.innerText = "Registration submitted successfully!";

    messageDiv.style.display = "block";



    // Optional: clear form

    this.reset();



    // Fade out message after 3 seconds

    setTimeout(() => {

        messageDiv.style.display = "none";

    }, 3000);

});
