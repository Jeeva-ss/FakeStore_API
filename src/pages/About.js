import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function About() {
    const { id } = useParams();
    const url = "https://fakestoreapi.com/products/" + id;
    const { data: product, loading, error } = useFetch(url);
    const history = useHistory();

    useEffect(() => {
        if (error) {
            history.push("/");
        }
    }, [error, history]);

    const handleClick = () => {
        history.push("/");
    };

    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");

    return (
        <div
            className="about"
            style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            {error && <div>{error}</div>}
            {loading && <div>Fetching details...</div>}
            {product && (
                <div key={product.id}>
                    <h3>Title : {product.title}</h3>
                    <p>Price : {product.price}</p>
                    <p>Category : {product.category}</p>
                    <p>Rating : {product.rating.rate}</p>
                    <p>Description : {product.description}</p>
                    <p>{name}</p>
                    <button
                        className="btn-back"
                        onClick={handleClick}
                        style={{
                            backgroundColor: "#00008B80",
                            borderRadius: "4px",
                            outline: "none",
                            cursor: "pointer",
                            color: "white",
                            border: "none",
                            padding: "4px 8px",
                        }}
                    >
                        Go back
                    </button>
                </div>
            )}
        </div>
    );
}
