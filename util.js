function ListNode(val) {
  this.val = val
  this.next = null
}

function initListNodeFromArr(arr) {
  let head = new ListNode(null)
  let current = head
  arr.forEach(v => {
    current.next = new ListNode(v)
    current = current.next
  })
  return head.next
}

module.exports = {
  initListNodeFromArr
}
