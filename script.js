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
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    this.startButton.addEventListener("click", this.start)
    this.pauseButton.addEventListener("click", this.pause)
  }

  start() {
    console.log("Start the timer!")
  }

  pause() {
    console.log("Pause the timer!")
  }
}

const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")

const timer = new Timer(durationInput, startButton, pauseButton)

/* Determining the value of THIS */

/* using ()=>{} write console.log(this) on the first valid line above the arrow function.  value of THIS in the arrow function will be equal to that console log */

console.log(this)
const printThis = () => {
  console.log(this) //what is the value of this?  its equal to the the first line of code above the function. WINDOW
}
printThis()

const color = {
  printColor() {
    console.log(this)
    const printThis = () => {
      console.log(this)
    }
    printThis()
  },
}
color.printColor()

/*  */
