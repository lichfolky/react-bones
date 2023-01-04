import * as React from 'react';
import styled from 'styled-components/macro';

/*
https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html
*/

export const Breadcrumbs = ({ children }) => {
    return (
        <nav aria-label="Breadcrumb">
            <BreadcrumbList>{children}</BreadcrumbList>
        </nav>
    );
};

export const Crumb = ({ href, isCurrentPage, children }) => {
    return (<CrumbItem><a href={href} aria-current={isCurrentPage ? 'page' : undefined}
    >{children}</a></CrumbItem>);
};


const BreadcrumbList = styled.ol`
    margin:0;
    padding:0;
    list-style: none;
`;

const CrumbItem = styled.li`

    display: inline-block;

    &:not(:last-of-type)::after{
        content: "";
        display: inline-block;
        transform: rotate(15deg);
        border-right: 0.1em solid currentcolor;
        height: 0.8em;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        opacity: 0.25;
    }
 
    & a{
        color: inherit;
    }

    &:last-of-type a{
        text-decoration: none;
    }
`;

