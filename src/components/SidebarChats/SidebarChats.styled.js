import styled from "styled-components";

const Chats = styled.div`
display: flex;
height: 775px;
border: none;
`;

const RecentChat = styled.button`
display: flex;
border: 0;
background-color: #21d86a;
height:72px;
width: 279px;

&:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

const AvatarBox = styled.div`
display:flex;
margin-top: 9px;
height: 52px;
width: 52px;
border-radius: 50% ;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.055.717c.312-.895 1.578-.895 1.89 0l2.588 7.448a1 1 0 0 0 .924.671l7.884.161c.948.02 1.339 1.224.583 1.797l-6.283 4.763a1 1 0 0 0-.353 1.087l2.284 7.547c.274.907-.75 1.652-1.529 1.11l-6.472-4.503a1 1 0 0 0-1.142 0L6.957 25.3c-.778.542-1.803-.203-1.528-1.11l2.283-7.547a1 1 0 0 0-.353-1.087l-6.283-4.763C.32 10.22.71 9.016 1.659 8.997l7.883-.16a1 1 0 0 0 .925-.672L13.055.717Z' fill='%23363637'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position: 12px;
background-color: #38ed80;
`;

const RecentChatTittle = styled.div`
display: flex;
margin-left: 9px;
padding-top: 9px;
color: white;
font-size: 15px;
`;

const RecentChatSubtitle = styled.div`
display: flex;
font-size: 13px;
margin-top: 30px;
color: white;
`;

const RecentChatDate = styled.div`
display: flex;
font-size: 12px;
padding-top: 10px;
padding-left: 40px;
color: white;
`;


export {
    Chats,
    RecentChat,
    AvatarBox,
    RecentChatTittle,
    RecentChatSubtitle,
    RecentChatDate,
  };