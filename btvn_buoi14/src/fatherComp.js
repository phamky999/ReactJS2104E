import React from 'react';
import ChildComp from './childComp'
class fatherComp extends React.Component{
    render(){
       return <>
            <div>Call name in father class: {this.props.myProps.name}</div>
           <ChildComp myProps={this.props.myProps} />
       </>
    }
}
export default fatherComp;