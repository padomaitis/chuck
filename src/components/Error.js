import React  from 'react';

const Error = (props) => {
 return (
    <div className='alert alert-danger' >
        <strong>{props.error}</strong> 
    </div>
 );
};

export default Error;