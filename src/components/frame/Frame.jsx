import { useState } from "react";
import "./Frame.css";
const Frame = () => {
	const [day, setDay] = useState(true);

	return (
		<section className={day ? "dark" : ""}>
			<span>{day ? "🌕" : "☀️"}</span>
			<h1>{day ? "Wechsel zu Tag" : "Wechsel zu Nacht"}</h1>
			<button onClick={() => setDay(!day)}>
				{day ? "Es ist Nacht!" : "Es ist Tag!"}
			</button>
		</section>
	);
};

export default Frame;
