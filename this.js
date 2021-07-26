/* Determining the value of THIS */

/* 1.) using ()=>{} write console.log(this) on the first valid line above the arrow function.  value of THIS in the arrow function will be equal to that console log */

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

/* 2.) Using function(){} Did you call 'bind', 'call', or 'apply' on the function when you invoked it? - 'this' is equal to the first argument of 'bind', 'call', or 'apply' */

const printThisAlso = function () {
  console.log(this)
}
printThisAlso.call({color: "red"}) //.call or .apply is overriding the value of this.

/* 3.) ALL OTHER CASES - 'this' is equal to whatever is to the left of the '.' in the method call */

const colors = {
  printColor() {
    console.log(this)
  },
}
colors.printColor() //colors is to the left of the '.'    'this'=colors

/*   Solving the 'This' issue   */
