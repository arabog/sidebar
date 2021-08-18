import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Product"
import Reports from './pages/report/Report'


function App() {
	return (
		<>
			<Router>
				<Navbar />

				<Switch>
					<Route path="/"  exact component={Home} />
					<Route path="/products"  component={Products} />
					<Route path="/reports"  component={Reports} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
