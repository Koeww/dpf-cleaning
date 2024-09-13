import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import ContactBar from './components/ContactBar';
import ServicesComponent from './components/ServicesComponent';

const App = () => {

	return (
		<>
			<div className='main'>
				<ContactBar/>
				<Header/>
				<Hero/>
				<ServicesComponent/>
			</div>
			<style jsx>{`
				.main {
					display: flex;
					flex-direction: column;
					width: 100vw;
					background-color: white;
				}	
			`}</style>
		</>
	)
};

export default App;