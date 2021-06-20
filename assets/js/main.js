
document.addEventListener("click", (e) =>{
	const value = e.target.dataset.klaus;
	if (typeof value !== "undefined")
		calculate(value);
})

const calculate = (value) => {
	const screen = document.querySelector('#result');
	
	
	switch (value) {
		case 'C':
			screen.innerHTML = "";
		break;

		case '=':
			const result = eval(screen.innerHTML);
			screen.innerHTML = result;
			
		break;

		default:
			
			screen.innerHTML = screen.innerHTML + value;
	}
}