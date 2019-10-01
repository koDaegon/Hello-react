import React from 'react';

const WithClass = (WrappedComponet , className) => {
    return props => (
        <div className= {className}>
            <WrappedComponet {...props}/>
        </div>
    );
};

export default WithClass;