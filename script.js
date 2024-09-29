

//Method 1

// function getMessage() {
    
//     const input = document.getElementById("message-input").value

//     document.getElementById("message-output").innerHTML = input;

//     document.getElementById("message-input").value = "";
// }


//Method 2

const messageInput = document.getElementById("message-input")

messageInput.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
    getMessage();

})


function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;

    messageInput.value="";
}