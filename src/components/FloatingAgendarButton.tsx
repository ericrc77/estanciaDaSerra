import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

export default function FloatingAgendarButton() {
	// Ao clicar, abrir WhatsApp direto
	const whatsappUrl = "https://wa.me/5533986002700";
	return (
		<button
			onClick={() => window.open(whatsappUrl, "_blank")}
			className="fixed bottom-8 right-8 z-50 animate-pulse bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl border-4 border-white"
			style={{ boxShadow: "0 0 16px 4px #4ade80" }}
			aria-label="Abrir WhatsApp"
		>
			<FaComments />
		</button>
	);
}
