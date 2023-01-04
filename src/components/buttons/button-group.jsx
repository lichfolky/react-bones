import * as React from 'react';
import styled from 'styled-components/macro';

import IconButton from './icon-button';

import { Map, Save, ShoppingCart } from 'react-feather';

function ButtonGroup() {
    return (
        <Wrapper>
            <IconButton isCurrent icon={<Map />}>
                Navigation
            </IconButton>
            <IconButton icon={<Save />}>
                Save Route
            </IconButton>
            <IconButton icon={<ShoppingCart />}>
                View Cart
            </IconButton>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export default ButtonGroup;