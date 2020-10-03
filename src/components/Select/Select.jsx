import React from 'react';

function Select(props) {
    return (
        <div className="input-group input-group-lg pb-1">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <props.icon />
                </span>
            </div>

            <select value={props.value} onChange={e => { (props.setter)(e.target.value) }} className="custom-select" required>
                <option hidden>{props.hidden}</option>
                {
                    (props.data).map((value, key) => {
                        return (<option key={key} value={value.value}>{value.label}</option>)
                    })
                }
            </select>

            <div className="invalid-feedback">{props.error}</div>
        </div>
    );
}

export default Select;