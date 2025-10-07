/* Você recebe uma série de k listas vinculadas lists, cada lista vinculada é classificada em ordem crescente.
Mescle todas as listas vinculadas em uma lista vinculada classificada e retorne-a.*/
// Definição do nó
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  const values = [];

  
  for (const list of lists) {
    let current = list;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  }

  
  values.sort((a, b) => a - b);

  
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}


function createList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}


function printList(list) {
  const values = [];
  while (list) {
    values.push(list.val);
    list = list.next;
  }
  console.log(values.join(" -> "));
}

const list1 = createList([1, 4, 5]);
const list2 = createList([1, 3, 4]);
const list3 = createList([2, 6]);

//  função principal
const merged = mergeKLists([list1, list2, list3]);

printList(merged);
