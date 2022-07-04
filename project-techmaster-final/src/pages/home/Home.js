import React from 'react'
import styled from "styled-components";
import BannerHome from './BannerHome';
import FeatureHome from './FeatureHome';
import ListCoinTop from './ListCoinTop';



const Home = () => {
  return (
    <Main>
      <BannerHome></BannerHome>
      <ListCoinTop/>
      <FeatureHome/>
    </Main>
  )
}
const Main = styled.div`

`
export default Home