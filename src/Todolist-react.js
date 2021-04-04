import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from'./store';


  
class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnChange=this.handleBtnChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return(
            <div style={{margin:10 }}>
                <div>
                    <Input value={this.state.inputValue} size='default' placeholder='write here' 
                    style={{width: 300, textAlign: 'center', marginRight: 10}}
                    onChange={this.handleInputChange}
                    />
                    <Button type='primary' margin='10px' onClick={this.handleBtnChange}>submit</Button>
                </div>
                            <List
                style={{margin:10 ,testAlign:'center', width:300}}
                bordered
                dataSource={this.state.list}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
    handleInputChange(e){
        const action={
            type:'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnChange(){
        const action={
            type:'add_todo_item'
        }
        store.dispatch(action);
    }
}
export default Todolist;
