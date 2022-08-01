import React from 'react'
import styled from "styled-components";
import HomeBanner from './HomeBanner';


const Home = () => {
  return (
    <Main>
        <HomeBanner/>
    </Main>
  )
}
const Main = styled.div`
    height: 200vh;
`
export default Home