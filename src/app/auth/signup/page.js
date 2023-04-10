'use client'

import SignUpForm from '@/app/components/auth/Signup'
import React from 'react'
import styled from 'styled-components'

const SignUp = () => {
    return <SignUpForm />
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
