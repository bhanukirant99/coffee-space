import { Link, useLocation } from 'react-router-dom';

export default function CoffeeNavigation() {
	const location = useLocation();
	const sections = ['Invitations', 'Sent', 'Saved', 'Passed'];

	return (
		<div className="flex justify-between px-4 border-b border-gray-200">
			{sections.map((section) => (
				<Link
					key={section}
					to={`/coffee/${section.toLowerCase()}`}
					className={`py-2 px-4 ${
						location.pathname.includes(section.toLowerCase())
							? 'border-b-2 border-red-500 text-red-500'
							: 'text-gray-500'
					}`}
				>
					{section}
				</Link>
			))}
		</div>
	);
}
