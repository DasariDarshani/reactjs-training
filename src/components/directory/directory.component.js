import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

//class component

class Directory extends React.Component{

    constructor(){

        super();

        this.state = {
            
            sections: [
                {
                    title:'kumar',
                    id:1,
                    subtitle:'lives in bangalore'
                },
                {
                    title:'revanth',
                    id:2,
                    subtitle:'lives in bangalore'
                },
                {
                    title:'rohan',
                    id:3,
                    subtitle:'lives in bangalore'
                },
                {
                    title:'roshan',
                    id:4,
                    subtitle:'lives in bangalore'
                },
                {
                    title:'roshanrohan',
                    id:5,
                    subtitle:'lives in bangalore'
                }

            ],

        }

       

    }

    render(){
        return(

         <div className="directory-menu">
        
        { this.state.sections.map(({title}) => (
             <MenuItem title={title}/>
         ))
        }
 
         </div>

        )
    }


}

export default Directory;