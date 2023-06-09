'use client'
import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import styled from 'styled-components'
import Colors from '@/styles/Colors.js'
import FormField from '../form/FormField'
import Link from 'next/link'
import {FaFacebook, FaGithub, FaGoogle, FaApple} from 'react-icons/fa'
// import Texts from '@/styles/Texts'

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
})

const LoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (formData) => {
        // TODO: AUTH
        console.log('form submitted', formData)
    }

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>Login</FormHeader>
            <FormField label="email" register={register} errors={errors} />
            <FormField label="password" register={register} errors={errors} />
            <BottomContainer>
                <Submit type="submit" value="Enter" />
            </BottomContainer>
            <SocialContainer>
                <FacebookIcon size={35} />
                <GithubIcon size={35} />
                <GoogleIcon size={35} />
                <AppleIcon size={35} />
            </SocialContainer>
            <SignUpContainer>
                <SignUpTitle>Dont have an account yet?</SignUpTitle>
                <SignUpButton href="/auth/signup">SignUp</SignUpButton>
            </SignUpContainer>
        </AuthForm>
    )
}

export default LoginForm

const AuthForm = styled.form`
    display: flex;
    height: 500px;
    width: 400px;
    padding: 30px;
    flex-direction: column;
    text-align: flex-start;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: ${Colors.GREY};
`
const FormHeader = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 48px;
    margin-bottom: 40px;
    font-weight: 700;
    color: ${Colors.MAIN_BLUE};
`
const Submit = styled.input`
    padding: 10px;
    width: 100%;
    margin: 10px;
    border-radius: 4px;
    border: 0.5px solid grey;
    height: 40px;
    background-color: ${Colors.MAIN_BLUE};
    color: white;
    &:hover {
        color: ${Colors.LIGHT_BLUE};
    }
    transition: color 0.2s ease;
`
const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 1px dashed grey;
`
const SignUpTitle = styled.div``
const SignUpContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
const SignUpButton = styled(Link)`
    &: hover {
        color: ${Colors.MAIN_BLUE};
    }
    transition: color 0.2s ease;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 20px;
`
const FacebookIcon = styled(FaFacebook)`
    &: hover {
        color: #1877f2;
    }
`
const GithubIcon = styled(FaGithub)`
    &: hover {
        color: black;
    }
`
const AppleIcon = styled(FaApple)`
    &: hover {
        color: silver;
    }
`
const GoogleIcon = styled(FaGoogle)`
    &:hover {
        color: green;
    }
`
