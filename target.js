//target box 

const target = document.querySelector(".target");
const targetBox = document.querySelector("#targetBox");

//implement local storage (for a day)(if possible)

targetBox.addEventListener('keyup', function(e) {
    e.preventDefault();
    text = targetBox.value;
    console.log(text);
    console.log(e);

    if (e.key === 'Enter') {
        (text == "") ? alert("Enter a valid goal!!"): target.innerHTML = `<input type="checkbox" id="checkTarget"><label id="targetCheckBox" for="checkTarget">${text}</label>`;

        targetCheckBox = document.getElementById("checkTarget");
        targetCheckBox.addEventListener('change', e => {
            // console.log(e);
            if (e.target.checked == true) {
                target.innerHTML = `<input type="text" id="targetBox" placeholder="What's your goal for today?" />`
            }
        })
    }
})