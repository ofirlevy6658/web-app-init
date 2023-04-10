'use client'
import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import styled from 'styled-components'
import Colors from '@/styles/Colors.js'

import FormField from '../components/form/FormField'
import Link from 'next/link'

const registerSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z.string().min(8, 'Password must be at least 8 characters'),
})

const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = (formData) => {
        console.log('formData', formData)
    }

    return (
        <Container>
            <AuthForm onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>SignUp</FormHeader>
                <FormField label="email" register={register} errors={errors} />
                <FormField label="password" register={register} errors={errors} />
                <FormField
                    label="confirm_password"
                    register={register}
                    errors={errors}
                    overrideLabel="Confirm password"
                />
                <BottomContainer>
                    <Submit type="submit" value="Join Us" />
                </BottomContainer>
                <SignUpContainer>
                    <SignUpTitle>Already have an account?</SignUpTitle>
                    <SignUpButton href="/login">Login</SignUpButton>
                </SignUpContainer>
            </AuthForm>
        </Container>
    )
}

export default SignUp

const Container = styled.div`
    display: flex;
    width: 40%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: white;
`

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
