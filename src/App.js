import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component{
    constructor (props){
        super(props);
        this.state={
            list:[]
        }
        this.handleAddItem=this.handleAddItem.bind(this);
    }
    render(){
        return(
//Fragement只是一个占位符，解决return只能返回一个标签的问题。
            <Fragment>
                <TransitionGroup>
             {
                 this.state.list.map((item,index)=>{
                     return(
                        <CSSTransition
                        timeout={1000}
                        classNames='fade'
                        unmountOnExit
        //入场动画结束之后，onEntered就会被执行
                        onEntered={(el)=>{el.style.color='blue'}}
                        appear={true}
                     >
                         <div key={index}>{item}</div>
                         </CSSTransition>
                     )
                 })
             }
             <button onClick={this.handleAddItem}>toggle</button>
             </TransitionGroup>
            </Fragment>
           
        )
    }
    handleAddItem(){
        this.setState((prevState)=>{
            return{
                list:[...prevState.list,'item']
            }
        })

    }
}
export default App;