'use client';

import {
	User,
	LinkedinLogo,
	DotsThree,
	Calendar,
	MapPin,
	MagnifyingGlass,
	X,
	BookmarkSimple,
	Check,
} from '@phosphor-icons/react';
import styles from './home.module.scss';
import Image from 'next/image';
import { useState } from 'react';

function HomePage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const profiles = [
		{
			name: 'Bill',
			age: 38,
			location: 'New York',
			linkedin: 'https://linkedin.com',
			strength:
				'About to learn a variety of skill sets. An example, I have financial analysis skills but also can develop business intelligence applications.',
			exploring:
				'The possibility of a pre-built application that is purpose built for financial reporting, analytics, and budgeting/forecasting for the gaming/lodging sector.',
			status: 'Already full-time on a startup',
			founderType: 'Solo founder',
			lookingFor: 'Have some ideas but open to exploring',
		},
		{
			name: 'Sarah',
			age: 32,
			location: 'San Francisco',
			linkedin: 'https://linkedin.com/sarah',
			strength:
				'Expert in UI/UX design with a background in psychology. Combining user behavior insights with beautiful interfaces.',
			exploring:
				'Building a platform that helps remote teams build stronger connections through meaningful virtual interactions.',
			status: 'Side project explorer',
			founderType: 'Looking for co-founder',
			lookingFor: 'Clear vision, seeking technical co-founder',
		},
		// Add more profiles as needed
	];

	const handleAction = (action: 'cross' | 'save' | 'check') => {
		switch (action) {
			case 'cross':
				console.log('Passed on profile');
				break;
			case 'save':
				console.log('Saved profile');
				break;
			case 'check':
				console.log('Liked profile');
				break;
		}

		if (currentIndex < profiles.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			console.log('No more profiles to show');
		}
	};

	const currentProfile = profiles[currentIndex];

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">CoffeeSpace</h1>
				<button className="p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			<div className="max-w-md mx-auto space-y-4">
				<div className="flex items-center space-x-4">
					<div className="w-20 h-20 rounded-lg overflow-hidden">
						{false ? (
							<Image
								src="/images/profile-placeholder.jpg"
								alt="Profile"
								className="w-full h-full object-cover"
								width={100}
								height={80}
							/>
						) : (
							<div className="w-full h-full bg-gray-200 flex items-center justify-center">
								<User className="w-20 h-20 text-gray-400" />
							</div>
						)}
					</div>
					<div className="flex justify-between w-full">
						<div className="flex items-center space-x-2">
							<h2 className="text-xl font-semibold">{currentProfile.name}</h2>
							<a href={currentProfile.linkedin} className="text-blue-600">
								<LinkedinLogo className="w-5 h-5" />
							</a>
						</div>
						<button className="text-gray-600">
							<DotsThree className="h-8 w-8" weight="bold" />
						</button>
					</div>
				</div>

				<div className="bg-white p-4 rounded-lg shadow">
					<h3 className="font-semibold mb-2">My strength / superpower</h3>
					<p className="text-gray-600">{currentProfile.strength}</p>
				</div>

				<div className="bg-white p-4 rounded-lg shadow">
					<h3 className="font-semibold mb-2">I&apos;m exploring</h3>
					<p className="text-gray-600">{currentProfile.exploring}</p>
				</div>

				<div className="space-y-4 bg-white p-4 rounded-lg shadow">
					<div className="flex items-center space-x-2">
						<Calendar className="w-5 h-5 text-gray-600" />
						<span>{currentProfile.age}</span>
						<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
						<MapPin className="w-5 h-5 text-gray-600" />
						<span>{currentProfile.location}</span>
					</div>

					<div className="flex items-center space-x-2">
						<MagnifyingGlass className="w-5 h-5 text-gray-600" />
						<span>{currentProfile.lookingFor}</span>
					</div>

					<div className="flex items-center space-x-2">
						<User className="w-5 h-5 text-gray-600" />
						<span>{currentProfile.status}</span>
					</div>

					<div className="flex items-center space-x-2">
						<User className="w-5 h-5 text-gray-600" />
						<span>{currentProfile.founderType}</span>
					</div>
				</div>
			</div>

			<div className={styles.actionButtons}>
				<div className={styles.buttonContainer}>
					<button
						onClick={() => handleAction('cross')}
						className={`${styles.actionButton} ${styles.cross}`}
					>
						<X className="w-6 h-6" />
					</button>

					<button
						onClick={() => handleAction('save')}
						className={`${styles.actionButton} ${styles.save}`}
					>
						<BookmarkSimple className="w-6 h-6" />
					</button>

					<button
						onClick={() => handleAction('check')}
						className={`${styles.actionButton} ${styles.check}`}
					>
						<Check className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
