import styled from 'styled-components';

const Div_overflow = styled.div`
    overflow: scroll;
    overflow-x: inherit;
    width: 600px;
    height: 500px;
    padding: 15px;
    background-color: #181717;
    color: white;
    border-radius: 1.5%;
    box-shadow: 0px 0px 90px 10px green;

    &::-webkit-scrollbar{
        width: 5px;
        border-radius: 5% ;
        background: inherit;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 50px;
    }
`;

export default Div_overflow