import LessonReviewCard from '../components/LessonReviewCard';
import ReviewForecast from '../components/ReviewForecast';
import RecentMistakes from '../components/RecentMistakes';
import ExtraStudy from '../components/ExtraStudy';

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-100 px-4 py-8 md:px-32">
			<div className="max-w-6x1 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
				{/* left column */}
				<div className="space-y-8 lg:col-span-2">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<LessonReviewCard type="lesson" count={0} />
						<LessonReviewCard type="review" count={0} />
					</div>
					<RecentMistakes />
					<ExtraStudy />
				</div>

				{/* right column */}
				<div className="space-y-8">
					<ReviewForecast />
				</div>
			</div>
		</main>
	);
}
