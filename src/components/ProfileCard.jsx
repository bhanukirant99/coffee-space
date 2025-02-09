import { MapPin, Clock, Briefcase } from '@phosphor-icons/react';

export default function ProfileCard({ profile }) {
	return (
		<div className="bg-white p-4 rounded-lg shadow mb-4">
			<div className="flex items-start gap-4">
				<img
					src={profile.image}
					alt={profile.name}
					className="w-16 h-16 rounded-lg object-cover"
				/>
				<div className="flex-1">
					<h3 className="font-semibold text-lg">{profile.name}</h3>
					<p className="text-gray-500 text-sm flex items-center gap-1">
						<MapPin size={16} />
						Based in {profile.location}
					</p>
				</div>
			</div>

			<div className="mt-4 space-y-2">
				<div className="flex items-center gap-2 text-gray-600">
					<Clock size={20} />
					<span>{profile.startupStatus}</span>
				</div>
				<div className="flex items-center gap-2 text-gray-600">
					<Briefcase size={20} />
					<span>{profile.skills.join(', ')}</span>
				</div>
			</div>
		</div>
	);
}
