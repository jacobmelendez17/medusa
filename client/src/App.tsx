import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Levels from './pages/Levels';
import Vocabulary from './pages/Vocabulary';
import Help from './pages/Help';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/levels" element={<Levels />} />
				<Route path="/vocabulary" element={<Vocabulary />} />
				<Route path="/help" element={<Help />} />
			</Routes>
		</Router>
	);
}

export default App;
