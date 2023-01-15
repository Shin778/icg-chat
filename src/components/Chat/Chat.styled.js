import styled from "styled-components";


const ImChat = styled.div`
display: flex;
height: 933px;
max-width: 1640px;
flex-direction: column;
`;

const DialogTopbar = styled.div`
display: flex;
max-height: 56px;
max-width: 1624px;
border-bottom: 1px solid;
padding-left: 16px;
border-color: rgba(236,238,243);
`;

const AvatarBoxFavorite = styled.div`
display: flex;
height: 32px;
width: 32px;
margin-top: 12px;
margin-bottom: 11px;
margin-left: 7px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.055.717c.312-.895 1.578-.895 1.89 0l2.588 7.448a1 1 0 0 0 .924.671l7.884.161c.948.02 1.339 1.224.583 1.797l-6.283 4.763a1 1 0 0 0-.353 1.087l2.284 7.547c.274.907-.75 1.652-1.529 1.11l-6.472-4.503a1 1 0 0 0-1.142 0L6.957 25.3c-.778.542-1.803-.203-1.528-1.11l2.283-7.547a1 1 0 0 0-.353-1.087l-6.283-4.763C.32 10.22.71 9.016 1.659 8.997l7.883-.16a1 1 0 0 0 .925-.672L13.055.717Z' fill='%23363637'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-size: 18px;
background-color: white;
background-position: 7px;
border-radius: 50% ;
background-color: #38ed80;
cursor: pointer;
`;

const DialogTitle = styled.div`
display: flex;
margin-top: 20px;
margin-left:8px;
padding-right: 1377px;
height: 30px;
cursor: pointer;
`;

const SearchInChat = styled.div`
display: flex;
margin-top: 17px;
padding-right: 5px;
display: flex;
width: 32px;
height: 32px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle vector-effect='non-scaling-stroke' cx='8.939' cy='8.766' r='5.549' transform='rotate(-45 8.94 8.766)' stroke='%23000' stroke-width='1.3'/%3E%3Crect vector-effect='non-scaling-stroke' x='12.402' y='12.776' width='1.4' height='6.338' rx='.7' transform='rotate(-45 12.402 12.776)' fill='%23000'/%3E%3C/svg%3E");
background-repeat: no-repeat;
cursor: pointer;
`;

const Gallery = styled.div`
display: flex;
margin-top: 15px;
margin-left: 4px;
padding-right: 5px;
display: flex;
width: 32px;
height: 32px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 6a1 1 0 0 1 1-1h5.377l1.37 3.376a1 1 0 0 0 .926.624H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Z' stroke='%23B7BCC9' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9 6h11a2 2 0 0 1 2 2v2.5' stroke='%23B7BCC9' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
background-repeat: no-repeat;
cursor: pointer;
`;

const Tools = styled.div`
display: flex;
margin-top: 18px;
margin-left: 7px;
width: 32px;
height: 32px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='30px' height='30px' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath vector-effect='non-scaling-stroke' d='M17.35 10a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0ZM10 9.5V14' stroke='%23363637' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle vector-effect='non-scaling-stroke' cx='10' cy='7' r='1' fill='%23363637'/%3E%3C/svg%3E");
background-repeat: no-repeat;
cursor: pointer;
`;



export {
    ImChat,
    DialogTopbar,
    AvatarBoxFavorite,
    DialogTitle,
    SearchInChat,
    Gallery,
    Tools,
  };