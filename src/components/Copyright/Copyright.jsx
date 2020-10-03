import React from 'react';

const __COPYRIGHT_MESSAGE_DEFAULT = `@EasyLearn ${(new Date()).getFullYear()} - Todos os direitos reservados`;

function Copyright() {
    return (<><hr /><p>{__COPYRIGHT_MESSAGE_DEFAULT}</p></>);
}

export default Copyright;