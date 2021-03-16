import React from 'react';

const showDate = (props) => {

    let newDate = null;
    if (props.show) {
        const date = props.date;
        newDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    }
    return (
        <div>
            <h1>{newDate} </h1>
        </div>
    );

}

export default showDate;