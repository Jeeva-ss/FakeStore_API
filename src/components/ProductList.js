import { useState } from "react";
import useFetch from "../hooks/useFetch";

//styles
import "./ProductList.css";

export default function TripList() {
	const [url, setUrl] = useState("https://fakestoreapi.com/products?limit=5");
	const {
		data: products,
		loading,
		error,
	} = useFetch(url, {
		type: "GET",
	});

	return (
		<div className="product-list">
			<h2>Fake Store API</h2>
			{error && <div>{error}</div>}
			{loading && <div>Fetching details...</div>}
			{!loading && !error && <ul>
				{products &&
					products.map((product) => (
						<li key={product.id} className="list">
							<h3>{product.title}</h3>
							<p>Price : {product.price}</p>
							<p className="category">Category : {product.category}</p>
						</li>
					))}
			</ul>}
			<div className="filters">
				<button
					onClick={() => setUrl("https://fakestoreapi.com/products/category/electronics?limit=5")}
				>
					Electronics
				</button>
				<button onClick={() => setUrl("https://fakestoreapi.com/products?limit=5")}>
					All Products
				</button>
			</div>
		</div>
	);
}
