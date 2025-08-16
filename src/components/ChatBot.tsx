import React, { useState } from "react";

const API_URL = "http://localhost:8000/bot/send_message";

export default function ChatBot({ userId }: { userId: string }) {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, message: input }),
    });
    const data = await res.json();
    setMessages((msgs) => [...msgs, { from: "bot", text: data.reply }]);
    setInput("");
    if (data.encaminhar) {
      window.open("https://wa.me/SEU_NUMERO", "_blank");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded shadow-lg w-80 p-4 z-50">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.from === "user" ? "text-right" : "text-left"}>
            <span className={msg.from === "user" ? "bg-green-100" : "bg-gray-100"} style={{ borderRadius: 8, padding: 4, display: "inline-block", margin: 2 }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Digite sua dúvida..."
        />
        <button className="ml-2 bg-green-600 text-white px-3 py-1 rounded" onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}
