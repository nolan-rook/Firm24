"use client"
import { useState } from "react";
import { CardsChat } from '@/components/ui/chat'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-8">
			<CardsChat />
		</main>
	);
}
