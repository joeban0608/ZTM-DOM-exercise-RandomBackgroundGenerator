var currentCss = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var coolButton = document.querySelector("div").getAttribute("coolStylessButton")[0];

// change the background to gradient
// background: linear-gradient(to right, red , blue);
function setGradientBackground() {
    body.style.background = "linear-gradient(to right, " +
                            color1.value +
                            " , " +
                            color2.value +
                            ")";
    // insert element.textContent
    currentCss.textContent = body.style.background + ";";
}

// // set color1 input event
color1.addEventListener("input", setGradientBackground)


// // set color2 input event
color2.addEventListener("input", setGradientBackground)

coolButton.addEventListener("mouseenter", function(){
    // console.log("hi") 
    // random color1.value & color2.value
    color1.value = getRandomColor()
    color2.value = getRandomColor()
    // setGradientBackground()
    setGradientBackground()
})

// from stack_overflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

// math.floor(x) return int(x) <= x 
// math.random() return 0-1之間的浮點數,含0不含1
// math.floor api: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// math.random api: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random