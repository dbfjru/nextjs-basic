import React from 'react';

const LoginLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={"absolute top-2/5 right-1/4"}>
            {children}
        </div>
    );
};

export default LoginLayout;