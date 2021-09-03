// #### Your code should start at 1 and then iterate each number up to the maximum
// * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// * If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// * Otherwise, just print the number to the console

// ### Timer Challenge 1:
// Animate the included sprite images of 'guy' images. Start with an initial image of `guy1.png` then every .5 second (500 ms) update the image to the next one in sequence. Once you reach image `guy9.png` start over with the `guy1.png` image.

// ### SUPER MARIO Challenge 2:
// Animate Mario walking to the left and right by pressing the left and right arrow keys (HINT: implement event handler(s) for handling the key presses)

const img = document.querySelector("img");
let imgSrcR = 1;
let imgSrcL = 4;
let leftPress;
let rightPress;
let jumpPress;

function resetInt(oldTimer){
  clearInterval(oldTimer);
}

document.body.addEventListener(
  "keydown",
  walk);

  function walk(evt) {
    evt.preventDefault();
    if (evt.key === "ArrowLeft") {
      resetInt(rightPress);
      leftPress = setInterval(walkLeft, 300);;
    } else if (evt.key === "ArrowRight") {
      resetInt(leftPress);
      rightPress = setInterval(walkRight, 300);
    }
    else if(evt.key === " "){
     jump();
     setTimeout(landing, 500);
    }
  }
function landing(){
  document.getElementById("container").style.paddingTop = null;
}
function jump(){
  document.getElementById("container").style.paddingTop = `10%`;
}
function walkLeft() {
  img.src = "./Mario" + imgSrcL + ".png";
  if (imgSrcL <= 5) {
    imgSrcL++;
  } else {
    imgSrcL = 4;
  }
}
function walkRight() {
    img.src = "./Mario" + imgSrcR + ".png";
  if (imgSrcR <= 2) {
    imgSrcR++;
  } else {
    imgSrcR = 1;
  }
}

function ex3() {
  let max = prompt("What is the max number?");
  for (let i = 1; i <= max; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      console.log(`Fizz ${i}`);
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log(`Buzz ${i}`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz ${i}`);
    } else {
      console.log(`${i}`);
    }
  }
}
// const img = document.querySelector('img');
// setInterval(animator, 50);
// let imgSrc = 1;
// function animator(){
//   img.src = "./guy" + imgSrc + ".png";
//   if(imgSrc < 9){
//   imgSrc++;
//   }
//   else{
//     imgSrc = 1;
//   }
// }
