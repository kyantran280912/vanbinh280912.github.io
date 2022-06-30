import React from 'react'
import styled from "styled-components";
const SwitchMode = ({ themeToggler }) => {

    return (
        <BoxSwitch >
            <input type='checkbox' onChange={() => themeToggler()} />
            <div className="switch-toggle"></div>
        </BoxSwitch>
    )
}
const BoxSwitch = styled.label`
        width: 55px;
        height: 27px;
        background: ${({ theme }) => theme.bgmode};
        padding: 4px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        input{
            display: none;
        }
        .switch{
        width: 100%;
        height: 100%;
        }
        .switch-toggle{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: white;
        transition: .4s ease;
        }
        input:checked ~ .switch-toggle{
        margin-left: 27px;
        }
`
export default SwitchMode