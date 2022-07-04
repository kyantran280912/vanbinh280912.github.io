import { Icon } from '@iconify/react';
import React, { useRef } from 'react'
import styled from "styled-components";
import { SmootHorizonalScolling } from '../../utils/utilsSlider';


const Slider = ({datasilder}) => {
    const sliderRef = useRef()
    const itemRef = useRef()
    const handelScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmootHorizonalScolling(sliderRef.current, 250, 
                itemRef.current.clientWidth * 2,
                 sliderRef.current.scrollLeft )
        }
    }
    const handelScrollLeft = () => {
        
        if (sliderRef.current.scrollLeft > 0) {
            SmootHorizonalScolling(sliderRef.current, 250, 
                -itemRef.current.clientWidth * 2,
                 sliderRef.current.scrollLeft )
        }
    }
    const OnDragStart = (e) => { 

    }
    const OnDragEnd = (e) => { 
        
    }
    const OnDragEnter = (e) => { 
        
    }
  return (
        <ContainerSlider draggable='false'>
            <ListSlider datasilder={datasilder} ref={sliderRef} draggable='true'
            onDragStart={OnDragStart} onDragEnd={OnDragEnd} onDragEnter={OnDragEnter} 
            
            >
                {
                    datasilder.map((item,index)=> {
                        return (
                            <div key={index} className="item" ref={itemRef} draggable='false'>
                                <img src={item.img} alt="" draggable='false' />
                                <div className="text">
                                    <div className="title">{item.title}</div>
                                    <div className="note">{item.note}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </ListSlider>
            <div className="btn-icon">
                <div className="prev" onClick={handelScrollLeft}>
                    <Icon icon='akar-icons:chevron-down' ></Icon>
                </div>
                <div className="next" onClick={handelScrollRight}>
                <Icon icon='akar-icons:chevron-down' ></Icon>
                </div>
            </div>
        </ContainerSlider>
  )
}
const ContainerSlider = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .prev, .next{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.pri};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg{
            color: ${({ theme }) => theme.bg1};
        }
        :hover{
            background: ${({ theme }) => theme.textpri};
        }
    }
    .prev{
            left: -50px;
            svg{
                transform: rotate(90deg);
            }
        }
        .next{
            right: -50px;
            svg{
                transform: rotate(270deg);
            }
        }
`
const ListSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.datasilder.length}, 450px);
    gap: 0 24px;
    width: 100%;
     transition: all .3s linear;
     user-select: none;
     overflow-y: hidden;
     overflow-x: auto;
     overflow: hidden;
     scroll-behavior: smooth;
     img{
            width: 100%;
            height: auto;
            transition: all 0.2s ease;
        }
    .item{
        position: relative;
        /* width: calc(((100% + 24px) / 3) - 24px); */
        border-radius: 16px ;
        height: 256px;
        overflow: hidden;
        transition: all 0.3s linear;
        cursor: pointer;
        .text{
            height: 98px;
            padding: 13px 24px 0;
            background: ${({ theme }) => theme.bginput};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
           .title{
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            color: ${({ theme }) => theme.text};
           }
           .note{
            font-size: 14px;
            line-height: 22px;
            color: ${({ theme }) => theme.textnote};
           }
        }
        :hover{
            img{
                transform: scale(1.1);
            }
        }
    }
`
export default Slider