import React from 'react'

export default function Form(props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return (
        <form className = 'form container' onSubmit = {onSubmit}>
            <div className="form-group inputs">
                <label>Username:
                    <input 
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>
    
                <label>Password:
                    <input 
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
    
                <label>Email:
                    <input 
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>
    
                <label>Terms of Service:
                    <input 
                        name='TOS'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.TOS}
                    />
                </label>
    
            </div>
            <div classname="form-group submit">
                <button disabled={disabled}>submit</button>
    
                <div className='errors'></div>
            </div>
    
        </form>
    )
}

