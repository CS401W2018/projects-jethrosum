document.getElementById('myForm').addEventListener('submit', function(event) {
    // event.preventDefault();  //Stop it from going to a new page
    // Get form data
    const name = document.getElementById('name').value.trim();

    // Basic validation
    if (!name) {
        alert("Please enter your full name.");
        return;
    }

    const formData = {
        fullName: name,
    };


    //HttpRequest means sending a request to the network somewhere
    //Open a new request = create a new connection with the server

    //This initializes a new XMLHttpRequest object, which is used to make HTTP requests to a server without reloading the web page.
    const xhr = new XMLHttpRequest();

    //Method: "POST" indicates that data is being sent to the server.
    // URL: "submit.json" is the target endpoint (e.g., a file or API endpoint) where the data is sent.
    // Asynchronous Flag: true ensures the request is asynchronous, meaning it won’t block the rest of the page’s execution.
    xhr.open("POST", "submit.json", true);

    //This specifies that the data sent to the server will be in JSON format (application/json) and encoded in UTF-8.
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    //Turn data into a string so we can send it over to the network
    xhr.send(JSON.stringify(formData));

    // //This is show up first! 
    // alert("I should happen last, right?");
    console.log(formData);
});