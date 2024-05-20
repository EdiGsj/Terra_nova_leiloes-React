import styled from 'styled-components';

const Tnl_nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color: rgb(6,225,10);
    height: 80px;
    border-top: solid black 2px;
    box-shadow: inset 0px 0px 10px greenyellow;

    & > div {

        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        margin-top: 10px;
        user-select: none;
        
        width: 6vw;
        height: 6vh;
        border-radius: 50px;
        padding: 9px;


        color: white;
        user-select: none;
        cursor: pointer;
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

        & > img{
            width: 50%;
            height: 100%;
        };
    };
`;




export  default Tnl_nav;