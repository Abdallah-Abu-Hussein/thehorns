import React from 'react';
import HornedBeast from './HornedBeast';
import Horned from './Horned.json';


class Main extends React.Component{
    render(){
        return(
            <div>
               {
                   Horned.map((items,index)=>{
                       return(
                         <HornedBeast title={items.props} pargraph={items.description} url={items.image_url} key={index} ></HornedBeast>
               )})
                   }
               
            </div>
        )
    }
}


export default Main