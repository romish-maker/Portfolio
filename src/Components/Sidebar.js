import React from 'react';
import styled from 'styled-components';
import Navigation from "./Navigation";

const Sidebar = () => {
    return (
        <SidebarStyled>
            <Navigation/>
        </SidebarStyled>
    );
};

const SidebarStyled = styled.div`
    width: 270px;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
`;


export default Sidebar;