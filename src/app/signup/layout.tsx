import React from 'react';

const SignupLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={"bg-amber-50 flex justify-center"}>
            {children}
        </div>
    );
};

export default SignupLayout;