import React from 'react';

function Form(props) {
    const { values, update, submit } = props

const onChange = (evt) => {
    const name = evt.target.name
    const value = evt.target.value
    update(name, value)
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Add Team Member</h2>
                <label htmlFor='nameInput'>Name:
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter name'
                        maxLength='20'
                        value={values.name}
                        onChange = {onChange}
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
                        value={values.email}
                        onChange={onChange}
                        >
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;