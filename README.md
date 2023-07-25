# toy

declarative syntax ，you can describe the desired UI and its behavior using a series of structured statements rather than imperatively defining each individual UI element

## about

### demo1

```js
const Layout = VStack(
  'aaaa',
  'bbbb'.click(xxxxx),
  Div('cccc').click().margin().padding().styles({})
);
```

```jsx
// for react
export default () => <Layout />;
```
