const arrowRight = document.getElementsByClassName("arrow")[1];
const arrowLeft = document.getElementsByClassName("arrow")[0];

const changeImage = (direction = "right") => {
  clearInterval(interval);
  interval = setInterval(changeImage, 5000);
  const active = document.querySelector("[data-active='active']");
  const activeCircle = document.querySelector("[data-on='active']");

  active.dataset.active = "";
  activeCircle.dataset.on = "";

  let activeKey = parseInt(active.dataset.key);

  let nextActive;
  let nextActiveCircle;
  if (direction === "left") {
    if (activeKey === 1) {
      activeKey = 5;
    }
    nextActive = document.querySelector(`[data-key='${activeKey - 1}']`);
    nextActiveCircle = document.querySelector(`[data-id='${activeKey - 1}']`);
  }

  if (direction === "right") {
    if (activeKey === 4) {
      activeKey = 0;
    }
    nextActive = document.querySelector(`[data-key='${activeKey + 1}']`);
    nextActiveCircle = document.querySelector(`[data-id='${activeKey + 1}']`);
  }
  nextActive.dataset.active = "active";
  nextActiveCircle.dataset.on = "active";
};
arrowRight.addEventListener("click", () => {
  changeImage("right");
});

arrowLeft.addEventListener("click", () => {
  changeImage("left");
});

let interval = setInterval(changeImage, 5000);
