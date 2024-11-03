import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import { routes } from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: React.createElement(Layout),
		errorElement: React.createElement(ErrorPage), // Handle route errors for this layout
		children: [
			{ path: routes.home, element: React.createElement(Home) },
			{ path: routes.about, element: React.createElement(About) },
			{ path: routes.services, element: React.createElement(Services) }
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	React.createElement(React.StrictMode, null,
		React.createElement(RouterProvider, { router: router })
	)
);