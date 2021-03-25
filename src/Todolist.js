import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css'

//create component
class Todolist extends Component{
    // class must have one constractor which to be excuted first
    constructor(props){
        super(props);
        //当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }

    //当组件即将被挂载到页面的时候会被执行
    componentWillMount(){
        console.log('componentWillMount');
    }
    
    
    render(){
        console.log('render');
        //write bracket to return multi-line commond statement
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    {/*下面是一个input框*/}
                    <input 
                    id="insertArea"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input) =>{this.input=input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul)=>this.ul=ul}>
                {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }

    //组件被挂载在页面之后执行,只有在组件第一次被挂载的时候执行一次，之后并不会被执行
    componentDidMount(){
        console.log('componentDidMount');
    }
    //组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件被更新之前，他会自动被执行,但是他在shouldComponentUpdate之后执行
    //如果shouldComponentUpdate返回true它才执行
    //如果返回false，这个函数就不会被执行了
     componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //组件更新完成之后会被执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    
    getTodoItem(){
        return this.state.list.map((item, index)=>{
            return(
                <TodoItem 
                key={index}
                content={item} 
                index={index}
                deleteItem={this.handleItemDelete}
                />
        )
        })

    }
    handleInputChange(){
        const value=this.input.value;
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleBtnClick(){
        this.setState((prevState)=>({
            //...this.state.list 把以前的运算符展开再形成一个新的数组
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length);
        });
        //setSate第二参数是一个回调函数
    }
    handleItemDelete(index){
        //react是immutable，state不允许我们做任何改变，只能复制之后改变副本
         //删除一个位于index的数据
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }
}

//component can be referenced only if they are exported

export default Todolist;
