const { initListNodeFromArr } = require('../util.js')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 预留一个节点（n与链表长度相同时）
  let c1 = { next: head },
    c2 = { next: head }
  let nhead = c1
  while (n > 0) {
    c2 = c2.next
    n -= 1
  }
  while (c2.next !== null) {
    c1 = c1.next
    c2 = c2.next
  }
  // 判空（n为0时）
  if (c1.next) c1.next = c1.next.next
  return nhead.next
}

// test
let h = initListNodeFromArr([1, 2, 3, 4, 5])
let r = removeNthFromEnd(h, 2)
