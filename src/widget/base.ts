import React from "react";

/*
 * @Author: try try418@163.com
 * @Date: 2023-07-24 16:23:30
 * @Description: 
 */
export default class Fragment {
  ast: any = {
    type: '',
    props: {},
    children: []
  }
  args = {}
  constructor(...args: any[]) {
    console.log("=====base=====")
  }
  init(ast: any, args?: any) {
    this.ast = Object.assign(this.ast, ast)
    console.log('4444', this.ast)
    this.args = args
    return this.render();
  }
  widget(ast: any) {
    this.ast = Object.assign(this.ast, ast)
    console.log('dxxx', this.ast)
    return this
  }
  cover_tree(tree: any) {
    console.log(123, tree);

  }
  render() {
    const { type, props, children } = this.ast
    return React.createElement(type, props, ...children) as any;
  }
  // click(callback: any) {
  //   console.log('xxxxxxx', this.args);
  //   this.ast.props.onClick = callback;
  //   this.render();
  //   return this as any
  // }
  hover(callback: any) {
    this.ast.props.onMouseOver = callback;
    this.render();
    return this as any
  }
}