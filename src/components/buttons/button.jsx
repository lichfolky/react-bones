import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";


const Button = ({ variant, size, children }) => {

    let sizesMap = {
        small: {
            "--padding": "6px 14px",
            "--fontSize": "16px",
            "--lineHeight": "19px",
            "--borderRadius": "2px"
        },
        medium: {
            "--padding": "14px 22px",
            "--fontSize": "18px",
            "--lineHeight": "21px",
            "--borderRadius": "2px"
        },
        large: {
            "--padding": "18px 34px",
            "--fontSize": "21px",
            "--lineHeight": "25px",
            "--borderRadius": "4px"
        }
    };

    let Component;
    if (variant === "outline") {
        Component = ButtonOutline;
    } else {
        if (variant === "ghost") {
            Component = ButtonGhost;
        }
        else {
            Component = ButtonFill;
        }
    }

    return (<Component style={sizesMap[size]}>{children}</Component>);
};

const ButtonBase = styled.button`
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: -0.02em;
    border: none;
    padding: var(--padding);
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    border-radius: var(--borderRadius);
    color: ${COLORS.white};
    outline-color: ${COLORS.white};
    border: 2px solid ${COLORS.primary};

    &:focus{
        outline-color: ${COLORS.primary};
        outline-offset: 4px;
    }

`;

const ButtonFill = styled(ButtonBase)`
    background-color: ${COLORS.primary};
    &:hover{
        background-color: ${COLORS.primaryLight};
    }
`;

const ButtonOutline = styled(ButtonBase)`
    background-color: ${COLORS.white};
    border: 2px solid ${COLORS.primary};
    color: ${COLORS.primary};

    &:hover{
        background-color: ${COLORS.offwhite};
    }


`;

const ButtonGhost = styled(ButtonBase)`
    background-color: transparent;
    border: 2px solid transparent;
    color: ${COLORS.gray};

    &:hover{
        color: ${COLORS.black};
        background-color: ${COLORS.transparentGray15};
    }

    &:focus{
        outline-color: ${COLORS.gray};
    }
`;

export default Button;