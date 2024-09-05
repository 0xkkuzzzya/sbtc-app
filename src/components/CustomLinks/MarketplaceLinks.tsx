import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    text-decoration: none;
    outline: none;
`

interface Props {
    to: string;
    children: ReactNode;
}


export const MarketplaceLink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? '#fff' :  '#888',
            transition: '.2s ease-in-out',
        }}
        >
            {children}
        </LinkBLock>
    )
}