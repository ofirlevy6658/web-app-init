'use client'
import React from 'react'
import styled from 'styled-components'
import Texts from '@/styles/Texts'

const FormField = ({label, register, errors, overrideLabel}) => {
    const error = errors?.[label]

    return (
        <Container>
            <FormLabel>{overrideLabel ?? label}</FormLabel>
            <FormInput {...register(label)} />
            {error && <ErrorMessage>{error?.message}</ErrorMessage>}
        </Container>
    )
}

export default FormField

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
`
const FormInput = styled.input`
    display: flex;
    padding: 5px;
    font-size: 18px;
    color: #696969;
`
const FormLabel = styled(Texts.Description)`
    display: flex;
`
const ErrorMessage = styled.div`
    display: flex;
    color: red;
`
