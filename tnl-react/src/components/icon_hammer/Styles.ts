import styled from 'styled-components';
import icon_hammer from '../../assets/HammerIcon.jpg';

const Icon_hammer = styled.div`
    margin-top: 28px;
    width: 10vw;
    height: 10vw;
    border: 0px solid black;

    background-image: url(${icon_hammer});
    background-size: cover; //pra preencher no elemento 
    // ou background-size: contain; para caber no elemento

`;

export default Icon_hammer;
