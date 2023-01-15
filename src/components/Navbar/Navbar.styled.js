import styled from "styled-components";

const MainNavbar = styled.div`
display:flex;
border-top: 1px solid;
border-color: rgba(236,238,243);
width: 279px;
height: 65px;
`;

const ButtonTitle = styled.div`
display: flex;
color: #838690;
padding-top: 42px;
font-size: 11px;
font-weight: 400;
width: auto;
`;

const Contacts = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 93px;
height: 51px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.85 10.5a3.85 3.85 0 1 1-7.7 0 3.85 3.85 0 0 1 7.7 0ZM22.85 12.5a2.85 2.85 0 1 1-5.7 0 2.85 2.85 0 0 1 5.7 0Z' stroke='%23363637' stroke-width='1.3'/%3E%3Cpath d='M10 14.5c-7.344 0-8.912 8-5.05 8h9.772c3.97 0 2.606-8-4.722-8Z' stroke='%23363637' stroke-width='1.3'/%3E%3Cpath d='M17 21h6.5c2.903 0 2.5-5.5-3.5-5.5-3 0-4 1.5-4 1.5' stroke='%23363637' stroke-width='1.3'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position-y: 12px;
background-position-x: 33px;
cursor: pointer;
`;

const UserChats = styled.div`
display: flex;    
align-items: center;
justify-content: center;
width: 93px;
height: 51px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.435 4.1c-2.865 0-3.944.306-5.02.88A5.997 5.997 0 0 0 4.92 7.477c-.575 1.075-.881 2.155-.881 5.02v11.158a1.1 1.1 0 0 0 1.844.81L8.78 21.8c.202-.185.277-.242.369-.296a.954.954 0 0 1 .289-.113c.104-.022.198-.031.472-.031h7.142c1.654 0 2.936-.307 4.011-.882a5.997 5.997 0 0 0 2.495-2.495c.576-1.075.882-2.357.882-4.011v-2.084c0-2.137-.306-3.338-.882-4.413a5.997 5.997 0 0 0-2.495-2.495c-1.075-.575-2.276-.882-4.413-.882h-4.214Zm-5.51 21.497A2.64 2.64 0 0 1 2.5 23.654V12.495c0-2.85.277-4.276 1.063-5.746A7.537 7.537 0 0 1 6.69 3.623c1.47-.786 2.895-1.064 5.746-1.064h4.214c2.25 0 3.74.315 5.14 1.064a7.536 7.536 0 0 1 3.126 3.126c.749 1.4 1.064 2.89 1.064 5.14v2.084c0 1.854-.346 3.396-1.064 4.738a7.537 7.537 0 0 1-3.126 3.126c-1.342.718-2.884 1.064-4.738 1.064H9.91c-.041.006-1.035.905-2.983 2.696Zm2.007-10.972a1.524 1.524 0 1 0 0-3.049 1.524 1.524 0 0 0 0 3.049Zm5.08 0a1.524 1.524 0 1 0 0-3.049 1.524 1.524 0 0 0 0 3.049Zm5.081 0a1.524 1.524 0 1 0 0-3.049 1.524 1.524 0 0 0 0 3.049Z' fill='%23B7BCC9'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position-y: 12px;
background-position-x: 33px;
cursor: pointer;
`;

const Settings = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 93px;
height: 51px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.96 14.504s1.216-.13 1.478 1.198' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.96 14.497s1.216.13 1.478-1.198M24.29 14.504s-1.215-.13-1.477 1.198' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24.29 14.497s-1.215.13-1.477-1.198M5.345 14.504h-2.22m22 0h-2.052 2.052ZM5.324 19.585s.988-.72 1.878.3' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.32 19.58s1.118-.496.68-1.777M22.93 9.42s-1.118.495-.68 1.776' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.926 9.415s-.988.72-1.878-.3M6.537 18.886 4.6 20.004m19.054-11-1.693.977 1.693-.977ZM9.046 23.305s.495-1.118 1.776-.68' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.04 23.302s.72-.987-.3-1.878M19.21 5.7s-.72.987.3 1.878' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.205 5.695s-.496 1.118-1.777.68M9.73 22.118l-1.102 1.91m11-19.053-1.005 1.74 1.005-1.74ZM14.129 24.665s-.13-1.216 1.198-1.477' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.122 24.665s.13-1.216-1.199-1.477M14.129 4.336s-.13 1.215 1.198 1.477' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.122 4.336s.13 1.215-1.199 1.477M14.129 23.3v2.2m0-22v1.979V3.5ZM19.21 23.302s-.72-.987.3-1.878' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.205 23.305s-.496-1.118-1.777-.68M9.046 5.695s.495 1.118 1.776.68' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.04 5.7s.72.987-.3 1.878M18.52 22.108l1.108 1.918m-11-19.053.973 1.685-.973-1.685ZM22.93 19.58s-1.118-.496-.68-1.777' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.926 19.585s-.988-.72-1.878.3M5.324 9.415s.988.72 1.878-.3' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.32 9.42s1.118.495.68 1.776M21.842 18.953l1.812 1.045M4.6 8.998l1.933 1.116L4.6 8.998Z' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath clip-rule='evenodd' d='M14.125 5.734c4.84 0 8.77 3.93 8.77 8.77s-3.93 8.769-8.77 8.769-8.769-3.93-8.769-8.77 3.93-8.769 8.77-8.769Z' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m17.975 15.633 4.58 1.289M7.925 20.702l3.387-3.34M13.182 10.604l-1.174-4.612' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath clip-rule='evenodd' d='M14.125 10.492a4.014 4.014 0 0 1 4.012 4.011 4.014 4.014 0 0 1-4.012 4.012 4.013 4.013 0 0 1-4.011-4.011 4.013 4.013 0 0 1 4.011-4.012Z' stroke='%237E848F' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position-y: 12px;
background-position-x: 33px;
cursor: pointer;
`;

export {
    MainNavbar,
    ButtonTitle,
    Contacts,
    UserChats,
    Settings,
  };
