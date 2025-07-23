'use client'
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

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

    const onSubmit = (data: SubmitHandler<Inputs>) => {
        console.log('submitData--->', data)
    }

    return (
        <div style={{
            maxWidth: '480px',
            margin: '40px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px'
        }} className={"bg-cyan-800"}>
            <h1 style={{textAlign: 'center', marginBottom: '24px'}}>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div>
                    <label htmlFor="userId" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                        아이디
                    </label>
                    <input
                        type="text"
                        style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}
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
                        errors.userId && <span style={{color: 'red'}}>{errors.userId.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="password" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                        패스워드
                    </label>
                    <input
                        id={"password"}
                        type="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "필수"
                            }
                        })}
                    />
                    {
                        errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="password" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                        패스워드 확인
                    </label>
                    <input
                        type="password"
                        {...register("checkPassword", {
                            required: {
                                value: true,
                                message: "필수"
                            }
                        })}
                    />
                    {
                        errors.checkPassword && <span style={{color: 'red'}}>{errors.checkPassword.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="name" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                        이름
                    </label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "필수"
                            }
                        })}
                    />
                    {
                        errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="address" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                        주소
                    </label>
                    <input
                        type="text"
                        {...register("address", {
                            required: {
                                value: true,
                                message: "필수"
                            }
                        })}
                    />
                    {
                        errors.address && <span style={{color: 'red'}}>{errors.address.message}</span>
                    }
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        marginTop: '16px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    가입하기
                </button>
            </form>
        </div>
    );
};

export default SignupPage;