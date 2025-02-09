import React from 'react';

function ProfilePage() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">My Profile</h1>
			<div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
				<div className="space-y-4">
					<div>
						<h2 className="text-xl font-semibold">Order History</h2>
						<p className="text-gray-600">
							Your previous orders will appear here
						</p>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Preferences</h2>
						<p className="text-gray-600">Customize your coffee preferences</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
