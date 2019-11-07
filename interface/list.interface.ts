import { uint8, ulong32 } from './index'

export interface ListNode {
    sequence: uint8, // 用于对节点进行顺序排列
    prev: ListNode, // 指向链表上一个节点
    next: ListNode, // 指向链表下一个节点
    tcb: TCB, // 该节点的拥有者，即该节点内嵌在哪个数据结构中，属于哪个数据结构的成员
    list: List // 所在链表
}

export interface ListHeader {
    sequence: uint8, // 辅助值，用于帮助节点进行顺序排列
    prev: ListNode, // 指向链表上一个节点
    next: ListNode, // 指向链表下一个节点
}

export interface List {
    nodeCount: ulong32, // 节点数量
    pointer: ListNode, // 链表节点索引指针
    header: ListHeader, // 链表首节点
}