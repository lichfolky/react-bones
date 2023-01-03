import * as React from 'react';
import styled from 'styled-components/macro';

function LoginForm({ handleSubmit }) {
    return (
        <Form id="login-form" onSubmit={handleSubmit}>
            <Label>
                Email:
                <Input
                    type="email"
                    placeholder="me@you.com"
                />
            </Label>
            <Label>
                Password:
                <Input
                    type="password"
                />
            </Label>
            <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
    );
}

const Form = styled.form`
        width: max-content;
        margin: 16px auto;
        border: 1px dotted silver;
        padding: 26px 32px 32px;
        border-radius: 2px;
    `;

const Label = styled.label`
        display: block;
        margin-bottom: 16px;
    `;

const Input = styled.input`
        display: block;
        width: 175px;
        border: 1px solid black;
        border-bottom-width: 2px;
        padding: 6px 8px;
        margin-top: 4px;
        border-radius: 2px 2px 3px 3px;

        &:focus{
            outline: 3px auto blue;
            outline-offset: 2px;
            border-color: transparent;
        }
    `;

const SubmitButton = styled.button`
        display: block;
        margin-top: 40px;
        width: 100%;
        background: black;
        color: white;
        padding: 8px;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 3px;

    &:focus{
        outline: 3px auto blue;
        background: blue;
        outline-offset: 2px;
    }
`;

export default LoginForm;