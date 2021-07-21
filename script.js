/* Timer code was broken out into its own js file and is called first.

/* query selectors */
const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("onStart callback triggered")
  },
  onTick() {
    console.log("onTick callback triggered")
  },
  onComplete() {
    console.log("onComplete callback triggered")
  },
})
