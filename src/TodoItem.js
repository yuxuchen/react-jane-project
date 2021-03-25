import React,{Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    constructor(props){
        //父组件传递给子组件
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        console.log('child render')
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
    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行了，子组件的生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReciveProps');
    }
    //当这个组件即将被从页面移除的时候会执行
    componentWillUnmount(){
        console.log('child componentWillUnmount')
    }
}


//propTypes在传值不对的时候，会给提示
TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    //必须传
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:'hello world'
}

export default TodoItem;