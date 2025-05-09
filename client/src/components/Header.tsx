import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LevelDropdown from './LevelDropdown';

const NavItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Levels', path: '/levels' },
	{ name: 'Vocabulary', path: '/vocabulary' },
	{ name: 'Help', path: '/help' }
];

export default function Header() {
	const location = useLocation();
	const [showLevels, setShowLevels] = useState(false);

	return (
		<header className="bg-gray-800 px-6 py-4 text-white shadow">
			<nav className="flex justify-end gap-6">
				{NavItems.map((item) =>
					item.name === 'Levels' ? (
						<div key={item.name} className="relative">
							<button
								onClick={() => setShowLevels((prev) => !prev)}
								className={`text-lg transition hover:text-yellow-300 ${
									location.pathname === item.path ? 'text-yellow-300' : ''
								}`}
							>
								{item.name}
							</button>
							{showLevels && (
								<div className="absolute right-0 z-50 mt-2">
									<LevelDropdown onClose={() => setShowLevels(false)} />
								</div>
							)}
						</div>
					) : (
						<Link
							key={item.path}
							to={item.path}
							className={`text-lg transition hover:text-yellow-300 ${
								location.pathname === item.path ? 'text-yellow-300' : ''
							}`}
						>
							{item.name}
						</Link>
					)
				)}
			</nav>
		</header>
	);
}
