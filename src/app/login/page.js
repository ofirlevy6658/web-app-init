'use client'
import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import Colors from '@/styles/Colors.js'

const Login = () => {
    const {handleSubmit, register} = useForm()

    const onSubmit = () => {
        // TODO: AUTH
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    <label>Email</label>
                    <FormInput {...register('email')}></FormInput>
                    <label>Password</label>
                    <FormInput {...register('password')}></FormInput>
                    <Submit type="submit" value="Join Us"></Submit>
                </FormContainer>
            </form>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Submit = styled.input`
    border-radius: 16px;
    padding: 10px;
    margin: 10px;
    background-color: #89cff0;
`
const FormInput = styled.input`
    height: 40px;
    border-radius: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
`
const FormLabel = styled.div``
