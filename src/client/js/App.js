import React, { useState } from 'react';
import UserForm from './formularios/UserForm';
import CarForm from './formularios/CarForm';

import '../styles/app.css';

const App = () => {
    const [currentForm, setCurrentForm] = useState('user');

    const switchForm = () => {
        setCurrentForm((prevForm) => (prevForm === 'user' ? 'car' : 'user'));
    };

    return (
        <main className='main'>
            {currentForm === 'user' ? (
            <>
                <UserForm switchForm={switchForm}/>
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
