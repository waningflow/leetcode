function ListNode(val) {
  this.val = val
  this.next = null
}
let hd = new ListNode(1)
let current = hd
current.next = new ListNode(2)
current = current.next
current.next = new ListNode(6)
current = current.next
current.next = new ListNode(3)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let res = {}
  let current = head
  let cRes = res
  while (current) {
    if (current.val !== val) {
      cRes.next = current
      cRes = cRes.next
    }
    current = current.next
  }
  cRes.next = null
  return res.next
}

console.log(removeElements(hd, 6))
