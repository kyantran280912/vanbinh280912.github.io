import React from 'react'
import styled from "styled-components";
import BannerHome from './BannerHome';
import ListCoinTop from './ListCoinTop';



const Home = () => {
  return (
    <Main>
      <BannerHome></BannerHome>
      <ListCoinTop/>
    </Main>
  )
}
const Main = styled.div`

`
export default Home