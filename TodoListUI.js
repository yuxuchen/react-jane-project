import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

//如果一个组件只有render函数，并且没有执行任何的逻辑，这个时候可以用无状态函数
//这是一种更加高效的写法，无需执行生命周期函数
const TodoListUI = (props)=>{
    return(
        <div style={{margin:10}}>
        <div>
            <Input value={props.inputValue} style={{width:200}} 
            placeholder='write here' onChange={props.handleInputChange} />
            <Button style={{width:200}} onClick={props.handleBtnChange} 
            type='primary'>submit</Button>
        </div>
            <List bordered 
            dataSource={props.list}
            renderItem={(item,index)=> 
            <List.Item onClick={()=>{props.handleItemClick(index)}}>
                {item}</List.Item>}/>
    </div>
    )
}
//UI组件是没有任何函数的，所以通过调用父组件的函数，即使用.props这个方法

export default TodoListUI;