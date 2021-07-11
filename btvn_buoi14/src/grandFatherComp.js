import React from 'react';
import FatherComp from './fatherComp'
class grandFatherComp extends React.Component{
    render(){
    let myInfo = {
        name : "abc",
        age : 22,
        addr : "Bac Ninh"
    };
       return <>
           <FatherComp myProps={myInfo} />
       </>
    }
}

export default grandFatherComp;