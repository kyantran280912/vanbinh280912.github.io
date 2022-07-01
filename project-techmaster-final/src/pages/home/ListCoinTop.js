import React from 'react'
import styled from "styled-components";
import ButtonSeeMore from '../../components/button/ButtonSeeMore';
import { Icon } from '@iconify/react';
const ListCoinTop = () => {
    return (
        <SectionListCoin>
            <div className="container">
                <div className="title">
                    <h2>Nắm Bắt Cơ Hội Giao Dịch</h2>
                </div>
                <div className="btn-section">
                    <ul>
                        <li className='active'>Top đầu</li>
                        <li>Listing mới</li>
                        <li>Hot Coin</li>
                        <li>Hot Phái sinh</li>
                    </ul>
                    <ButtonSeeMore>Xem thêm</ButtonSeeMore>
                </div>
                <ListCoin>
                    <div className="coin-item">
                        <Icon icon='cryptocurrency:btc' className='coin'></Icon>
                        <div className="name">BTC/USDT</div>
                        <div className="price">$19217</div>
                        <div className="percent">+1.52%</div>
                        <ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
                    </div>
                    <div className="coin-item">
                        <Icon icon='cryptocurrency:btc' className='coin'></Icon>
                        <div className="name">BTC/USDT</div>
                        <div className="price">$19217</div>
                        <div className="percent">+1.52%</div>
                        <ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
                    </div>
                    <div className="coin-item">
                        <Icon icon='cryptocurrency:btc' className='coin'></Icon>
                        <div className="name">BTC/USDT</div>
                        <div className="price">$19217</div>
                        <div className="percent">+1.52%</div>
                        <ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
                    </div>
                    <div className="coin-item">
                        <Icon icon='cryptocurrency:btc' className='coin'></Icon>
                        <div className="name">BTC/USDT</div>
                        <div className="price">$19217</div>
                        <div className="percent">+1.52%</div>
                        <ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
                    </div>
                    <div className="coin-item">
                        <Icon icon='cryptocurrency:btc' className='coin'></Icon>
                        <div className="name">BTC/USDT</div>
                        <div className="price">$19217</div>
                        <div className="percent">+1.52%</div>
                        <ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
                    </div>
                </ListCoin>
            </div>
        </SectionListCoin>
    )
}
const SectionListCoin = styled.section`
    width: 100%;
    .container{
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 15px;
    }
    .title{
        max-width: 600px;
    }
    h2{
        margin-top: 80px;
        margin-bottom: 38px;
    }
    .btn-section{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    ul{
        display: flex;
        align-items: center;
        gap: 0 64px;
        li{
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            padding: 4px 0;
            color: ${({ theme }) => theme.textnote};
            :hover{
                color: ${({ theme }) => theme.pri};
            }
        }
        li.active{
            color: ${({ theme }) => theme.pri};
            position: relative;
            ::before{
                content:'';
                position: absolute;
                top: 100%;
                width: 100%;
                height: 1px;
                background: ${({ theme }) => theme.pri};
            }
        }
    }
    @media screen and (max-width: 1440px) {
        .container{
            max-width: 1200px;
        }
    }
    
`
const ListCoin = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 24px;
    margin-top: 40px;
    .coin-item{
        background: ${({ theme }) => theme.bg1};
        border-radius: 16px;
        padding: 40px 24px;
        text-align: center;
        .coin{
            color: ${({ theme }) => theme.pri};
            font-size: 40px;
            margin: 0 auto;
            margin-bottom: 16px;
        }
        .name{
            font-size: 24px;
            font-weight: 600;
            line-height: 24px;
            color: ${({ theme }) => theme.text};
            margin-bottom: 16px;
        }
        .price{
            color: ${({ theme }) => theme.textnote};
            font-size: 18px;
            font-weight: 300;
        }
        .percent{
            color: #42b856;
            font-size: 32px;
            font-weight: 600;
            line-height: 32px;
            margin-top: 16px;
        }
        button{
            margin: 0 auto;
            margin-top: 40px;
        }
    }

`
export default ListCoinTop