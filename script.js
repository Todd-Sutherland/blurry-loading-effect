//bring in both elements using querySelector
const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

//initialize load value, which will start at 0 and eventually increase to 100
let load = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//We want to run the blurring function in an interval
//We want the blurring function to run every 30ms
let interval = setInterval(blurring, 30);

function blurring() {
  //take load value and increment it by 1
  load++;

  //if the load value is greater than 99, we want to stop the interval with clearInterval
  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
