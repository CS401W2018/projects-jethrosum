document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault();  //Stop it from going to a new page

    // Get form data
    const email = document.getElementById('email').value.trim();

    // Basic validation
    if (!email) {
        alert("To receive your pdf guide, please enter your email address.");
        return;
    }

    const formData = {
        email: email,
    };

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "submit.json", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById('pdfinfo').innerHTML = response.message;
                    document.getElementById('myForm').innerHTML = "";
                } catch (e) {
                    alert('Error processing the server response.');
                    console.error('JSON parse error:', e);
                }
            } else {
                alert(`Error submitting form. Status: ${xhr.status}`);
                console.error('Request failed:', xhr.status, xhr.statusText);
            }
        }
    };

    //Turn data into a string so we can send it over to the network
    xhr.send(JSON.stringify(formData));

    console.log(formData);
});
