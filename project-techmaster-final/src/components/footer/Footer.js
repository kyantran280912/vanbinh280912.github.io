import { Icon } from "@iconify/react";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/image/logo.png";

const Footer = () => {
    const data = [
        [
            'Blog', 'Thông báo','Tuyển dụng','Tuyên bố rủi ro'
        ], [
            'Express', 'Thông báo','Tuyển dụng','Tuyên bố rủi ro'
        ], [
            'Blog', 'Thông báo','Tuyển dụng','Tuyên bố rủi ro'
        ], [
            'Blog', 'Thông báo','Tuyển dụng','Tuyên bố rủi ro'
        ]
    ]
  const result = useLocation().pathname.includes('/auth')

  return (
    <>
        {
            !result && <StyleFooter>
        <div className="container">
        <ListFooter data={data}/>
      </div>
    </StyleFooter>
        }
    </>
  );
};
const ListFooter = ({data}) => {
  return (
    <StyleListFooter>
      <ColumnFooter>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="list-social">
          <Icon icon="akar-icons:facebook-fill"></Icon>
          <Icon icon="ant-design:instagram-filled"></Icon>
          <Icon icon="akar-icons:twitter-fill"></Icon>
          <Icon icon="foundation:social-youtube"></Icon>
          <Icon icon="akar-icons:linkedin-box-fill"></Icon>
          <Icon icon="akar-icons:telegram-fill"></Icon>
        </div>
      </ColumnFooter>
      <ColumnFooter>
        <div className="title">Về chúng tôi</div>
        <ul>
            <li>Blog</li>
            <li>Thông báo</li>
            <li>Tuyên bố rủi ro</li>
            <li>Tuyển dụng</li>
        </ul>
      </ColumnFooter>
      <ColumnFooter>
        <div className="title">Dịch vụ</div>
        <ul>
            <li>Express</li>
            <li>Giao dịch P2P</li>
            <li>Chương trình VIP</li>
            <li>Dịch vụ</li>
            <li>Tổ chức</li>
        </ul>
      </ColumnFooter>
      <ColumnFooter>
        <div className="title">Hỗ trợ</div>
        <ul>
            <li>Phản hồi</li>
            <li>Hướng dẫn</li>
            <li>Gửi yêu cầu</li>
            <li>API</li>
        </ul>
      </ColumnFooter>
      <ColumnFooter>
        <div className="title">Sản phẩm</div>
        <ul>
            <li>Giao Dịch</li>
            <li>Phái sinh</li>
            <li>Earn</li>
            <li>NFT</li>
            <li>Tổ chức từ thiện</li>
        </ul>
      </ColumnFooter>
    </StyleListFooter>
  );
};
const ColumnFooter = styled.div`
    margin: 0 auto;
    .title{
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.pri};
    }
    ul{
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        li{
            cursor: pointer;
            :hover{
                color: ${({ theme }) => theme.pri};
            }
        }
    }
`;
const StyleListFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
  .logo {
    width: 100px;
  }
  .list-social{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:  12px;
    margin-top: 12px;
    svg{
        font-size: 26px;
        :hover{
            color: ${({ theme }) => theme.pri};
            cursor: pointer;
        }
    }
  }
`;
const StyleFooter = styled.div`
  background: ${({ theme }) => theme.bg};
  margin-top: 100px;
  

  .container {
    max-width: 1440px;
    padding: 34px 15px;
    margin: 0 auto;
  }
`;
export default Footer;
