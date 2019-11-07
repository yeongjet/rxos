import { List, ListNode } from './interface'

const initListNode = (node: ListNode) => {
    node.tcb = null
}

const initList = (list: List) => {
    list.node = list.endNode
    list.node.value = 999
    list.node.prevNode = list.node
    list.node.nextNode = list.node
    list.nodeCount = 0
}

const unshiftList = (list: List, node: ListNode) => {
    node.nextNode = list.node
    node.prevNode = list.node.prevNode
    list.node.prevNode.nextNode = node
    list.node.prevNode = node
    node.list = list
}