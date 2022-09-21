import { useEffect, useRef, useState } from "react";

export default function useFetch(url, options) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const _options = useRef(options).current;

	const fetchTrips = async (url) => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			setLoading(false);
			setData(data);
			setError(null);
		} catch (err) {
			setLoading(false);
			setError("could not fetch the data");
		}
	};

	useEffect(() => {
		setTimeout(() => {
			fetchTrips(url);
		}, 1000);
	}, [url, _options]);

	return { data, loading, error };
}
