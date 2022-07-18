import React from 'react'
import styled from "styled-components";
import bg from '../../assets/image/Sncx10Dkt8c.jpg'
import Button from '../../components/button/Button';
import InputPrimary from '../../components/input/InputPrimary';
import coin from '../../assets/image/coinbanner.png'
const BannerHome = () => {
    return (
        <SectionBannerHome>
            <Container>
                <div className="left">
                    <div className="text">
                        Mua, giao dịch và nắm giữ hơn 600 đồng tiền mã hóa trên Binance
                    </div>
                    <div className="btn-input-banner">
                        <div className="input">
                            <InputPrimary placeholder='Email/Số điện thoại' />
                        </div>
                        <div className="button">
                            <Button>Hãy bắt đầu</Button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={coin} alt="" />
                </div>
            </Container>
        </SectionBannerHome>
    )
}
const SectionBannerHome = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 800px;
  
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  padding-top: 150px;
  .left{
    max-width: 486px;
    margin-right: 156px;
    .text{
        margin-bottom: 40px;
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        @media screen and (min-width: 768px) {
            font-weight: 600;
            font-size: 56px;
            line-height: 64px;
        }
    }
    .btn-input-banner{
    display: flex;
    gap: 0 16px;
    .input{
        width: 282px;
    }
    .button{
        width: 160px;
        button{
            height: 42px;
        }
    }
  }
  }
  .right{
    max-width: 400px;
   img{
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.pri};
   }
  }

`
export default BannerHome