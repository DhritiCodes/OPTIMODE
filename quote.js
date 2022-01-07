const quoteContainer = document.querySelector('.quote');
// quoteContainer.innerHTML = "something";

function quoteDisplay() {
	//random number generate for 1693 quotes
	const num = Math.floor(Math.random() * 1693) + 1;

	// fetching from quotes api
	// fetch('https://type.fit/api/quotes')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		quoteContainer.innerHTML = `${data[num].text} ~ ${data[num].author}`;
	// 	});

	fetch('https://api.quotable.io/random?maxLength=80&tags=famous-quotes')
		.then((response) => response.json())
		.then(
			(data) =>
				(quoteContainer.innerHTML = `"${data.content}" - ${data.author}`),
		);
}

quoteDisplay();
