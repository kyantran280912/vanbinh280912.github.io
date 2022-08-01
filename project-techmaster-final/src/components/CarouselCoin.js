import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CarouselCoinAPI } from '../config/api';
import styled, { css, keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {  useScroll } from '../utils/scroll';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CarouselCoin = () => {
    const [coins, setcoins] = useState([])
    const FetchCoin = async () => {
        const { data } = await axios.get(CarouselCoinAPI())
        setcoins(data)
    }
    useEffect(() => {
        FetchCoin()
    }, []);
    const { showhide } = useScroll()
    console.log(showhide);
    const ItemCoin = () => {
        return (
            <>
                {
                    coins?.map(coin => {
                        let profit = coin.market_cap_change_percentage_24h >= 0

                        return (
                            <Link to={`/coins/${coin.id}`}>
                                <StyledCoin >
                                    <div className="img">
                                        <img src={coin.image} alt={coin.id} />
                                    </div>
                                    <div className="name">
                                        {
                                            coin.name
                                        }
                                        <span className='id-coin'>({coin.symbol})</span>
                                    </div>
                                    <div className="price">
                                        ${numberWithCommas(coin?.current_price.toFixed(2))}
                                    </div>
                                    <SymbolCoin profit={profit}>
                                        {
                                            profit ? <Icon icon='akar-icons:arrow-up'></Icon> : <Icon icon='akar-icons:arrow-down'></Icon>
                                        }

                                        {coin?.price_change_percentage_24h?.toFixed(2)}%

                                    </SymbolCoin>
                                </StyledCoin>
                            </Link>
                        )
                    })
                }
            </>
        )
    }
    return (
        <>
            {
                !showhide && <Section>
                    <Carousel>
                        <div className="carousel">
                            <ItemCoin></ItemCoin>
                        </div>
                        <div className="carousel sub">
                            <ItemCoin></ItemCoin>
                        </div>
                    </Carousel>
                </Section>
            }
        </>
    )
}
const SymbolCoin = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: orange;
    ${props => props.profit && css`
    color: green;
        `};
`
const StyledCoin = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    
    .img{
        width: 25px;
    }
    .id-coin{
        text-transform: uppercase;
    }
    .price{
        font-size: 13px;
    }
    .name{
        font-weight: 600;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
`
const ani = keyframes`
    0%{
        transform: translate(0,0);
    }
    100%{
        transform: translate(-100%,0);
    }
`
const Carousel = styled.div`
    display: flex;
    padding: 7px;
    gap: 18px;
    width: 1000vw;
    height: 60px;
    overflow: hidden;
    background: ${({ theme }) => theme.pri};
    .carousel{
        display: flex;
        align-items: center;
        
        gap: 18px;
        animation: ${ani} 180s infinite linear;
    }

`
const Section = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 9999;
    a{
        color: white;
    }
`

export default CarouselCoin