const quoteContainer = document.querySelector('.quote');
// quoteContainer.innerHTML = "something";

function quoteDisplay() {
    //random number generate for 1693 quotes
    const num = (Math.floor(Math.random() * 1693)) + 1;

    // fetching from quotes api
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            quoteContainer.innerHTML = `${(data[num].text)} ~ ${(data[num].author)}`
        });
}

quoteDisplay();