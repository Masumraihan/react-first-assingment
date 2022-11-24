import { useState } from 'react';
import data from '../../data/Data.json'
import Main from './MainData/Main.js';
import './Courses.css';
import Cart from '../Cart/Cart';

const Courses = () => {
    //console.log(data);
    const [course,setCourse] = useState(data);
    const [cart,setCart] = useState([]);

    const handleAddCourse = (data) => {
        const newCart = [...cart,data];
        setCart(newCart);
    };
    return (
        <div className='courses_container'>
            <div className='courses_name'>
                {
                    course.map(Courses => <Main 
                        details = {Courses}
                        key = {Courses.name}
                        handleAddCourse = {handleAddCourse}
                        ></Main>)
                }
            </div>
            <div className="cart">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;