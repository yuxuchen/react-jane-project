import React,{Component} from 'react';
class TodoItem extends Component{
    constructor(props){
        //父组件传递给子组件
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        const {content}=this.props;
        return (
        <div onClick={this.handleClick}>
            {content}
            </div>
            )
        //this.props. 来接收属性内容
    }
    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
export default TodoItem;