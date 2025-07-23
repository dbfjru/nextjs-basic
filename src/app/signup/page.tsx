'use client'
import React from 'react';
import {useForm} from "react-hook-form";

type Inputs = {
    userId?: string;
    password?: string;
    checkPassword?: string;
    name?: string;
    address?: string;
}


const SignupPage = () => {
    const {register, handleSubmit, watch, reset, getValues, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            userId: '',
            password: '',
            checkPassword: '',
            name: '',
            address: '',
        }
    })

    const onSubmit = (data: Inputs) => {
        console.log('submitData--->', data)
    }

    return (
        <div className={"bg-cyan-800 w-[50%] rounded-xl px-4 pt-8 pb-16 transform -translate-y-[10rem]"}>
            <h1 className={"text-2xl text-center mb-4 font-extrabold"}>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={"flex flex-col items-center gap-4 bg-cyan-600 rounded-md p-4"}>
                <div className="flex flex-col gap-2 w-[80%]">
                    <label className={"text-lg font-bold"} htmlFor={"userId"}>
                        아이디
                    </label>
                    <div>
                        <input
                            id={"userId"}
                            type="text"
                            className={"w-[80%] border border-gray-300 rounded-md p-2"}
                            {...register("userId", {
                                required: {
                                    value: true,
                                    message: "필수"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "10글자 이하로 작성하세요"
                                }
                            })}
                        />
                        {
                            errors.userId && <span className={"ml-2 text-red-700"}>{errors.userId.message}</span>
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <label className={"text-lg font-bold"} htmlFor={"password"}>
                        패스워드
                    </label>
                    <div>
                        <input
                            id={"password"}
                            type="password"
                            className={"w-[80%] border border-gray-300 rounded-md p-2"}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "필수"
                                }
                            })}
                        />
                        {
                            errors.password && <span className={"ml-2 text-red-700"}>{errors.password.message}</span>
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <label className={"text-lg font-bold"} htmlFor={"checkPassword"}>
                        패스워드 확인
                    </label>
                    <div>
                        <input
                            id={"checkPassword"}
                            type="password"
                            className={"w-[80%] border border-gray-300 rounded-md p-2"}
                            {...register("checkPassword", {
                                required: {
                                    value: true,
                                    message: "필수"
                                }
                            })}
                        />
                        {
                            errors.checkPassword &&
                            <span className={"ml-2 text-red-700"}>{errors.checkPassword.message}</span>
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <label className={"text-lg font-bold"} htmlFor={"name"}>
                        이름
                    </label>
                    <div>
                        <input
                            id={"name"}
                            type="text"
                            className={"w-[80%] border border-gray-300 rounded-md p-2"}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "필수"
                                }
                            })}
                        />
                        {
                            errors.name && <span className={"ml-2 text-red-700"}>{errors.name.message}</span>
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <label className={"text-lg font-bold"} htmlFor={"address"}>
                        주소
                    </label>
                    <div>
                        <input
                            id={"address"}
                            type="text"
                            className={"w-[80%] border border-gray-300 rounded-md p-2"}
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "필수"
                                }
                            })}
                        />
                        {
                            errors.address && <span className={"ml-2 text-red-700"}>{errors.address.message}</span>
                        }
                    </div>
                </div>

                <button
                    type="submit"
                    className={"p-2.5 mt-[1rem] bg-blue-600 rounded-md cursor-pointer text-xl font-bold"}
                >
                    가입하기
                </button>
            </form>
        </div>
    );
};

export default SignupPage;