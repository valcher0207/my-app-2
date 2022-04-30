import styled from "styled-components";
import img from '../img/stars-bg.jpg'
import image from '../img/star-wars-bg.jpg'

export const Container = styled.div`
    width: 100%;
`

export const Title = styled.div`
    position: absolute;
    margin: 0 auto;
    padding-top: 10%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 40px;
`

export const Identity = styled.div`
    position: absolute;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 25px;
`

export const Bg = styled.div`
    background-image: url(${image});
    height: 100vh;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Text = styled.div`
    text-align: center;
    color: white;
`

export const Bg2 = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.5)), url(${img});
    height: auto;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`