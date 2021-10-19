import React, { FC } from 'react';
interface Nameprops {
	student: {
    	name: string;
    }
}
const Card: FC<Nameprops> = (props) => {
    return (
        <div>
            <h1>{props.student.name}</h1>
        </div>
    )
}

export default Card
