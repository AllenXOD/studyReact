# JSX

## 什么是 JSX

1. JSX 是一个`javascript的语法扩展`
2. JSX 可以很好的描述 UI 应该呈现出它应有交互的本质形式
3. JSX 具有 Javascript 的全部功能

## 为什么使用 JSX

- React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合, 比如: 在 UI 中绑定处理事件, 在某些时刻状态发生变化时需要通知到 UI, 以及需要在 UI 中展示准备好的数据
- React 并没有采用将`标记与逻辑`进行分离到不同文件的分离方式, 而是通过将两者共同存放在称之为`组件`的松散耦合单元中
- React 对其有更多有用的错误和警告信息

## JSX 嵌入表达式

```js
import React, { Component } from "react";
// Hello React
class App extends Component {
  render() {
    let name = "React";
    return <p>Hello {name} </p>;
  }
}
// Hello React & JSX
class App extends Component {
  render() {
    function getName(user) {
      return user.firstName + " & " + user.lastName;
    }
    let user = {
      firstName: "React",
      lastName: "JSX"
    };
    return (
      <p>Hello {getName(user)}</p>
    );
  }
}
export default App;
```

## JSX 也是一个表达式

```js
class App extends Component {
  render(){
    function getName(user) {
      return user.firstName + " & " + user.lastName;
    };
    let user = {
      firstName: "React",
      lastName: "JSX"
    };
    // 返回JSX
    function getGreeting(user) {
      if (user) {
        return <p>Hello, {getName(user)}!</p>;
      }
        return <p>Hello, Stranger.</p>;
    }
    return(
      getGreeting(user)
    )
  }
}
```

## JSX特定属性

```js
// 使用引号指定为字符串
let el = <div index="0" ></div>
// 使用大括号指定为js表达式
let el = <div index={user.id} ></div>
```

`注意: ` 因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

## JSX指定子元素

```js
// 单个元素
let el = <img src={img.imgUrl} />>
// 多元素, JSX必须有一个最大的父元素
let el = (
  <div>
    <h1>Hello</h1>
    <img src={img.imgUrl} />
  </div>
)
```

## JSX防止注入攻击

`注意: ` React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击

```js
let title = state.input;
// 直接使用
let el = <p>{ title }</p>
```

## JSX表示对象

> Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

```js
// 以下两种写法效果相同
let el = (
  <h1 className="greeting">
    Hello world!
  </h1>
)
let el = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello world!'
)
```

`React.createElement() 会预先执行一些检查，以帮助你编写无错代码`，但实际上它创建了一个这样的对象:

```js
// 注意, 这是简化的结构
let el = {
  type: 'h1',
  prop: {
    className: 'greeting',
    children: 'Hello world!'
  }
}
```
