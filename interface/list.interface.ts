import { uint8, ulong32 } from './index'

export interface ListNode {
    value: uint8, // 辅助值，用于帮助节点进行顺序排列
    prevNode: ListNode, // 指向链表上一个节点
    nextNode: ListNode, // 指向链表下一个节点
    tcb: TCB, // 该节点的拥有者，即该节点内嵌在哪个数据结构中，属于哪个数据结构的成员
    list: List // 链表根节点
}

export interface ListEndNode {
    value: uint8, // 辅助值，用于帮助节点进行顺序排列
    prevNode: ListNode, // 指向链表上一个节点
    nextNode: ListNode, // 指向链表下一个节点
}

export interface List {
    nodeCount: ulong32, // 节点数量
    node: ListNode, // 链表节点索引指针
    endNode: ListEndNode, // 链表最后一个节点
}

export interface ListRoot {
    nodeCount: ulong32, // 节点数量
    prevNode: ListNode, // 指向链表上一个节点
    endNode: ListNode, // 链表最后一个节点
    tcb: TCB, // 该节点的拥有者，即该节点内嵌在哪个数据结构中，属于哪个数据结构的成员
    listRoot: ListNode // 链表根节点
}