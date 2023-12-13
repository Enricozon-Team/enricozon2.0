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
                    botResponse = "Ciao! Per cominciare scrivi la seguente domanda: a che domande rispondi?";
                } else if (userMessage.toLowerCase().includes("cos'è enricozon?")) {
                    botResponse = "Enricozon è il miglior sito di vendite online, migliore di Amazon. ";
                } 
                else if (userMessage.toLowerCase().includes("a che domande rispondi?")) {
                    botResponse = "Rispondo alle sueguenti domande: ciao; uwu; cos'è enricozon ai; come aggiungere una domanda ad enricozon ai; cos'è enricozon?; sei gay; chi sono i creatori di enricozon?; chi è enriccio?. Ricorda di scrivere le domande uguali a come sono scirtte in questo messaggio atrimenti vedrai un messaggio di errore e non avrai la tua risposta.";
                }
                else if (userMessage.toLowerCase().includes("sei gay?")) {
                    botResponse = "Assolutamente no, mi sarei già dato fuoco. ";
                } 
                else if (userMessage.toLowerCase().includes("chi sono i creatori di enricozon?")) {
                    botResponse = "I creatori del progetto di Enricozon sono cranci ed Enriccio, mentre i developer sono cranci, Enriccio, Cholito e TheProcionCatIta. Il design dei loghi è fatto invece da Tanoshi. ";
                } 
                else if (userMessage.toLowerCase().includes("chi è enriccio?")) {
                    botResponse = "enriccio è uno Schiavizzatore. Schivizza tutti i developer di Enricozon. Soprattutto cranci che non viene pagato da 2 anni.";
                }
                else if (userMessage.toLowerCase().includes("cos'è enricozon ai")) {
                    botResponse = "Enricozon AI è il nuovo progetto dei developper di Enricozon. Dopo Enricozon e Enricozon 2.0 il loro nuovo progetto sono proprio io! Sono stata creata per rispondere alle tue domande; tuttavia sono ancora in una fase beta quindi non posso rispondere a tutte le domande, ma solo a quelle elencate nel messaggio di risposta alla domanda: a che domande rispondi. Per scoprire come aggiungere la tua domanda ad Enricozon AI digita la seguente domanda: come aggiungere una domanda ad enricozon ai";
                }
                else if (userMessage.toLowerCase().includes("come aggiungere una domanda ad enricozon ai")) {
                    botResponse = "Per aggiungere una domanda ad Enricozon AI ti basta inviare un'email all'email support@enricozon.mom; la tua domanda sarà visualizzata dai developper di Enricozon e se rispetta i criteri verrà aggiunta ad Enricozon AI. Ti sarà inviata un'email di risposta se la tua domanda sarà aggiunta!";
                }
                else if (userMessage.toLowerCase().includes("uwu")) {
                    botResponse = "Scrivilo un'altra volta e ti taglio la gola";
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