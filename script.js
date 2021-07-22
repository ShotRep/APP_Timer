/* Timer code was broken out into its own js file and is called first.

/* query selectors */
const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const circle = document.querySelector("circle")

const perimeter = circle.getAttribute("r") * 2 * Math.PI
circle.setAttribute("stroke-dasharray", perimeter)

// let currentOffset = 0
let duration
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
    // console.log("onStart callback triggered")
  },
  onTick(timeRemaining) {
    // console.log("onTick callback triggered")
    circle.setAttribute("stroke-dashoffset", perimeter * timeRemaining / duration - perimeter)
   
  },
  onComplete() {
    // console.log("onComplete callback triggered")
  },
})
