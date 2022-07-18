import React from 'react'
import styled from "styled-components";
import TitleSection from '../../components/title/TitleSection';
import Feature1 from '../../assets/image/feature1.jpg'
import Feature2 from '../../assets/image/feature2.jpg'
import Feature3 from '../../assets/image/feature3.jpg'
import Feature4 from '../../assets/image/feature4.jpg'
import Feature5 from '../../assets/image/feature5.jpg'
import Feature6 from '../../assets/image/feature6.jpg'
import ButtonSeeMore from '../.././components/button/ButtonSeeMore'

const FeatureHome = () => {
  return (
    <SectionFeature>
      <div className="container">
      <div className="title">
        <TitleSection>Khám Phá Thế Giới Tiền Điện Tử Với Trọn Bộ Sản Phẩm
        </TitleSection>
      </div>
      <ListFeature>
        <div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Giao Ngay
				</div>
				<div className="note-feature">Mua và bán các crypto hot trên Giao Ngay với mức phí thấp.</div>
				</div>
				<div className="icon-feature"><ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				
				</div>
			</div>
			<div className="right">
				<img src={Feature1} alt="Coin" />
			</div>
		</div>
		<div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Phái Sinh
				</div>
				<div className="note-feature">Nâng tầm giao dịch USDT Vĩnh Viễn, Tương Lai Nghịch Đảo...</div>
				</div>
				<div className="icon-feature">
				<ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				</div>
			</div>
			<div className="right">
				<img src={Feature2} alt="Coin" />
			</div>
		</div>
		<div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Thị Trường NFT
				</div>
				<div className="note-feature">Đa dạng với Hợp đồng Quyền Chọn được ký quỹ bằng stablecoin.</div>
				</div>
				<div className="icon-feature">
				<ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				</div>
			</div>
			<div className="right">
				<img src={Feature3} alt="Coin" />
			</div>
		</div>
		<div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Bybit Earn
				</div>
				<div className="note-feature">Nhận lợi nhuận cao với các sản phẩm staking đa dạng.</div>
				</div>
				<div className="icon-feature">
				<ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				</div>
			</div>
			<div className="right">
				<img src={Feature4} alt="Coin" />
			</div>
		</div>
		<div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Bybit Earn
				</div>
				<div className="note-feature">Nhận lợi nhuận cao với các sản phẩm staking đa dạng.</div>
				</div>
				<div className="icon-feature">
				<ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				</div>
			</div>
			<div className="right">
				<img src={Feature5} alt="Coin" />
			</div>
		</div>
		<div className="feature-item">
			<div className="left">
				<div className="left-top">
				<div className="title-feature">
				Quyền Chọn
				</div>
				<div className="note-feature">Đa dạng với Hợp đồng Quyền Chọn được ký quỹ bằng stablecoin.</div>
				</div>
				<div className="icon-feature">
				<ButtonSeeMore>Xem chi tiết</ButtonSeeMore>
				</div>
			</div>
			<div className="right">
				<img src={Feature6} alt="Coin" />
			</div>
		</div>
      </ListFeature>
      </div>
    </SectionFeature>
  )
}
const SectionFeature = styled.div`
	.title{
		margin-bottom: 40px;
	}
.container{
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (max-width: 1440px){
    max-width: 1200px;
  }
}
`
const ListFeature = styled.div`
	display: grid;
	grid-template-columns: 696px 696px;
	grid-template-rows: 360px 360px 360px;
	gap: 48px;
  .feature-item{
	display: flex;
	align-items: center;
	width: 100%;
	height: 360px;
	background: #fff;
	border-radius: 16px;
	position: relative;
	overflow: hidden;
	padding: 48px 24px 48px 48px;
	cursor: pointer;
	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: .2s ease
	}
	:hover{
		img{
			transform: scale(1.1);
		}
	}
  }
  .left{
	width: 60%;
	height: 100%;
	display: flex;
	justify-content: space-between;	
	align-items: flex-start;
	flex-direction: column;
  }
  .icon-feature{
	margin-top: auto;
  }
  .title-feature{
	color: ${({ theme }) => theme.bg1};
	width: 100%;
	font-weight: 600;
	font-size: 40px;
	margin-bottom: 14px;
  }
  .note-feature{
	color: ${({ theme }) => theme.bginput};
	line-height: 26px;
	font-weight: 400;
	font-size: 18px;
	color: #81858c;
	max-width: 90%;
	
  }
  .right{
	width: 40%;
	height: 100%;
	
  }
`
export default FeatureHome