/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1
  let p2 = l2
  let result = new ListNode()
  let carried = 0
  let c = result
  let previousC
  while (p1 || p2) {
    p1 = p1 || new ListNode(0)
    p2 = p2 || new ListNode(0)
    let val = p1.val + p2.val + carried
    if (val > 9) {
      carried = 1
      val -= 10
    } else {
      carried = 0
    }
    c.val = val
    c.next = new ListNode(0)
    previousC = c
    c = c.next

    p1 = p1.next
    p2 = p2.next
  }
  if (carried) {
    c.val = carried
  } else {
    previousC.next = null
  }
  return result
}
