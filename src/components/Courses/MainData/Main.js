import React from 'react';
import './Main.css'

const Main = (props) => {
    const {price,name} = props.details;
    return (
        <div className='main_container'>
            <div className="title">
                <h2>Course Name: {name}</h2>
                <h3>Course Price: {price}</h3>
            </div>
            <div className="enroll">
                <button onClick={()=>props.handleAddCourse(props.details)} className='enroll_btn'>Enroll Now</button>
            </div>
        </div>
    );
};

export default Main;