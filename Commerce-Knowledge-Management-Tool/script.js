// Import only what is necessary from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqvMuU-X6bUL8WziX-9GQi8h7BOk9IncA",
  authDomain: "commerce-a298d.firebaseapp.com",
  projectId: "commerce-a298d",
  storageBucket: "commerce-a298d.appspot.com",
  messagingSenderId: "846115709002",
  appId: "1:846115709002:web:d8db92d178186531ce06b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? "<p></p>"
      : '<div class="chat-flex"><span class="material-symbols-outlined">smart_toy</span><p></p></div>';
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  const chat = chatElement.querySelector(".chat-flex");
  const container = document.createElement("div");
  container.classList.add("chat-replay");

  const lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes("commerce")) {
    messageElement.textContent =
      "I see you mentioned the word 'Commerce.' How can I assist you with that?";

    // Button data
    const buttonData = [
      { text: "FREE TRADE AGREEMENT", message: "Tell me about Free Trade Agreement." },
      { text: "INDIA-ASEAN TRADE IN GOODS AGREEMENT", message: "I want to know about Indian-Asean Trade In Goods Agreement." },
      { text: "INDIA MALAYSIA CECA", message: "I need details about India Malaysia CECA." },
      { text: "INDIA SINGAPORE CECA", message: "I need details about India Singapore CECA." },
      { text: "INDIA-SRI-LANKA FTA", message: "Tell me about India-Srilanka FTA." },
      { text: "INDIA KOREA CEPA", message: "I want to know about India Korea CEPA." }
    ];

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Create buttons dynamically
    buttonData.forEach((buttonInfo) => {
      const button = document.createElement("button");
      button.textContent = buttonInfo.text;
      button.classList.add("btn");
      button.addEventListener("click", () => {
        chatInput.value = buttonInfo.message;
        handleChat();
      });
      buttonContainer.appendChild(button);
    });

    // Append buttons below the text content
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
  } else {
    // Your existing code for fetching data and displaying it
    async function fetchDataAndDisplay() {
      const lowerCaseMessage = userMessage.toLowerCase();

      // Remove or comment out the following line to avoid the alert message
      // alert(lowerCaseMessage);

      if (!lowerCaseMessage) return;

      const id = ['41wUxM646z8yL1EtGGGc', 'BtCfal2Av0KCy52DijRn', 'MbZy2HDErVbZY8rP3uX0', 
      'OiTBTYbUl9tcdlswS0Op', 'X3kiSBlm1YjzUZjNfZVm', 'dPEOUN4ZCSUNXaW06d1V', 
      'jIVFOo7dskt64eBBlLvv', 'nqJFMJtovZuXvdNtwfV0', 'vAykKTD1Du3iZvIWJOs7','3hkxMo7eJBYGomc09Bw0'];

      for (let i = 0; i < id.length; i++) {
        const docSnap = await getDoc(doc(db, 'Questions', id[i]));

        if (docSnap.exists() && docSnap.data()['keyword'] === lowerCaseMessage) {
          const answer = docSnap.data()['answer'];
          messageElement.textContent = answer;
          scrollToBottom();
          break;  // Exit the loop after finding the first match
        }
      }

      // Clear the input after processing
      chatInput.value = "";
    }

    await fetchDataAndDisplay(); // Wait for fetchDataAndDisplay to complete
  }
};

const scrollToBottom = () => {
  chatbox.scrollTop = chatbox.scrollHeight;
};

const handleChat = async () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  try {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    await generateResponse(incomingChatLi); // Wait for generateResponse to complete
    scrollToBottom();
  } catch (error) {
    console.error("Error handling chat:", error);
  }
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
