import { FC } from 'react';

interface Props {
	type: 'lesson' | 'review';
	count: number;
}

const LessonReviewCard: FC<Props> = ({ type, count }) => {
	const isDone = count === 0;
	const label = type === 'lesson' ? 'Lessons' : 'Reviews';
	const icon = type === 'lesson' ? '📘' : '🔁';

	return (
		<div className={`rounded-x1 flex items-center justify-between bg-gray-500 p-5 text-white`}>
			<div>
				<div className="text-sm font-medium">{label}</div>
				{isDone ? (
					<div className="mt-1 text-xs font-semibold">Done!</div>
				) : (
					<div className="text-2x1 font-bold">{count}</div>
				)}
				<div className="mt-1 text-xs text-gray-300">
					You've {isDone ? 'done everything!' : 'got work to do'}!
				</div>
			</div>
			<div className="text-4x1">{icon}</div>
		</div>
	);
};

export default LessonReviewCard;
