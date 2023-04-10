'use client'
import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/Login'

const Login = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    )
}

export default Login

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
