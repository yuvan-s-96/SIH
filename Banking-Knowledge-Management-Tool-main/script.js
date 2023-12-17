const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;
// Function to speak the given text
const speak = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<div class="chat-flex"><span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};
// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", `${className}`);
//   let chatContent =
//     className === "outgoing"
//       ? `<p></p>`
//       : `<div class="chat-flex"><span class="material-symbols-outlined">smart_toy</span><p></p>`;
//   chatLi.innerHTML = chatContent;
//   chatLi.querySelector("p").textContent = message;
//   return chatLi;
// };

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  const chat = chatElement.querySelector(".chat-flex");
  const container = document.createElement("div");
  container.classList.add("chat-replay");

  const lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes("bank")) {
    messageElement.textContent =
      "I see you mentioned the word 'Bank.' How can I assist you with that?";
    // Speak the generated response
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      { text: "Account", 
        message: "I want to know about my account information." 
      },
      {
        text: "Cards",
        message: "I want to know my card details .",
      },
      {
        text: "Transaction",
        message: "I need to know about transaction information.",
      },
      {
       text:"Loan",
       message:"I want to know about my loan information." 
      },
     
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
  } else if (lowerCaseMessage.includes("account")) {
    messageElement.textContent =
      "I see you mentioned the word 'Account.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Existing Account ",
        message: "I want to know my existing acc details.",
      },
      {
        text: "New account",
        message: "I have to create a new acc. Kindly help me!",
      },
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("existing acc details")) {
    messageElement.textContent =
      "I see you mentioned the word 'Existing Account.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Savings ",
        message: "I have queries related to my savings acc."
      },
      {
        text: "Current ",
        message: "I want information about current acc.",
      },
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("current") || lowerCaseMessage.includes("savings"))  {
    messageElement.textContent =
      "I see you mentioned the word 'Current/savings account.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Balance ",
        message: "The balnce of your savings acc is Rs.203."
      },
      {
        text: "Verification",
        message: "I have queries related to verification.",
      },
      {
        text:"Update information",
        message:"I have issues in updating my information."
      },
      {
        text:"Enable Services",
        message:"I want to information about enabling services in my acc."
      }
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("verification")) {
    messageElement.textContent =
      "I see you mentioned the word 'Verification.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Phone Number/ Email ",
        message: "1. Access your Profile from the User settings at the top right of the screen by clicking or tapping on your profile picture or your initials, then click or tap on Profile. 2. The Personal Details section will appear. Any email addresses or phone numbers that have Verify listed beside them must be verified before they can be used as options for any security features, such as two-factor authentication.3. To start the verification process, click or tap Verify beside the email address or phone number  you wish to verify"
      },
      {
        text: "Account Verification",
        message: "1.In-person bank account verification process. To verify clients bank accounts in person, they must go to a branch or commercial office and ask to open a bank account. There, an agent will carry out the necessary checks on the account holder (identity, copy of ID card or passport, address, confirmation about them not being on any list of fraudulent persons, etc.) and will open the bank account after verifying that the details provided are valid. 2.Bank account verification online. Here, we are talking about digital onboarding, which is becoming increasingly common in the banking sector. The user does not need to go to a branch or speak to an agent. They can carry out the verification and account opening process online through a 100% digital and automated registration and identification process that will ask them to verify their identity document (passport or ID card), their identity, and proof of life.",
      },
      {
        text:"Card verification",
        message:"1.Online PIN: This method prompts the cardholder to enter their personal identification number (PIN) into the payment terminal or ATM, which is then encrypted and sent to the host (either the bank or processor) for an authorization request. The host then verifies the PIN and returns a transaction approved response. 2.Offline PIN: This is a method done locally between the payment card and terminal. When the PIN check is confirmed via the terminal, the transaction is sent to the host indicating the PIN check was done locally and successfully, and the transaction continues to process. 3.Signature: Primarily used with credit cards, or in lieu of a PIN, a signature can be collected on a receipt or captured digitally at the payment terminal. 4.Consumer Device CDCVM (CDCVM): This verification method is used when the customer’s device is used as a payment method via a mobile wallet. Consumer Device CVM uses either a passcode or biometric authentication (fingerprint or facial recognition depending on the device) to approve the transaction and communicates with the payment terminal to authorize the transaction."
      },
      
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("updating my information")) {
    messageElement.textContent =
      "I see you mentioned the word 'Update Information.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Name/DOB/PhoneNumber/Adress/E-Mail",
        message: "1.To update your bank account information, the online method involves securely logging into your online banking account, navigating to the personal details or account settings section, updating relevant information such as address or contact details, saving changes, and confirming the update through on-screen messages or emails. 2.For an in-person approach, locate your nearest bank branch, gather necessary identification and account information, speak with a customer service representative or bank manager who will guide you through the process, verify your identity, and provide written confirmation of the changes made to your account. Whether choosing the convenience of online banking or the face-to-face interaction of an in-person visit, it's essential to retain the confirmation as proof of the account update."
      },
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("enabling services")) {
    messageElement.textContent =
      "I see you mentioned the word 'Enable Services.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Online Banking Services",
        message: "1.Go to the bank website. 2.Click on the login or register button. 3.Enter required account information, such as the account number, mobile number, branch code, and CIF number. 4.Click the submit button. 5.Verify your identity by entering the OTP sent to your registered mobile number. 6.Create a user ID and password. 7.Re-enter your net banking credentials to start using the bank online services."
      },
      {
        text:"UPI",
        message:"I want information related to UPI."        
      },
      {
        text:"Limit",
        message:"1.Savings accounts:While there is generally no specific Savings Account Deposit Limit or cap, you should know the rules for high-amount cash deposits. You must provide your PAN card details whenever your cash deposit limit in your Savings Account exceeds INR 50,000. If your annual withdrawal and cash deposits limits in Savings Accounts exceed INR 10 lakhs, banks are obligated to report the same to the Income Tax Department.Banks offering the facility of a Savings account do usually put a limit on the maximum number of transactions which a holder can carry out in a month. The permissible limit without attracting any charge is usually anywhere between 3 to 5 transactions per month (financial and non-financial). 2.Current accounts: Do not have any limit on the maximum number of transactions which one can carry out. This is primarily because Current accounts serve the purpose of carrying out frequent transactions."
      },
      {
        text:"Cross-Currency Transaction",
        message:"A cross currency is any exchange rate pair or transaction that does not involve the US dollar.For example, the US dollar is not used as a contract settlement currency in cross-currency transactions.A cross-currency pair consists of two currencies that trade in foreign exchange but not the United States dollar.The euro and the Japanese yen form a common cross-currency pair.If more doubts kindly visit the website or nearby branch of bank."
      }  
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  }
  else if (lowerCaseMessage.includes("new acc")) {
    messageElement.textContent =
      "I see you mentioned the word 'New Acc.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Opening a new acc",
        message: "Steps to Open a Bank Account:1.Visit Bank Branch or Apply Online,To open any type of bank account, you need to visit the bank’s branch or visit the bank’s website to procure the bank account opening form. This form requires you to fill personal details such as your name, permanent address, date of birth, the names of parents or spouse, along with your signatures to commit to basic terms and conditions of the bank.2.Submit Documents of Proof for KYC,Indian banks have been mandated by the central bank Reserve Bank of India to authorise the opening of a bank account only when certain documents are produced as proof of identity. In the case of opening a new account, customers need to submit mandatory documents such as an Aadhaar Card or PAN Card, and submit two recent photos of themselves. Other documents of proof will vary from one bank to another. 3.Wait for Bank to Assess Documents,Banks usually take one to two days for new account approvals. Once you’ve submitted your documents, wait for the bank to reach out to you for verification or clarifications on any errors they see in your KYC document submissions. 4.Collect Your Account Details, Debit Card and Internet Banking Details,Once the bank approves your account-opening documents by analyzing the proofs submitted, new account opening is sanctioned and the bank issues you your bank account number, along with a customer ID to enable online banking. Online banking is a way to carry out banking transactions electronically using the internet, instead of making in-person transactions at a physical bank branch."
      },
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
   else if (lowerCaseMessage.includes("card")) {
    messageElement.textContent =
      "I see you mentioned the word 'Card.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Existing card ",
        message: "I have problems with my existing crd.",
      },
      {
        text: "New card",
        message: "I have to get a new crd.Kindly help me.",
      },
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("existing crd")) {
    messageElement.textContent =
      "I see you mentioned the word 'Existing crd.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Debit",
        message: "I want about my debit crd details."
      },
      {
       text:"Credit",
       message:"I have queries related to my credit crd details." 
      }
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("debit crd details")||(lowerCaseMessage.includes("credit crd details"))) {
    messageElement.textContent =
      "I see you mentioned the word 'debit/card' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Expiry",
        message: "1. Credit:Credit cards expire every three to five years, depending on the issuer. Banks set expiration dates based on a number of factors, including physical wear-and-tear on the card, security and encouraging consumers to reevaluate their credit card plans for upgrade.After a credit card expires, it will no longer be possible to use it to make purchases. The card wont work in stores and with online purchases and will return a “declined” notice from the bank. 2.Debit:Debit cards typically expire within 2 to 5 years of their issue date and are good through last day of the expiration month printed on the front of the card. For instance, if your debit card’s expiration date reads 08/23, then it will expire at the end of the day on August 31, 2023.When your card expires, the sixteen-digit number on your new debit card may change."
      },
      {
       text:"Limit",
       message:"1.Credit: In very simple terms, the Credit Limit or the Credit Card Limit is the maximum amount that a person can spend on his or her Credit Card. This limit is something that the issuing company fixes. Here are a few important aspects about the Credit Card Limit that you should know. 2.Debit:While you can use your debit card to withdraw cash, there are limits imposed on the number of withdrawals or the amount that is withdrawn.Depending on the type of customer's bank account or the debit card being used, the cost may vary." 
      },
      {
        text:"Balance",
        message:"The balance in your credit crd or debit crd is Rs.30000."
      },
      {
        text:"Deactivate",
        message:"To deactivate a credit card, you can follow various methods. Firstly, contacting your bank's customer service representative is a common approach. Request the deactivation of your credit card, and subsequently, your bank account manager will guide you through the process after receiving your request. During this process, you may be asked for the reason for cancellation, and the bank might attempt to persuade you otherwise. If you decide to proceed, ensure that you settle any outstanding balances before deactivating the credit card. Another method involves deactivating the credit card via email. Write a mail containing all credit card details and send it to your bank or credit card issuer through your registered email. The bank or credit card company's address can typically be found on the official bank website. Additionally, some banks provide the option to deactivate your credit card through their official website. Log in to your bank's portal, navigate to the Credit Cards section, select Deactivate, fill out the opt-out form with the required information, and submit. After submission, a bank representative may contact you to confirm and further process your request."
      },
      {
        text:"Change Pin",
        message:"To reset your ATM PIN, you have several convenient options. If you're at the ATM, select the Forgot PIN or Regenerate ATM PIN option. Enter your registered mobile number to receive an OTP, input the OTP on the screen, and choose a new PIN instantly. Online through NetBanking, log in, navigate to the cards section, and request Instant PIN Generation. Provide card details, CVV number, and expiry date, authenticate with the OTP sent to your registered mobile number, and set a new PIN. Mobile banking apps also offer PIN reset by entering card details, CVV number, and OTP. Some apps even allow you to view the forgotten PIN after logging in. If these methods are inconvenient, especially while traveling, contact the bank's customer care for a PIN reset. The bank will dispatch the new PIN to your registered mailing address, or you can request it to be sent to the nearest branch for in-person collection."
      }
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  } 
  else if (lowerCaseMessage.includes("new crd")) {
    messageElement.textContent =
      "I see you mentioned the word 'New crd.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "To Apply for a credit/debit card",
        message: "1.You can visit your bank website and apply for a debit/ Credit Card in the personal banking/ retail banking section. 2.Within Debt Cards as well, you can choose which category you wish to apply for. This decision has to be made depending upon the benefits and requirements that you are seeking through the use of Debit Cards. 3.Once you have submitted your details and the required documents (Most of which is already available with the bank and is required only for updates or verification purposes), you need to wait for 2-3 days before receiving the card.Along with the card, you will also receive a set of confidential information, like Personal Identification Number or PIN. This PIN is to be used for all transaction and payment purposes. 4.Once you have the card and the PIN, you can transact using your card anytime you want."
      },
      
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  }
  else if (lowerCaseMessage.includes("transaction")) {
    messageElement.textContent =
      "I see you mentioned the word 'transaction.' How can I assist you with that?";
    speak(messageElement.textContent);
    // Button data
    const buttonData = [
      {
        text: "Transaction history",
        message: "It shows the history of all money debited and credited with the date of transaction."
      },
      {
        text:"Stopped/blocked payment",
        message:"There are various reasons why your bank blocked your transaction. They include the following:1.Low threshold for suspicion. 2.Highstreet banks use sensitive systems to detect potential concerns regarding funds and customers. They might also file SuspiciousActivity Reports (SARs) to safeguard their interests.3.Compliance with regulatory obligations. 4.Sometimes, your bank may not even divulge any information to avoid alerting anyone of a SAR or investigation. In these instances, your bank may tell you that they’re complying with regulatory obligations. 5.Human errors or mistakes by automated systems. 6.Highstreet banks are usually still running on outdated banking systems, and their automated systems make mistakes. Furthermore, banks still rely heavily on paperwork, which is vulnerable to human error."
      },
      {
        text:"UPI",
        message:"I have issues related to my UPI."
      },
      {
        text:"NEFT",
        message:"I want to know anout NEFT."
      },
      {
        text:"RTGS",
        message:"I want details about RTGS."
      },
      {
        text:"IMPS",
        message:"Give me information on IMPS."
      }
      
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
    // chat.appendChild(messageElement);
    // chatElement.appendChild();
    container.append(chat);
    container.append(buttonContainer);
    chatElement.appendChild(container);
    return;
  }
  else {
    messageElement.textContent =
      "I'm not sure how to assist with that. Can you be more specific?";
    speak(messageElement.textContent);
  }
};

// const scrollToBottom = () => {
//   chatbox.scrollTop = chatbox.scrollHeight;
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;
//   chatInput.value = "";
//   chatInput.style.height = `${inputInitHeight}px`;
//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//   setTimeout(() => {
//     const incomingChatLi = createChatLi("Thinking...", "incoming");
//     chatbox.appendChild(incomingChatLi);
//     generateResponse(incomingChatLi);
//     scrollToBottom(); // Scroll to bottom after adding new message
//   }, 600);
// };
const scrollToBottom = () => {
  chatbox.scrollTop = chatbox.scrollHeight;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    generateResponse(incomingChatLi);
    scrollToBottom();
  }, 600);
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
// Optionally, you can trigger voice output when the page loads
document.addEventListener("DOMContentLoaded", () => {
  speak("Hi there! How can I help you?");
});