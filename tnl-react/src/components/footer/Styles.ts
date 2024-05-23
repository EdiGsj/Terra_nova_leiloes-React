import styled from 'styled-components';

const Tnl_footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10vh;
    margin-bottom: 0px;
    background-color: black;
    opacity: 95%;
    color: white;
    height: 10vh;
    font-size: 3vmin;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        
        & > h5{
            margin-left: 1vw;
            margin-right: 1vw;
            font-family: 'Courier New', Courier, monospace;

            & > a{
                color: white;
                text-decoration: none;
                transition: 0ms;

                &:hover{
                    text-decoration: underline;
                };
            };
        };

        & > img{
            width: 3vw;
            height: 6vh;
            background: none;
            margin: 0px 10px 0px 10px ;
        };


    };
`;

export default Tnl_footer