import React from 'react';

function FormInput(props) {
    return (
        <div className="input-group input-group-lg pb-1">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <props.icon />
                </span>
            </div>
            <input type="text" className="form-control fix-rounded-right" placeholder={props.placeholder} required />
            <div className="invalid-feedback">
                {props.error}
            </div>
        </div>
    );
}

export default FormInput;