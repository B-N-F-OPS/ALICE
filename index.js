// when user clicks send activate this function to collect the input text.
let inputTextEL = document.getElementById("inputText").value
let openTextEL = document.getElementById("opentext")

function send() {       // testing if i can put the input tect and display it in opentext
    openTextEL.textContent = inputTextEL
}

// I need to display the input text in the chatbox, then pick it from there and use it in the next steps
// explore tables. i might need to use <table> instead of <form> or use table inside <form>
// add icon to the chats when bot is responding