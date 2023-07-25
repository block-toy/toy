import Base from './base';

/*
 * @Author: try try418@163.com
 * @Date: 2023-07-24 16:24:01
 * @Description:
 */
class Div extends Base {
  ast: any = {
    type: 'span',
    attr: {},
    events: [],
    children: [],
  };
  propsApi: any;
  constructor(ast: any, attr: any) {
    super();
    this.ast.children = ast;
    this.ast.attr = attr;
    this.propsApi = new Proxy(this as any, {
      get: (target, key) => {
        if (!target[key]) {
          target[key] = (cb: any) => {
            cb();
            return this.propsApi;
          };
        }
        console.log('target', target, this.propsApi);
        return target[key];
      },
    });
    return this.propsApi;
  }
  init(ast: any, attr: any) {
    this.ast.children = ast;
    this.ast.attr = attr;
    return this.ast;
  }
}

// const Temp = new Proxy(Div, {
//   get: (target, key) => {
//     console.log(123123, target, key);
//   },
// });
export default function () {
  const args = arguments;
  console.log('args', args);
  const [...children, attr] = args;

  return new Div(args);
}
