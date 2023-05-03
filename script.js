// Get the viewport width
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// Get the HTML element
const html = document.getElementsByTagName('html')[0];

// Adjust the font size based on the viewport width
if (viewportWidth < 640) {
	html.style.fontSize = '10px';
} else if (viewportWidth < 1024) {
	html.style.fontSize = '12px';
} else {
	html.style.fontSize = '16px';
}
window.addEventListener('resize', () => {
	// Adjust the layout when the screen is resized
})

// Email-form
// Get the submit button and email input field
const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');

// Add an event listener to the submit button
submitBtn.addEventListener('click', () => {
	// Get the email address from the input field
	const email = emailInput.value;
	
	// Send the email address to a server using an HTTP request
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/submit-email');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			alert('Email sent successfully!');
		} else {
			alert('Error sending email.');
		}
	};
	xhr.send(JSON.stringify({ email: email }));
});
