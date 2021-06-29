function animatedForm() {
	const arrows = document.querySelectorAll
	('.fa-arrow-down');

	arrows.forEach(arrow => {
		arrow.addEventListener('click', () => {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;


			//check for validation
			if(input.type === "text" && validateUser(input)) {
				nextSlide(parent, nextForm);
			} else if(input.type === "email" && validateEmail(input)) {
				nextSlide(parent, nextForm);
			} else if(input.type === "password" && validateUser(input)) {
				nextSlide(parent, nextForm);
			} 
		})
	})
} 


function validateUser(user) {
	if(user.value.length < 6) {
		console.log('Not enough characters');
		changebackgroundcolor('rgb(189,87,87');
	} else{ 
		changebackgroundcolor('rgb(87,189,130)');
		return true;
	}
}

function validateEmail(email) {
	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(validation.test(email.value)) {
		changebackgroundcolor('rgb(87, 189, 130)');
		return true;
	} else {
		changebackgroundcolor('rgb(189, 87, 87)');
	}
}

function nextSlide(parent, nextForm){
	parent.classList.add('innactive');
	parent.classList.remove('active');
	nextForm.classList.add('active');
}

function changebackgroundcolor(color) {
	document.body.style.backgroundColor = color;
}

//to discover the active field 

function getActiveChild () {
	let parentForm = document.getElementById("test-form");
	let formChildren = parentForm.children;

	let activeChild;
	for(let i = 0; i < formChildren.length; i++){

		let child = formChildren[i];
		if(child.classList.contains('active')){
			activeChild = child;
		}
	}

	return activeChild;

//to go back to the previous field.

function previousSlide(){
	let activeChild = getActiveChild();

	let previousSibling = activeChild.previousElementSibling;
	if(previousSibling === null){
		alert("No previous sibling");
		return;
	}

	activeChild.classList.add("innactive");
	activeChild.classList.remove("active");
	previousSibling.classList.add("active");

}
animatedForm();