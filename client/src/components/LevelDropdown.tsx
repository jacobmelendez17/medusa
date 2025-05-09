import { Link } from 'react-router-dom';

const groupedLevels = [
	{ label: 'PLEASANT', levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	{ label: 'PAINFUL', levels: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
	{ label: 'TORTURE', levels: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
	{ label: 'DEATH', levels: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
	{ label: 'HELL', levels: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] },
	{ label: 'PARADISE', levels: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
	{ label: 'REALITY', levels: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70] },
	{ label: 'BEYOND', levels: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80] }
];

export default function LevelDropdown({ onClose }: { onClose: () => void }) {
	return (
		<div className="w-[420px] rounded-xl bg-gray-700 p-3 text-white shadow-lg">
			{groupedLevels.map((group, i) => (
				<div key={i} className="mb-2">
					<div className="mb-1 text-xs font-semibold text-gray-300">{group.label}</div>
					<div className="flex flex-wrap gap-1">
						{group.levels.map((level) => (
							<Link
								key={level}
								to={`/levels/${level}`}
								onClick={onClose}
								className="flex aspect-square w-9 items-center justify-center rounded-sm bg-gray-600 text-sm transition hover:bg-yellow-400 hover:text-black"
							>
								{String(level).padStart(2, '0')}
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
