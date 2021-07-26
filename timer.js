class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    /* allow callbacks to either run or not without errors */
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }
    /* click event handler */
    this.startButton.addEventListener("click", this.start)
    this.pauseButton.addEventListener("click", this.pause)
  }

  start = () => {
    // console.log("Timer Started!")
    if (this.onStart) {
      this.onStart(this.timeRemaining)
    }
    this.tick()
    this.interval = setInterval(this.tick, 10)
  }

  pause = () => {
    // console.log("Timer Paused!")
    clearInterval(this.interval)
  }

  tick = () => {
    // console.log("tick")
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.01
      if (this.onTick) {
        this.onTick(this.timeRemaining)
      }
    }
  }

  /* getters and setters */
  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2)
  }
}
