/* eslint-disable react/prop-types */
import Part from './Part'
import Total from './Total'

const Content = ({parts}) =>{

    const viewParts = parts.map((part) => (
        <Part key = {part.id} name={part.name} exercises={part.exercises} />
        )
    );
    
    return(
        <div>
            {viewParts}
            <Total parts={parts} />
        </div>
    );
}

export default Content;