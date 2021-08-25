import React, { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './AddUser.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUsername && enteredAge) {
            props.onAddUser({ name: enteredUsername, age: enteredAge, id: Math.random().toString() });
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        } else {
            setError({
                title: "Invalid Input",
                msg: "Please fill in all fields"
            });
        }
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} msg={error.msg} onClose={errorHandler} />}
            <Card className='input'>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" name="usernameInput" id="usernameInput" ref={nameInputRef} />
                    <label htmlFor="ageInput">Age (Years)</label>
                    <input type="number" name="ageInput" id="ageInput" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;