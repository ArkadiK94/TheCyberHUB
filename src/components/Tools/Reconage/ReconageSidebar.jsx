import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GiTridentShield } from "react-icons/gi";
import { FaSearch, FaFileAlt } from "react-icons/fa";
import styled from "styled-components";
import { FiTarget } from "react-icons/fi";

const ReconageSidebarContainer = styled.div`
    width: 250px;
    background-color: #0e0e0e;
    color: #ecf0f1;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 5px rgb(0 0 0 / 10%);
`;

const SidebarTitle = styled.div`
    font-size: 28px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid #2d353e;
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
`;

const SidebarItem = styled(Link)`
    font-size: 18px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    border-radius: 8px;
    color: ${(props) => (props.active ? "#232b30" : "#ecf0f1")};
    background-color: ${(props) => (props.active ? "#2c3e50" : "transparent")};
    transition: all 0.3s ease;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
        background-color: #22272c;
        color: #979ea1;
    }
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;

const ReconageSidebar = () => {
    const location = useLocation();

    return (
        <ReconageSidebarContainer>
            <SidebarTitle>
                <GiTridentShield size={32} />
                Reconage
                <GiTridentShield size={32} />
            </SidebarTitle>
            <SidebarList>
                <SidebarItem
                    to="/dashboard/reconage/targets"
                    active={location.pathname === "/dashboard/reconage/targets"}
                >
                    <IconWrapper>
                        <FiTarget size={20} />
                    </IconWrapper>
                    Targets
                </SidebarItem>
                <SidebarItem to="/dashboard/reconage/scans" active={location.pathname === "/dashboard/reconage/scans"}>
                    <IconWrapper>
                        <FaSearch size={20} />
                    </IconWrapper>
                    Scans
                </SidebarItem>
                <SidebarItem
                    to="/dashboard/reconage/report"
                    active={location.pathname === "/dashboard/reconage/report"}
                >
                    <IconWrapper>
                        <FaFileAlt size={20} />
                    </IconWrapper>
                    Report
                </SidebarItem>
            </SidebarList>
        </ReconageSidebarContainer>
    );
};

export default ReconageSidebar;
