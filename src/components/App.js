import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Root Element</div>,
	},
	{
		path: "/quiz",
		element: <div>Quiz Element</div>,
	},
	{
		path: "/result",
		element: <div>Result Element</div>,
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
