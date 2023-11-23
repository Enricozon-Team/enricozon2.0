document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const inputText = document.getElementById("input-text");
    const sendButton = document.getElementById("send-button");

    function sendMessage() {
        const userMessage = inputText.value.trim();
        if (userMessage !== "") {
            addMessage("user", `Utente: ${userMessage}`);

            // Handle different user questions
            let botResponse;
                if (userMessage.toLowerCase().includes("ciao")) {
                    botResponse = "Ciao! Come posso aiutarti?";
                } else if (userMessage.toLowerCase().includes("cos'è enricozon?")) {
                    botResponse = "Enricozon è il miglior sito di vendite online, migliore di Amazon. ";
                } 
                else if (userMessage.toLowerCase().includes("sei gay?")) {
                    botResponse = "Assolutamente no, mi sarei già dato fuoco. ";
                } 
                else if (userMessage.toLowerCase().includes("chi sono i creatori di enricozon?")) {
                    botResponse = "I creatori del progetto di Enricozon sono Cranci ed Enriccio, mentre i developer sono Cranci, Enriccio, Cholito e TheProcionCatIta. Il design dei loghi è fatto invece da Tanoshi. ";
                } 
                else if (userMessage.toLowerCase().includes("chi è enriccio?")) {
                    botResponse = "enriccio è un figo, seguilo su insta ora @enri.ccio"
                }
            // Simulate a response from the chatbot
            setTimeout(function () {
                addMessage("bot", `Enricozon AI: ${botResponse}`);
            }, 1000);

            inputText.value = "";
        }
    }

    sendButton.addEventListener("click", sendMessage);

    inputText.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = sender;
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});