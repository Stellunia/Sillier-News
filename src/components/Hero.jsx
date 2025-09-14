import "../styling/hero.css";
export function Hero() {
	const handleClick = () => {
		alert("hello world");
	};

	return (
		<>
			<section className="hero">
				<div className="hero-content">
					<button className="hero-button" onClick={handleClick}>
						Refresh news
					</button>
				</div>
			</section>
		</>
	);
}