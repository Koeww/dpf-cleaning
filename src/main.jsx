import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
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
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);