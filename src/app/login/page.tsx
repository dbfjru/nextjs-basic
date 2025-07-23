'use client';

import React from 'react';
import Link from "next/link";

const LoginPage = () => {
    const [loginId, setLoginId] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        alert("Try Login");
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement)
        console.log(formData.get("loginId"));
        console.log(formData.get("password"));
        setLoginId("");
        setPassword("");
    }

    return (
        <div className={"flex flex-col gap-4 items-center p-8 rounded-md bg-cyan-100 text-black"}>
            <h1 className={"text-2xl"}>Welcome Back!</h1>
            <form onSubmit={handleLogin} className={"flex flex-col gap-3 items-end"}>
                <div className={"flex gap-2"}>
                    <label className={"w-[40px] text-center"} htmlFor={"loginId"}>Id</label>
                    <input className={"bg-zinc-300 rounded-md pl-2 pr-2"} id={"loginId"} type="text"
                           value={loginId} placeholder="Login Id" onChange={(e) => setLoginId(e.target.value)}/>
                </div>
                <div className={"flex gap-2"}>
                    <label className={"w-[40px] text-center"} htmlFor={"password"}>PW</label>
                    <input className={"bg-zinc-300 rounded-md pl-2 pr-2"} id={"password"} type="password"
                           value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={"flex gap-2"}>
                    <Link href={"/signup"} className={"bg-amber-400 rounded-md w-[5rem] text-center"}>
                        Sign Up
                    </Link>
                    <button className={"bg-amber-400 rounded-md w-[5rem]"} type="submit" onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;