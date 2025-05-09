const sampleForecast = [
	{ time: '12 am', count: 13 },
	{ time: '1 am', count: 4 },
	{ time: '11 am', count: 2 },
	{ time: '3 pm', count: 14 },
	{ time: '4 pm', count: 26 },
	{ time: '9 pm', count: 3 }
];

export default function ReviewForecast() {
	return (
		<div className="rounded-x1 bg-white p-4 shadow">
			<h3 className="mb-4 text-lg font-bold">Review Forecast</h3>
			<div className="space-y-2">
				{sampleForecast.map((entry) => (
					<div key={entry.time} className="flex items-center justify-between">
						<span className="text-sm">{entry.time}</span>
						<div className="mx-2 h-3 flex-1 rounded bg-gray-200">
							<div
								className="h-3 rounded bg-green-500"
								style={{ width: `${entry.count * 2}px` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
