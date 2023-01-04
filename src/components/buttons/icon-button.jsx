import * as React from 'react';
import styled from 'styled-components/macro';

function IconButton({
    icon,
    children,
    isCurrent,
    ...delegated
}) {
    return (
        <Button
            {...delegated}
        >
            <Icon isCurrent={isCurrent}  >
                {icon}
            </Icon>
            {children}
        </Button>
    );
}

const Button = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
  font-size: 0.8rem;
`;


// color: ${props => props.isCurrent === true ? 'deeppink' : 'inherit'}
// color: ${props => props.isCurrent && 'deeppink'}

const Icon = styled.span`
    display: block;
    color: ${props => props.isCurrent ? 'deeppink' : 'inherit'};
 `;

export default IconButton;