import { House, Coffee, User } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
	const location = useLocation();

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
			<div className="flex justify-around items-center">
				<Link to="/" className="flex flex-col items-center">
					<div className="relative">
						<House
							weight={location.pathname === '/' ? 'fill' : 'regular'}
							size={24}
							className="text-gray-700"
						/>
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
							48
						</span>
					</div>
				</Link>

				<Link to="/coffee" className="flex flex-col items-center">
					<div className="relative">
						<Coffee
							weight={location.pathname === '/coffee' ? 'fill' : 'regular'}
							size={24}
							className="text-gray-700"
						/>
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
							27
						</span>
					</div>
				</Link>

				<Link to="/profile" className="flex flex-col items-center">
					<User
						weight={location.pathname === '/profile' ? 'fill' : 'regular'}
						size={24}
						className="text-gray-700"
					/>
				</Link>
			</div>
		</nav>
	);
}
