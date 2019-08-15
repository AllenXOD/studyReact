# React

## 什么是react

1. React是一个用于构建用户界面的`Javascript库`
2. React主要用于构建UI, 相当于MCV中的V ( 试图 )
3. React起源于Facebook的内部项目, 用来架设Instagram的网站, 于2013年5月开源
4. React: `较高的性能`, `代码逻辑简单`

| 特点 | 说明 |
| - | - |
JSX | Javascript语法扩展
高效 | React通过对DOM的模拟, 最大限度的减少与DOM的交互
灵活 | React可以与已知的库或框架很好的配合
组件 | 通过React构建组件, 是的代码更加容易得到复用
声明式设计 | React采用声明式范式, 可以轻松描述应用
单向响应的数据流 | React实现了单向响应的数据流, 从而减少了重复代码

## Create React App

> [Create React App](https://github.com/facebook/create-react-app), 用于创建新的`单页应用`的方式  
> 安装 yarn create-react-app -g

```cmd
npx create-react-app Name
  or
yarn create-react-app Name
```

`注意: ` npx是 npm 5.2+ 附带的 package 运行工具

## 元素渲染

    元素是构成React应用的最小模块

> 与浏览器DOM元素不同, React元素是创建开销极小的普通对象. React DOM会负责更新DOM与React元素保持一致

```js
let el = '<p>Hello World!</p>'
ReactDOM.render(element, document.getElementById('root'));
```

## 更新已渲染元素

> React元素是`不可变对象`, 你无法更改他的子元素或属性, 唯一的方法就是重新创建

```js
// 定时器创建
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }
  // 钩子<当组件实例被创建并插入 DOM 之后触发>
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.date}</h1>
      </div>
    );
  }
}
```

## 组件 & props

- 定义组件最简单的方法就是定义函数

```js
function Welcome(props){
  return <p>Hello {props.name}</p>
}
```

- ES6 和 Class 定义组件

```js
class Welcome extends Component {
  render(){
    return (
      <p>Hello {this.props.name}</p>
    )
  }
}
```

- React元素为用户自定义组件时, 会将JSX所接收的`属性`转换为单个对象传递给组件, 这个对象称之为`'props'`

```js
class Welcome extends Component {
  render(){
    return(
      <p>Hello {this.props.name}</p>
    )
  }
}

class App extends Component {
  render(){
    return(
      // Hello Allen
      <Welcome name="Allen"></Welcome>
    )
  }
}
```

- 组合组件

```js
class Welcome extends Component {
  render(){
    return(
      <p>Hello {this.props.name}</p>
    )
  }
}
class App extends Component {
  render(){
    function moreWel(){
      return (
        <div>
          <Welcome name="al"></Welcome>
          <Welcome name="bl"></Welcome>
          <Welcome name="cl"></Welcome>
        </div>
      )
    }
    return(
      // Hello al
      // Hello bl
      // Hello cl
      moreWel()
    )
  }
}
```

- props 只读, 不可修改

> 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props


```js
// 纯函数
function add(a, b){
  return a + b;
}
// 非纯函数
function add(obj , b){
  // 改变了自己的入参
  obj.a += b
}
```

## State & 生命周期

