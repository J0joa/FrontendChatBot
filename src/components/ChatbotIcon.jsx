import React from "react";
import Lottie from "lottie-react";
import chatbotAnimation from "../assets/Live_chatbot.json"; // Ajusta ruta según ubicación

export default function ChatbotIcon() {
  return (
    <div className="w-24 h-24 ">
      <Lottie animationData={chatbotAnimation} loop={true} />
    </div>
  );
}
