/*
 * @Author: try try418@163.com
 * @Date: 2023-07-25 14:58:58
 * @Description: 
 */

import { I_AST } from "../interface/ast"

/**
 * 常见css属性定义
 */
export default class Styles {
  ast: I_AST
  constructor(ast) {
    this.ast = ast
  }

  margin(value: string) {
    this.setStyle('margin', value)
  }

  padding(value: string) {
    this.setStyle('padding', value)
  }


  setStyle(key, value) {
    this.ast.props.style = Object.assign(this.ast.props.style, { [key]: value })
  }
}