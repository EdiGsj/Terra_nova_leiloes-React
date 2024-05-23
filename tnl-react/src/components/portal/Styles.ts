import styled from 'styled-components';

const Tnl_portal = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 8.5vh;
    background-color: white;
    user-select: none;

    & > img {
        width: 5.5vw;
        height: 10.5vh;
        position: absolute;
        margin: 0;
        overflow: hidden;
        animation: go-back 45s infinite linear ;
    };

    @keyframes go-back {
        0% {transform: translateX(-7.5vw) scaleX(-1)};
        100% {transform: translateX(100vw) scaleX(-1)};
    };
`;

export default Tnl_portal