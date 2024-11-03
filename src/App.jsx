import './App.css'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />} />
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	)
};

export default App;