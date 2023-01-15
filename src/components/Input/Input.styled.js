import styled from "styled-components";

const InputInner = styled.div`
display:flex;
background-color: white;
padding: 10px;
max-height: 52px;
background-color: #f3f5f8;
`;

const InputSubAction = styled.div`
margin-top: 7px;
margin-left: 7px;
display:flex;
height: 32px;
width: 32px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8.25' stroke='%23363637' stroke-width='1.3'/%3E%3Cpath d='M10 14v-4m0-4v4m0 0h4m-4 0H6' stroke='%23363637' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E");
background-repeat: no-repeat;
cursor: pointer;
`;

const InputField = styled.input`
height: 32px;
width: 1514px;
margin-left: 7px;
border-radius: 18px;
padding-left: 18px;
border: 0;
outline: none;
font-size: 16px;
`

const AudioMessageButton = styled.div`
margin-top: 8px;
margin-left: 14px;
display:flex;
height: 32px;
width: 32px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.004 10.283a6.024 6.024 0 0 1-12.008 0M10 18.366v-2.268' stroke='%23363637' stroke-width='1.3' stroke-linecap='round'/%3E%3Crect x='6.566' y='1.634' width='6.776' height='11.293' rx='3.388' stroke='%23363637' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E");
background-repeat: no-repeat;
cursor: pointer;
`

export {
    InputInner,
    InputSubAction,
    InputField,
    AudioMessageButton,
  };