import styled from "styled-components";

const ImSidebar = styled.div`
display:flex;
flex-direction: column;
max-width: 279px;
border-right: 1px solid;
border-color: rgba(236,238,243);
`;

const Topbar = styled.div`
display: flex;
max-height: 56px;
width: auto;
`;

const Menu = styled.button`
display: flex;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM14 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM8 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z' fill='%23363637'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-color: white;
background-position: 2px;
height: 24px;
width: 24px;
margin-top: 19px;
border: 0;
cursor: pointer;
margin-left: 10px;
`;

const TopbarTitle = styled.span`
display: flex;
margin-top: 19px;
font-size: 16px;
font-weight: 700;
padding-left: 85px;
padding-right: 76px;
`;

const Write = styled.button`
display: flex;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.333 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.667' stroke='%23363637' stroke-width='1.3'/%3E%3Cpath d='m8.5 16-.65-.026a.65.65 0 0 0 .753.668L8.5 16Zm3.473-.86-.468-.452.468.452Zm-.843.44-.102-.643.102.642ZM21.37 4.056l-.481.437.48-.437Zm-.02 1.367.467.451-.468-.451Zm-2.592-2.682.46.46-.46-.46ZM9.04 12.46l.46.46-.46-.46Zm.11 3.566.101-2.539-1.299-.052-.101 2.539 1.298.052Zm.35-3.106L19.217 3.2l-.92-.919-9.718 9.719.92.919Zm10.224-9.707 1.165 1.281.962-.874-1.165-1.281-.962.874Zm1.158 1.76-9.377 9.715.935.903 9.377-9.716-.935-.902Zm-9.854 9.964-2.63.421.205 1.284 2.63-.421-.205-1.284Zm.477-.249a.85.85 0 0 1-.477.25l.205 1.283a2.15 2.15 0 0 0 1.207-.63l-.935-.903ZM20.89 4.494a.35.35 0 0 1-.007.479l.935.902a1.65 1.65 0 0 0 .034-2.255l-.962.874Zm-1.671-1.293a.35.35 0 0 1 .506.012l.962-.874a1.65 1.65 0 0 0-2.387-.057l.919.92ZM9.251 13.487a.85.85 0 0 1 .248-.567L8.58 12a2.15 2.15 0 0 0-.628 1.435l1.299.052Z' fill='%23363637'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-color: white;
background-position: 2px;
margin-top: 16px;
height: 24px;
width: 24px;
border: 0;
background-color: white;
cursor: pointer;
padding-left: 10px;
`;

const SearchField = styled.input`
display: flex;
height: 30px;
width: 214px;
margin-left:12px;
margin-bottom: 8px;
margin-top: 13px;
padding-left: 38px;
font-size: 15px;
border: 0;
outline: none;
border-radius: 16px;
background-color: #f3f5f8;
background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.92%22%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M0%200H16V16H0z%22%2F%3E%3Cpath%20d%3D%22M6.5%201a5.5%205.5%200%200%201%204.383%208.823l3.896%203.9a.75.75%200%200%201-1.061%201.06l-3.895-3.9A5.5%205.5%200%201%201%206.5%201zm0%201.5a4%204%200%201%200%200%208%204%204%200%200%200%200-8z%22%20fill%3D%22%23818c99%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
background-repeat: no-repeat;
background-position: 15px;
`;


export {
    ImSidebar,
    Topbar,
    Menu,
    TopbarTitle,
    Write,
    SearchField,
  };