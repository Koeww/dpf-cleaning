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
			<h1>Почистване на DPF/FAP филтри</h1>

			<ul>
				<li>
					DPF филтър (Diesel Particulate Filter) е филтър за почистване на твърдите частици от изгорелите газове в изпускателната система на дизелови двигатели. Твърдите частици се образуват при изгаряне на дизеловото гориво в цилиндъра и горивната камера. С времето и пробега, тези частици се натрупват и запушват  така наречения DPF филтър. Това води до редица отрицателни последици, както за двигателя, така и за околната среда.
				</li>
				<li>
					Тъй като има лимитиран капацитет, за да се гарантира, че DPF филтъра ще продължава да работи добре, на определен период от време, трябва да се почиства или ако е твърде късно да се  подменя с нов.
				</li>
				<li>
					Намаляването на емисиите от дизеловите двигатели е едно от най-важните предизвикателства за качеството на въздуха.
				</li>
			</ul>

			<h2>Ние почистваме DPF/FAP филтри  и катализатори на</h2>

			<ul>
				<li>автомобили</li>
				<li>джипове</li>
				<li>Микробуси</li>
				<li>Камиони</li>
				<li>Автобуси</li>
				<li>Селскостопанска техника</li>
			</ul>

			<h2>ГРИЖА ЗА ВАШИЯТ ДПФ ФИЛТЪР</h2>
			<ul>
				<li>
					С течението на времето, филтърът за твърди частици (DPF) се запушва и влошава нормалното функциониране на Вашия автомобил. Решението е машинно почистване по нова технология, без да се използват химикали като киселина и белина, които увреждат керамичното му покритие. Тъй нареченото пране с белина е изключително вредно за Вашия филтър. Киселината и белината увреждат керамичното покритие като го праят абразивно и лесно чупливо.
				</li>
				<li>
					Освен това белината избелва най-горния слой. Създава илюзия, че филтърът е почистен, но в дълбочина саждите стоят. Разполагаме с най-съвременната американска технология за пълно почистване на Вашите филтри, която чрез изпичане превръща твърдите частици (саждите, натрупани от изгорелите газове) в пепел.  След това чрез машина с  мощен вакуум се изсмуква пепелта.
				</li>
				<li>
					По този начин ние рециклираме Вашият филтър.
				</li>
			</ul>


			Какви са признаците, че DPF филтърът Ви е запушен?
			Лампата за DPF свети на таблото
			Колата ви е авариен режим
			Чести опити колата да регенеирара DPF
			Охлаждащите вентилатори, работят по-често
			Нивото на маслото се увеличава
			Увеличена  консумация на гориво

			Премахването на DPF филтъра е незаконно!
			Всеки притежател на дизелов двигател, към който не е прикрепен DPF, подлежи на глоби!

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
		`}</style>
		</section>
	);
};

export default Services;