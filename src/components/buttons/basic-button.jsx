import * as React from 'react';
import styled from 'styled-components/macro';

const BasicButton = ({ color, onClick, children }) => {
    return (
        <ColoredButton onClick={onClick} color={color}>
            {children}
        </ColoredButton>
    );
};

const ColoredButton = styled.button`
    padding: 8px 24px;
    width: fit-content;

    &:hover{
        color: red;
        color: ${props => props.color};
        background-color: gray;
    }
  `;

export default BasicButton;