'use client';

import React from 'react';
import {
	House,
	CreditCard,
	ChatCircle,
	User,
	Coffee,
} from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
function BottomNav() {
	const router = useRouter();

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white border-t">
			<div className="flex justify-around p-4">
				<div
					className="relative cursor-pointer"
					onClick={() => router.push('/home')}
				>
					<House className="w-6 h-6" />
					<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
						48
					</span>
				</div>
				<div
					className="relative cursor-pointer"
					onClick={() => router.push('/coffee')}
				>
					<Coffee className="w-6 h-6" />
					<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
						27
					</span>
				</div>
				<ChatCircle
					className="w-6 h-6 cursor-pointer"
					onClick={() => router.push('/chat')}
				/>
				<User
					className="w-6 h-6 cursor-pointer"
					onClick={() => router.push('/profile')}
				/>
			</div>
		</div>
	);
}

export default BottomNav;
