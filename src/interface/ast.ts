/*
 * @Author: try try418@163.com
 * @Date: 2023-07-25 15:01:52
 * @Description: 
 */

export enum TAG {
  View = 'view',
  Text = 'span'
}
export interface I_AST {
  /** 子节点 */
  children: I_AST | I_AST[] | string | number
  /** 属性值 */
  props?: any
  /** 标签类型 */
  type: TAG
}