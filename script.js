const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yaayyyy, let the fun begin🥳🥳🥳(Wait for 8 seconds)";
  gif.src =
    "https://i.gifer.com/Vg6.gif";
 setTimeout(() => {
    window.location.href = "file:///C:/09.02.2024/gifts/gifts.html";
  }, 8000); // 8000 milliseconds = 8 seconds
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
