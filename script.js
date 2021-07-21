/*
              Pseudo-Code
       Possible Implementation

Basic idea of the application: Display a timer - show an animated border around timer.

1.) event listener to watch for a click on 'start' button.
2.) draw a full border around the timer.                      EVENT when timer has started
3.) start counting down the timer.
4.) each time the timer counts down, update the border.       EVENT updates the border
5.) each time the timer counts down, update the text.
6.) if we counted down and timer reaches 0
a.) reset the border                                          EVENT resets the border                                    
b.) reset internal timer to get ready for another run

Break the problem down into small parts as much as needed.
*/

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }
    //click event handler
    this.startButton.addEventListener("click", this.start)
    this.pauseButton.addEventListener("click", this.pause)
  }

  start = () => {
    console.log("Timer Started!")
    if (this.onStart) {
      this.onStart()
    }
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  pause = () => {
    console.log("Timer Paused!")
    clearInterval(this.interval)
  }

  tick = () => {
    console.log("tick")
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1
      if (this.onTick) {
        this.onTick()
      }
    }
  }
  //getters and setters
  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time
  }
}

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
