// ( CTRL + / ) - FOR COMMENTING
// I created IDs ("botMessage-el" && "clientMessage-el"). they have no css styling. i can delete if i want

// render chat icon on clicking "need help? chat with ALICE"
const renderUi = document.getElementById('renderUI');
renderUi.addEventListener('click', function() {
    const chatbotEl = document.getElementById('chatBotUi');
    if (chatbotEl.style.display === "none") {
        chatbotEl.style.display = "block";
    } else {
        chatbotEl.style.display = "none";
    }
})

// clear local storage on refresh
const refreshEl = document.getElementById('refresh');
refreshEl.addEventListener('click', function() {
    localStorage.clear();
})