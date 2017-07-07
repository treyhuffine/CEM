import React from 'react';

className = 'component';

const Component = () => {
    return (
        <div className={ className }>
            <div className={ `${className}__element-1` }>
                Hello
            </div>
            <div className={ `${className}__element-2` }>
                Word
            </div>
        </div>
    );
};

export default Component;
