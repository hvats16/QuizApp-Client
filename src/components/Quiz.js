import React from "react";

function Quiz() {
	function onNext() {
		console.log("On next Click");
	}
	function onPrev() {
		console.log("On next Click");
	}
	return (
		<div className="container">
			<h1 className="title text-light">Quiz Application</h1>
			<div className="grid">
				<button className="btn prev" onClick={onPrev}>
					Prev
				</button>
				<button className="btn next" onClick={onNext}>
					Next
				</button>
			</div>
		</div>
	);
}

export default Quiz;
