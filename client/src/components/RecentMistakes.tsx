export default function RecentMistakes() {
	const mistakes = ['con', 'pelicula', 'banco'];

	return (
		<div className="rounded-x1 bg-white p-6 shadow">
			<h3 className="mb-2 text-lg font-bold">Recent Mistakes</h3>
			<p className="mb-4 text-sm text-gray-700">
				To seek knowledge is a trial. In errors, wisdom is birthed. Behold,
				<strong>jacob_melendez</strong>! All your errors from the past 24 hours, sorted by severity.
			</p>

			<div className="mb-4 flex flex-wrap gap-2">
				{mistakes.map((m, i) => (
					<span
						key={i}
						className="rounded bg-purple-200 px-2 py-1 text-sm font-semibold text-purple-800"
					>
						{m}
					</span>
				))}
			</div>

			<div className="flex gap-2">
				<button className="bg-gray=200 flex-1 rounded py-2 font-medium hover:bg-gray-300">
					Quiz
				</button>
				<button className="bg-gray=200 flex-1 rounded py-2 font-medium hover:bg-gray-300">
					Redo Lessons
				</button>
			</div>
		</div>
	);
}
