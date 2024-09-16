import React from 'react';
import '../styles/Header.css'
import useCustomMove from '../hooks/useCustomMove';
import { GiPaperBoat } from "react-icons/gi";
import styled from 'styled-components';

const StyledIcon = styled(GiPaperBoat)`
    font-size: 70px;
    margin-right: 15px;
`;

function Header() {

    const { moveToPath } = useCustomMove();

    return (
        <header>
            <StyledIcon />
            <div className="title" onClick={() => moveToPath('/articles')}>종이배</div> 
        </header>
    );
}

export default Header;