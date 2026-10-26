// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//     const heap = []

//     function pushNode(node) {
//         heap.push(node);

//         // console.log(heap);

//         let i = heap.length - 1;

//         while(i > 0) {
//             const p = Math.floor((i - 1) / 2);

//             if(heap[p].val <= heap[i].val) {
//                 break
//             }

//             [heap[p], heap[i]] = [heap[i], heap[p]]
//             i = p;


//         }

//     }

//     function popNode() {
//         const result = heap[0];
//         const last = heap.pop();

//         if(heap.length > 0) {
//             heap[0] = last;
//             let i = 0;

//             while(true) {
//                 let smallest = i;
//                 const left = 2 * i + 1;
//                 const right = 2 * i + 2;

//                 if(left < heap.length && heap[left].val < heap[smallest].val) {
//                     smallest = left
//                 }

//                 if(right < heap.length && heap[right].val < heap[smallest].val) {
//                     smallest = right
//                 } 

//                 if(smallest === i) {
//                     break
//                 }

//                 [heap[i], heap[smallest]] = [heap[smallest], heap[i]];

//                 i = smallest;
//             }
//         }
//         return result;
//     }

//     // pushnode(lists)

//     for(let i = 0; i < lists.length; i++) {
//         if(lists[i]) {
//             pushNode(lists[i])
//         }
//     }

//     const dummy = new ListNode(0);

//     let curr = dummy;

//     while(heap.length > 0) {
//         const node = popNode();

//         curr.next = new ListNode(node.val);
//         curr = curr.next;

//         if(node.next) {
//             pushNode(node.next)
//         }
//     }

//     return dummy.next
// };

const mergeTwo = function(l1,l2) {
    let dummy = new ListNode(0) 
    let prev = dummy

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next
        } else {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next;
    }

    prev.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null
    }

    while(lists.length > 1) {
        let mergedLists = []

        for(let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

            mergedLists.push(mergeTwo(l1,l2))
        }

        lists = mergedLists;
    }

    return lists[0]
}

