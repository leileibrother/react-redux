import React, { Component } from 'react';
import Api from '@/tool/api.js';
import { Link } from 'react-router-dom';
// 调用我们的自定义的组件
import Header from '@/container/header'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        };
    }
    // 当组件加载时，执行一些内容，其他时机执行，请搜索 react 生命周期
    componentDidMount () {
        this.getData()
    }
    // 自定义一个方法，在其他地方用 this.方法名 来调用运行
    getData () {
        Api.get('topics', null, r => {
            // react 和 vue 很大的不同就是 react 是单向绑定的。所以，我们不能用直接等于的方法来更新数据
            // 而是要用 setState 的方法更新数据
            this.setState({list: r.data})
        })
    }

    render(){
        let { list } = this.state
        let dom = null
        // 下面这段代码比较恶心，尤其是之前学习 vue 的朋友更加觉得如此。
        // 数据的循环，必须使用 .map 方式进行处理，然后 return 出来 dom 结构
        // dom 结构用 () 包裹。单行时可以省略，但是不推荐省略
        if (list.length !== 0) {
            let listDom = list.map((i, k) => {
                return (
                    <li className="listStyle" key={k}><Link to={`details/${i.id}`}>{k+1+'、 '+ i.title}</Link></li>
                )
            })
            dom = (
                <div className='tipics_list'>
                    <ul>{listDom}</ul>
                </div>
            )
        }
        // 最后，把结果 return 出去，即可。
        return (
            <div className="outer home">
                <Header title='网站主页' />
                {dom}
            </div>
        )
    }
}
