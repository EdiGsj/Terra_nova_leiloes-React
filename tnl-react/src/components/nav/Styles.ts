import styled from 'styled-components';


const Tnl_nav = styled.nav`
    display: flex;
    justify-content: space-around;

    & > div {

        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;

        width: 3vw;
        height: 3vh;

        color: white;
        background-color: green;
        user-select: none;
        cursor: pointer;
        transition: 0.1s ease-in-out;

        &:hover{
            transform: scale(1.5);
        };

        &:active{
            transition: 0ms;
            width: 2.5vw;
            height: 2.5vh;
            font-size: 2vmin;
            background-color: grey;
            margin: 13.5px;
        };
    };
`;

export default Tnl_nav