let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let eventName = document.getElementById("event").value;

    document.getElementById("message").innerHTML =
        "Thank you " + name +
        "! You registered for " + eventName;

    form.reset();

});
