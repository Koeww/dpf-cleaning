import './App.css'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';

const App = () => {

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contacts />} />
					</Route>
				</Routes>
			</Router>
		</>
	)
};

export default App;