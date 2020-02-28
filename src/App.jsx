import React,{Fragment} from 'react';
import Student from './components/students/Student'


function App() {
    const enrrique={
        domicilio:"tuzos",
        telefono:77111919191,
        estudiante:true
    }
    const carlos={
        domicilio:"remate",
        telefono:1231231231,
        estudiante:false
    }

    return (
        <Fragment>
            <Student carlos={carlos} enrrique={enrrique} selection="carlos" />
        </Fragment>
    );
}

export default App;