'use client'
import React from 'react'
import styled from 'styled-components'
import {Controller} from 'react-hook-form'
import Texts from '@/styles/Texts'

const FormField = ({label, control, errors, overrideLabel}) => {
    const error = errors?.[label]
    return (
        <Container>
            <FormLabel>{overrideLabel ?? label}</FormLabel>
            <Controller
                name={label}
                control={control}
                render={({field}) => <FormInput {...field} />}
            />
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
