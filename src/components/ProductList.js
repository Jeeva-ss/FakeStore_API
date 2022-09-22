import { useState } from "react";
import { Link } from "react-router-dom";
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
			{!loading && !error && (
				<ul>
					{products &&
						products.map((product) => (
							<li className="list" key={product.id}>
								<h3>{product.title}</h3>
								<p>Price : {product.price}</p>
								<p className="category">Category : {product.category}</p>
								<Link
									to={`/about/${product.id}`}
									style={{
										textDecoration: "none",
										color: "#00008B80",
										fontWeight: "500",
									}}
								>
									Read more
								</Link>
							</li>
						))}
				</ul>
			)}
			<div className="filters">
				<button
					onClick={() =>
						setUrl(
							"https://fakestoreapi.com/products/category/electronics?limit=5"
						)
					}
				>
					Electronics
				</button>
				<button
					onClick={() => setUrl("https://fakestoreapi.com/products?limit=5")}
				>
					All Products
				</button>
			</div>
		</div>
	);
}
