'use client';

import { COFFEE_INVITES, CoffeeTabType } from '@/data/constants';
import { MagnifyingGlass, Clock, Briefcase, User } from '@phosphor-icons/react';
import { useState } from 'react';
import Image from 'next/image';

function CoffeePage() {
	const [activeTab, setActiveTab] = useState<CoffeeTabType>('invitations');

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Invites</h1>
				<div className="bg-pink-100 rounded-full px-4 py-1">
					<span className="text-pink-600">☕ Coffees (1)</span>
				</div>
			</div>

			<div className="flex flex-1 w-full justify-between border-b mb-6">
				{['invitations', 'sent', 'saved', 'passed'].map((tab) => (
					<button
						key={tab}
						className={`pb-2 px-1 ${
							activeTab === tab
								? 'border-b-2 border-pink-500 text-pink-500'
								: 'text-gray-500'
						} capitalize`}
						onClick={() => setActiveTab(tab as CoffeeTabType)}
					>
						{tab}
					</button>
				))}
			</div>

			<div className="space-y-4">
				{(COFFEE_INVITES[activeTab]?.length ?? 0) === 0 ? (
					<div className="text-center py-12 text-gray-500">
						<div className="mb-4">▶</div>
						<p>
							You haven't {activeTab === 'sent' ? 'sent' : 'saved'} any invites
							yet.
						</p>
					</div>
				) : (
					COFFEE_INVITES[activeTab]?.map((invite) => (
						<div
							key={invite.id}
							className="bg-white rounded-lg shadow p-4 space-y-3"
						>
							<div className="flex items-center space-x-3">
								<div className="w-12 h-12 rounded-full overflow-hidden">
									{invite.avatar ? (
										<Image
											src={invite.avatar}
											alt={invite.name}
											width={48}
											height={48}
											className="object-cover"
										/>
									) : (
										<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
											<User className="w-6 h-6 text-gray-400" />
										</div>
									)}
								</div>
								<div>
									<h3 className="font-semibold">{invite.name}</h3>
									<p className="text-gray-500 text-sm">{invite.location}</p>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center space-x-2 text-gray-600">
									<MagnifyingGlass className="w-5 h-5" />
									<span className="text-sm">{invite.lookingFor}</span>
								</div>
								<div className="flex items-center space-x-2 text-gray-600">
									<Clock className="w-5 h-5" />
									<span className="text-sm">{invite.availability}</span>
								</div>
								<div className="flex items-center space-x-2 text-gray-600">
									<Briefcase className="w-5 h-5" />
									<span className="text-sm">{invite.skills}</span>
								</div>
							</div>

							{invite.hasSentCoffee && (
								<div className="bg-pink-50 p-2 rounded text-pink-600 text-sm text-center">
									☕ Sent you a coffee!
								</div>
							)}

							{invite.message && (
								<div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
									{invite.message}
								</div>
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default CoffeePage;
