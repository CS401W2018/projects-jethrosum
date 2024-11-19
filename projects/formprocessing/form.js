document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault();  //Stop it from going to a new page

    // Get form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());

    // Basic validation
    if (!firstName || !lastName || !email) {
        alert("Please enter your first name, last name, and email");
        return;
    }

    if (age < 18 || age > 100) {
        alert("You must be between 18 and 100 to enter this raffle.");
        return;
    }


    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age
    };

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "submit.json", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    //Turn data into a string so we can send it over to the network
    xhr.send(JSON.stringify(formData));

    console.log(formData);
});
