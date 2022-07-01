import { Icon } from '@iconify/react';
import React from 'react'
import styled from "styled-components";


const DropdownApp = () => {
  return (
    <BoxDropdown>
      <div className="left">
        <div className="box-menu">
          <ul className="menu-app">
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='ri:vip-crown-2-fill'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Chương trình VIP
                </div>
                <div className="text-note">
                  Độc quyền tiếp cận chiết khấu phí và hơn thế nữa
                </div>
              </div>
            </li>
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='icon-park-outline:exchange-four'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Chương trình giới thiệu
                </div>
                <div className="text-note">
                  Xây dựng coin-nection cùng chiến thắng
                </div>
              </div>
            </li>
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='ic:outline-currency-exchange'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Chương trình đối tác
                </div>
                <div className="text-note">
                  Chuyển ảnh hưởng thành giàu có
                </div>
              </div>
            </li>
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='fluent:reward-16-filled'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Trung tâm phần thưởng
                </div>
                <div className="text-note">
                  Hoàn thành các nhiệm vụ đơn giản để nhận thưởng
                </div>
              </div>
            </li>
            
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='map:insurance-agency'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Chương trình môi giới
                </div>
                <div className="text-note">
                  Nâng tầm doanh nghiệp của bạn
                </div>
              </div>
            </li>
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='file-icons:service-fabric'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Dịch vụ tổ chức
                </div>
                <div className="text-note">
                  Hưởng chiết khấu phí, giải pháp đầu tư và hơn thế nữa
                </div>
              </div>
            </li>
            <li className="item-app">
              <div className="box-icon">
                <Icon icon='icon-park-outline:ranking'></Icon>
              </div>
              <div className="box-text">
                <div className="text-title">
                  Bảng thành tích
                </div>
                <div className="text-note">
                  Nhà giao dịch Crypto hàng đầu thế giới
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div className="right">

      </div>
    </BoxDropdown>
  )
}
const BoxDropdown = styled.div`
    padding: 28px 24px;
    background: ${({ theme }) => theme.bg2};
    height: 442px;
    width: 800px;
    .left{
      width: 80%;
      display: inline-flex;
      .menu-app{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px 20px;
      }
      .item-app{
        display: flex;
        align-items: center;
        gap: 0 10px;
        padding: 5px 50px 5px 10px;
        border-radius: 10px;
        transition: .2s ease;
        svg{
          color: ${({ theme }) => theme.pri};
          font-size: 20px;
          
        }
        .text-title{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: ${({ theme }) => theme.text};
          transition: .2s ease;
          
        }
        .text-note{ 
          font-size:  12px;
          line-height: 18px;
          max-width: 176px;
          color: ${({ theme }) => theme.textnote};
        }
        :hover{
          background: ${({ theme }) => theme.bg};
          .text-title{
            color: ${({ theme }) => theme.pri};
          }
        }
      }
    }
    .right{
      width: 20%;
    }
`
export default DropdownApp