import React, { useState } from 'react';
import UserForm from './formularios/UserForm';
import CarForm from './formularios/CarForm';

import '../styles/app.css';

const App = () => {
    const [currentForm, setCurrentForm] = useState('user');

    const switchForm = (e) => {
        e.preventDefault();
        setCurrentForm((prevForm) => (prevForm === 'user' ? 'car' : 'user'));
    };

    return (
        <main className='main'>
            {currentForm === 'user' ? (
            <>
                <UserForm>
                    <button
                        onClick= { switchForm }
                        className="btnSwitch"
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </UserForm>
            </>
            ) : (
            <>
                <CarForm />
            </>
            )}
        </main>
    );
};

export default App;
