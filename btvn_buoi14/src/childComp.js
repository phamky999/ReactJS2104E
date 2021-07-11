import React from 'react';
class childComp extends React.Component{
    render(){
       return <>
            <div>Call age, adrr in child class:  age: {this.props.myProps.age}; address: {this.props.myProps.addr}</div>
           
       </>
    }
}
export default childComp;