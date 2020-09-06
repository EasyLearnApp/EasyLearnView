import React from 'react';

function Copyright() {
    const COPYRIGHT_MESSAGE_DEFAULT = `@SWV Software ${(new Date()).getFullYear()} - Todos os direitos reservados`;

    return (<><hr/><p>{COPYRIGHT_MESSAGE_DEFAULT}</p></>);
}

export default Copyright;