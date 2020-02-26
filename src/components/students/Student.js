import React from 'react';
import Enrrique from './Enrrique'
import Carlos from './Carlos'

function Student(props) {
    return (
        <div>
            {
            props.selection==="enrrique"?
                <Enrrique />
            :props.selection==="carlos"?
                <Carlos />
            :<span>Tienes un error bro</span>
            }
        </div>
    );
}

export default Student;