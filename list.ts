import { List, ListNode } from './interface'

const initListNode = (node: ListNode) => {
    node.tcb = null
}

const init = (list: List) => {
    list.pointer = list.header
    list.header.sequence = 999
    list.pointer.prev = list.pointer
    list.pointer.next = list.pointer
    list.nodeCount = 0
}

const unshift = (list: List, node: ListNode) => {
    node.next = list.pointer
    node.prev = list.pointer.prev
    list.pointer.prev.next = node
    list.pointer.prev = node
    node.list = list
    list.nodeCount++
}

const orderInsert = (list: List, newNode: ListNode) => {
    let pNode: ListNode
    if(newNode.sequence === 999){
        pNode = list.header.prev
    }else{
        for(pNode = list.header; pNode.next.sequence <= newNode.sequence; pNode = pNode.next){

        }
        newNode.next = pNode.next
        newNode.prev= pNode
        pNode.next.prev = newNode
        pNode.next = newNode
        newNode.list = list
    }
}