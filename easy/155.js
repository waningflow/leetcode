/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = Infinity
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x - this.min)
  if (x < this.min) {
    this.min = x
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let x = this.stack.pop()
  let rtn
  if (x >= 0) {
    rtn = this.min + x
  } else {
    rtn = this.min
    this.min = this.min - x
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let l = this.stack.length
  let x = this.stack[l - 1]
  if (x >= 0) {
    rtn = this.min + x
  } else {
    rtn = this.min
  }
  return rtn
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.top())
console.log(minStack.getMin())
// minStack.push(-1)
// console.log(minStack.top())
// console.log(minStack.getMin())
