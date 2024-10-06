import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	// console.error(error);
	// console.log(error.statusText || error.message);

	return (
		<div className="ErrorPage">
			<h1>Упс....</h1>
			<p>
				Съжаляваме, появи се неочаквана грешка.
			</p>
			<style jsx>{`
				.ErrorPage {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100vh;
					text-align: center;
					background-color: white;
					color: #333;
					padding: 20px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				}

				.ErrorPage h1 {
					font-size: 3rem;
					margin-bottom: 0.675rem;
				}

				.ErrorPage p {
					font-size: 1.2rem;
					margin: 0.375rem 0;
				}
			`}</style>
		</div>
	);
}

export default ErrorPage;