import React from 'react'
import styled from "styled-components";
import ButtonSeeMore from '../../components/button/ButtonSeeMore';
import { Icon } from '@iconify/react';
import NavListActive from '../../components/navactive/NavListActive';
import Slider from '../../components/slider/Slider';
import img1 from '../../assets/image/sliderhome1.png'
import img2 from '../../assets/image/sliderhome2.png'
import img3 from '../../assets/image/sliderhome3.png'
import img4 from '../../assets/image/sliderhome4.png'
import img5 from '../../assets/image/sliderhome5.png'
import img6 from '../../assets/image/sliderhome6.png'
import img7 from '../../assets/image/sliderhome7.png'
import img8 from '../../assets/image/sliderhome8.png'
import img9 from '../../assets/image/sliderhome9.png'


const ListCoinTop = () => {
   
    
    return (
        <SectionListCoin>
            <div className="container">
                <div className="title">
                    <h2>Nắm Bắt Cơ Hội Giao Dịch</h2>
                </div>
                <div className="btn-section">
                  <NavListActive  navlistactive={datanavlistactive}/>
                    <ButtonSeeMore >Xem thêm</ButtonSeeMore>
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
                <Slider datasilder={datasilder}/>
                
            </div>
        </SectionListCoin>
    )
}
const datasilder = [
    {
        img: img1,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img2,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img3,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img4,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img5,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img6,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img7,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img8,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
    {
        img: img9,
        title: 'OBX/USDT Hiện đã sẵn sàng',
        note: 'Giao dịch để chia sẻ tổng thưởng 2.500.000 OBX! Từ 19:00 ngày 30/6/2022 đến 19:00 ngày 6/7/2022.'
    },
   
]
const datanavlistactive = [
    'Top đầu' , 'Listing mới' , 'Hot Coin', 'Hot Phái sinh'
]
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
    margin-bottom: 40px;
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