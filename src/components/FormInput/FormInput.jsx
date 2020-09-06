import React from 'react';

function FormInput(props) {
    return (
        <div className="input-group input-group-lg pb-1">

            <div className="input-group-prepend">

                <span className="input-group-text">

                    <props.icon />

                </span>

            </div>

            <input value={props.value} onChange={e => { (props.setter)(e.target.value) }} type={props.type} className="form-control fix-rounded-right" placeholder={props.placeholder} required />

            <div className="invalid-feedback">

                {props.error}

            </div>

        </div>
    );
}

export default FormInput;