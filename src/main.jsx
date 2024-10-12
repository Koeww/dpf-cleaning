import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import "./index.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Layout from "./pages/Layout";
import {routes} from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />, // This handles route errors for this layout
		children: [
			{ path: routes.home, element: <Home /> },
			{ path: routes.about, element: <About /> },
			{ path: routes.contacts, element: <Contacts /> },
			{ path: routes.services, element: <Services /> }
		],
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import About from "./pages/About";
// import Contacts from "./pages/Contacts";
// import Services from "./pages/Services";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import ErrorPage from "./pages/Error";
// import { routes } from "./routes";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: React.createElement(Layout),
// 		errorElement: React.createElement(ErrorPage), // Handle route errors for this layout
// 		children: [
// 			{ path: routes.home, element: React.createElement(Home) },
// 			{ path: routes.about, element: React.createElement(About) },
// 			{ path: routes.contacts, element: React.createElement(Contacts) },
// 			{ path: routes.services, element: React.createElement(Services) }
// 		],
// 	}
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	React.createElement(React.StrictMode, null,
// 		React.createElement(RouterProvider, { router: router })
// 	)
// );