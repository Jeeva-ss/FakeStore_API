import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import About from "./pages/About";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<ProductList />
					</Route>
					<Route path="/about/:id">
						<About />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
