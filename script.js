const myForm = document.querySelector("form");
myForm.addEventListener("submit",function(event){
    event.preventDefault();
    const firstname = document.getElementById("first-name").value.trim();
    const lastname = document.getElementById("last-name").value.trim();
    const message = document.getElementById("message").value.trim();
    if (firstname === "" || lastname === "" || message === "") {
        document.getElementById("error-message").style.display = "block";
    } else {
        const messageToClone = document.getElementById("message-to-clone");
        const newComment = messageToClone.cloneNode(true);
        newComment.querySelector("h3").textContent = firstname + "" + lastname;
        newComment.querySelector("p").textContent = message;
    }
});