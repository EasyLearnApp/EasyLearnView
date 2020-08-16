import React from 'react';

function Card(props) {
    return (
        <div className="col-sm-6">
            <div className="card card-width">
                <div className="card-body">
                    <h5 className="card-title">{props.label}</h5>

                    <p className="card-text">Gerencie os {(props.label).toLowerCase()} de uma forma fácil, cadastre, edite e pesquise com poucos cliques.</p>

                    <a href={props.url} className="btn btn-primary">Gerenciar {props.label}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;