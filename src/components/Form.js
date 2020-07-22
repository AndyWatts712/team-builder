import React from 'react';

function Form() {

    return (
        <div>
            <form>
                <h2>Add Team Member</h2>
                <label htmlFor='nameInput'>Name:
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter name'
                        maxLength='20'
                    >
                    </input>
                    <br>
                    </br>
                </label>

                <label htmlFor='emailInput'>email: 
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='email address'
                        maxLength='50'
                    >
                    </input>
                </label>
            </form>
        </div>
    )
}
export default Form;