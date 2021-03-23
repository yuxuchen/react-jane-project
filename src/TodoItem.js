import React,{Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    constructor(props){
        //父组件传递给子组件
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        const {content,test }=this.props;
        return (
        <div onClick={this.handleClick}>
            {test}-{content}
            </div>
            )
        //this.props. 来接收属性内容
    }
    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//propTypes在传值不对的时候，会给提示
TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    //必须传
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:'hello world'
}

export default TodoItem;