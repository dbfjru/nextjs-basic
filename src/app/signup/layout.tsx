import React from 'react';

const SignupLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={"bg-cyan-100 flex justify-center items-center h-screen"}>
            {children}
        </div>
    );
};

export default SignupLayout;