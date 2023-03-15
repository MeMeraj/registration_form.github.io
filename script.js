function handleSubmit(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display the output section and set the values of the output fields
    document.getElementById("output").style.display = "block";
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-password").textContent = password;

    // Reset the form inputs
    // document.getElementById("registration-form").reset();
}