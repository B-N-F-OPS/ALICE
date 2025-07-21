function sendInput() {
    let userQuizEL = document.getElementById("userQuiz")
    let botAnsEL = document.getElementById("botAns")
    let userMessageEL = document.getElementById("userMessage").value
    userQuizEL.textContent = userMessageEL
}