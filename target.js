//target box

const target = document.querySelector('.target');
// const targetBox = document.querySelector('#targetBox');

//implement local storage (for a day)(if possible)

target.addEventListener('keyup', function (e) {
	e.preventDefault();
	let text = targetBox.value;
	// console.log('TargetBox Value  ' + text);
	// console.log('Target Box other way value  ' + target.children[0].value);
	// console.log('Goal  ' + text);
	// console.log('Which Id is targeted  ' + e.target.id);

	if (e.key === 'Enter' && e.target.id === 'targetBox') {
		if (text === '') {
			alert('Enter a valid goal !!!');
		} else {
			//create check box
			const todayGoalCheck = document.createElement('input');
			todayGoalCheck.setAttribute('type', 'checkbox');
			todayGoalCheck.setAttribute('id', 'checkTarget');

			//create label
			const todayGoalText = document.createElement('label');
			todayGoalText.setAttribute('id', 'targetCheckBox');
			todayGoalText.setAttribute('for', 'checkTarget');
			todayGoalText.textContent = text;

			//append to target
			target.innerHTML = '';
			target.appendChild(todayGoalCheck);
			target.appendChild(todayGoalText);
		}
	}
	// if (e.target.id === 'checkTarget' && e.target.checked === true) {
	// 	//putting input again

	// 	const todayGoalInput = document.createElement('input');
	// 	todayGoalInput.setAttribute('type', 'text');
	// 	todayGoalInput.setAttribute('id', 'targetBox');
	// 	todayGoalInput.setAttribute('placeholder', "What's your goal for today? ");

	// 	target.innerHTML = '';
	// 	target.appendChild(todayGoalInput);
	// }

	// const todayGoalCheck = document.createElement('input');
	// todayGoalCheck.setAttribute('type', 'checkbox');
	// todayGoalCheck.setAttribute('id', 'checkTarget');

	// const todayGoalText = document.createElement('label');
	// todayGoalText.setAttribute('id', 'targetCheckBox');
	// todayGoalText.setAttribute('for', 'checkTarget');
	// todayGoalText.textContent = text;

	// console.log(todayGoalCheck + ' ' + todayGoalText);
	// }
});

target.addEventListener('change', function (e) {
	e.preventDefault();

	if (e.target.id === 'checkTarget' && e.target.checked === true) {
		//putting input again
		target.innerHTML = '';

		const todayGoalInput = document.createElement('input');
		todayGoalInput.setAttribute('type', 'text');
		todayGoalInput.setAttribute('id', 'targetBox');
		todayGoalInput.setAttribute('placeholder', "What's your goal for today? ");

		target.appendChild(todayGoalInput);
	}
});
