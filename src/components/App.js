import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import { CheckUserExist } from "../helper/helper";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";

/** react routes */
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
	},
	{
		path: "/quiz",
		element: (
			<CheckUserExist>
				<Quiz />
			</CheckUserExist>
		),
	},
	{
		path: "/result",
		element: (
			<CheckUserExist>
				<Result />
			</CheckUserExist>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
