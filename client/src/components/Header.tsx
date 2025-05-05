import { Link, useLocation } from 'react-router-dom';

const NavItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Levels', path: '/levels' },
	{ name: 'Vocabulary', path: '/vocabulary' },
	{ name: 'Help', path: '/help' }
];

export default function Header() {
	const location = useLocation();

	return (
		<header className="bg-gray-800 px-6 py-4 text-white shadow">
			<nav className="flex justify-end gap-6">
				{NavItems.map((item) => (
					<Link
						key={item.path}
						to={item.path}
						className={`text-lg transition hover:text-yellow-300 ${
							location.pathname === item.path ? 'text-yellow-300 underline' : ''
						}`}
					>
						{item.name}
					</Link>
				))}
			</nav>
		</header>
	);
}
