export default function RecentMistakes() {
	const mistakes = ['con', 'pelicula', 'banco'];

	return (
		<div className="rounded-x1 bg-gray-100 p-4 shadow">
			<h3 className="mb-2 text-lg font-bold text-gray-800">Recent Mistakes</h3>

			<div className="mb-4 rounded-lg bg-white p-4">
				<p className="mb-4 text-sm text-gray-700">
					To seek knowledge is a trial. In errors, wisdom is birthed. Behold,
					<strong>jacob_melendez</strong>! All your errors from the past 24 hours, sorted by
					severity.
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
			</div>

			<div className="flex justify-end gap-2">
				<button className="rounded border border-gray-400 px-3 py-1 text-sm transition hover:bg-gray-200">
					Quiz
				</button>
				<button className="rounded border border-gray-400 px-3 py-1 text-sm transition hover:bg-gray-200">
					Redo Lessons
				</button>
			</div>
		</div>
	);
}
