import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Research from "../components/Research";

const Home = () => {
	const [serverRes, setServerRes] = useState({});

	useEffect(() => {
		fetch("/api?message=Hello server")
			.then((response) => response.json())
			.then((data) => {
				setServerRes(data);
				console.log(serverRes);
			});
	}, []);
	return (
		<div>
			<Hero />
			<Research />
			<Categories />
		</div>
	);
};

export default Home;
