const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const operationBtns = document.querySelectorAll(".operations");
const numBtns = document.querySelectorAll(".numbers");

const userInput = document.getElementById("input-area");
const resultArea = document.getElementById("result-area");

let opPut = true;
let numPut = true;

userInput.addEventListener("input", () => {
	userInput.value = userInput.value.replace(/[^0-9+\-*/().]/g, '');
});

const operate = () => {
	const expr = userInput.value;

	const numbers = expr.match(/(\d+\.\d+|\d+)/g);
	let maxDecimalPlaces = 0;

	if (numbers) {
		for (const num of numbers) {
			const decimalPart = num.split('.')[1];
			if (decimalPart) {
				maxDecimalPlaces = Math.max(maxDecimalPlaces, decimalPart.length);
			}
		}
	}

	const result = eval(expr);
	const rounded = Number(result.toFixed(maxDecimalPlaces));

	resultArea.innerHTML = `= ${rounded}`;
};

const appendOperation = (op) => {
  userInput.value += op.innerText;
};

operationBtns.forEach(opBtn => {
	opBtn.addEventListener("click", () => {
		appendOperation(opBtn);
		opPut = true;
		document.getElementById("decimal").disabled = false;
	});
});

const appendNumber = (num) => {
	userInput.value += num.innerText;
};

numBtns.forEach((numBtn) => {
	numBtn.addEventListener("click", () => {
		appendNumber(numBtn);
		if (opPut && numBtn.innerText===".") {
			numBtn.disabled = true;
			opPut = false;
		}
	});
});

calculateBtn.addEventListener("click", () => operate());
userInput.addEventListener("keydown", e => {
	if (e.key === "Enter") operate();
});

clearBtn.addEventListener("click", () => {
	resultArea.innerHTML = "";
	userInput.value = "";
	opPut = true;
	document.getElementById("decimal").disabled = false;
});