const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultArea = document.getElementById("output");

const convertToRoman = (numberInput) => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  let num = Number(numberInput.value);
  if (isNaN(num) || numberInput.value === "") {
    output.innerHTML = "Please enter a valid number";
    return;
  } else if (num<=0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (num>=4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  } else {
    ref.forEach(function (arr){
      while(num>=arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    })
    output.innerHTML = res.join('');
  }
}

convertBtn.addEventListener("click", () => {
  convertToRoman(number);
})

number.addEventListener("keydown", e => {
  if (e.key==="Enter") convertToRoman(number);
});