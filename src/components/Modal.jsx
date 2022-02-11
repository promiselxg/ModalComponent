import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from "react-icons/md";
import styled from 'styled-components';

const Background = styled.div`
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  position:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
`

const ModalWrapper = styled.div`
  width:800px;
  height:500px;
  box-shadow:0 5px 16px rgba(0,0,0,0.2);
  background:#fff;
  color:#000;
  display:grid;
  grid-template-columns:1fr 1fr;
  position:relative;
  z-index:10;
  border-radius:10px;

  @media screen and (max-width:768px){
    width:90%;
    margin:0px auto;
    height:auto;
     display:grid;
    grid-template-columns:1fr;
  }
`
const ModalImg = styled.img`
  width:100%;
  height:100%;
  border-radius:10px 0 0 10px;
  background:#000;

  @media screen and (max-width:768px){
    border-radius:10px 10px 0 0;
  }
`
const ModalContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  line-height:1.8;
  color:#141414;

  p{
    margin-bottom:1rem;
  }

  button{
    padding:10px 24px;
    background:#141414;
    color:#fff;
    border:none;
  }

  @media screen and (max-width:768px){
    padding-bottom:50px;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position:absolute;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;
  z-index:10;
`
const Modal = ({showModal,setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config:{
      duration:250
    },
    opacity:showModal ? 1: 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowModal(false)
    }
  }
  return (
    <>
      {showModal && (
        <Background ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src="https://images.unsplash.com/photo-1644486954121-2aec3525fbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image"/>
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton arial-label="CLose modal" onClick={() => setShowModal(prev => !prev)}/>
          </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  )
}

export default Modal