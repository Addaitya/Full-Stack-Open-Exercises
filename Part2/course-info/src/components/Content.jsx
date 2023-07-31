/* eslint-disable react/prop-types */
import Part from './Part'

const Content = ({parts}) =>{

    const viewParts = parts.map((part) => (
        <Part key = {part.id} name={part.name} exercises={part.exercises} />
        )
    );

    return(
        <div>
            {viewParts}
        </div>
    );
}

export default Content;