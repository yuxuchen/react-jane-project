import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css'

//create component
class Todolist extends Component{
    // class must have one constractor which to be excuted first
    constructor(props){
        super(props);
        //当组件的state活着props发生改变的时候，render函数就会重新执行
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
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
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                {this.getTodoItem()}
            </ul>
            <Test content={this.state.inputValue}/>
            </Fragment>
        )
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
    handleInputChange(e){
        const value=e.target.value;
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleBtnClick(){
        this.setState((prevState)=>({
            //...this.state.list 把以前的运算符展开再形成一个新的数组
            list:[...prevState.list,prevState.inputValue],inputValue:''
        }))
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
