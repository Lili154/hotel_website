// whatsapp-button.js

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/79409103010"; // Your WhatsApp number
    whatsappBtn.className = "whatsapp-float";
    whatsappBtn.target = "_blank";
    whatsappBtn.setAttribute("aria-label", "Chat on WhatsApp");

    const img = document.createElement("img");
    img.src = "images/whatsapp.jpeg"; 
    img.alt = "Здравствуйте! Я с сайта hotel-nobi.ru. Хочу задать вопрос";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.borderRadius = "50%";

    whatsappBtn.appendChild(img);
    document.body.appendChild(whatsappBtn);
});
