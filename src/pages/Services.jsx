import React from 'react'

const services = [
	{
	  id: 1,
	  title: 'Text text',
	  description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
	  icon: 'images/clock-white.svg'
	},
	{
	  id: 2,
	  title: 'ЗАПАЗИ ЧАС',
	  description: 'Запази удобен за теб час',
	  icon: 'images/clock-white.svg'
	},
	{
	  id: 3,
	  title: 'Text text',
	  description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
	  icon: 'images/clock-white.svg',
	},
  ];
  
  const Services = () => {
	return (
	  <section className="Services">
		<h2>Our Services</h2>
		<div className="service-list">
		  {services.map((service) => (
			<div key={service.id} className="service-card">
			<img src={service.icon} alt="service-icon" className="service-icon" />
			  <h3>{service.title}</h3>
			  <p>{service.description}</p>
			</div>
		  ))}
		</div>
		<style jsx>{`
			.Services {
				padding: 40px;
				background-color: var(--background-color);
				text-align: center;
			}

			.services h2 {
				font-size: 2.5rem;
				margin-bottom: 30px;
				color: var(--text-color);
			}

			.service-list {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				gap: 20px;
			}

			.service-card {
				background-color: var(--primary-color);
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				transition: transform 0.3s ease, box-shadow 0.3s ease;
			}

			.service-card:hover {
				transform: translateY(-10px);
				box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
			}

			.service-icon {
				width: 4rem;
				height: 4rem;
			}

			.service-card h3 {
				font-size: 1.5rem;
				margin-bottom: 10px;
				color: var(--text-color);
			}

			.service-card p {
				font-size: 1rem;
				color: var(--text-color);
				line-height: 1.6;
			}

			@media (max-width: 768px) {
				.services h2 {
					font-size: 2rem;
				}

				.service-card {
					padding: 15px;
				}

				.service-card h3 {
					font-size: 1.25rem;
				}

				.service-card p {
					font-size: 0.9rem;
				}
			}
			@media screen and (max-width: 480px) {
				.Services {
					padding: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: var(--mobile-gap);
				}
				.service-list {
					display: flex; 
					width: 16rem;
					overflow: scroll;
					scroll-snap-type: x proximity;
				}
				.service-card {
					width: 14rem;
					scroll-snap-align: center;
					flex-shrink: 0;
				}
			}
		`}</style>
	  </section>
	);
  };
  
  export default Services;