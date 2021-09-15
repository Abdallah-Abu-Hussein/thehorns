import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    render(){
        return (
            <div>
                {this.props.beastData.map((element, index) => {
                      return (
                      <HornedBeast 
                        key={index} beastkey={index} 
                        beastName={element.title}
                        beastImgSrc={element.image_url} 
                        beastdisc={element.description}
                        beastKeyword={element.keyword}
                        beastHorns={element.horns}
                        showModal={this.props.showModal} />
                        )
                
                })}
            </div>
        )
    }
}


export default Main