import React from "react";

const Chatbot = () => {
  window.watsonAssistantChatOptions = {
    integrationID: "c207beeb-bb68-47f9-a4b2-0024d1f0c874", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "9d5130ca-226a-4492-b67a-5da12b79d265", // The ID of your service instance.
    onLoad: async (instance) => {
      await instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  return <div></div>;
};

export default Chatbot;
