const number = document.querySelector(".number");
const generateBtn = document.querySelector(".generateBtn");

const generateNum = () => {
  // generate number from 1 to 10
  const num = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = num;
};

generateBtn.addEventListener("click", generateNum);
