import styled from 'styled-components';

const Tnl_nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color: rgb(6,225,10);
    height: 80px;
    overflow: hidden;
    border-top: solid black 2px;        


        & > img{
            width: 3.5vw;
            height: 7vh;
            cursor: pointer;
            user-select: none;
            padding: 1vh 2.4vh;
            margin: 1.2vh;
            transition: 0.1s ease-in-out;

            &:hover{
                transform: scale(1.1);
                background-color: #06FF0A; 
                box-shadow: 0px 0px 10px 0px black ;
                border-radius: 50px;

            };

            &:active{
                transition: 0ms;
                transform: scale(0.9);
            };
        };
`;




export  default Tnl_nav;