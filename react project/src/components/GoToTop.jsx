import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const GoToTop = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const ListenToScroll = () => {
        let heightToHidden = 250;
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled > heightToHidden) {
            document.querySelector('.go-to-top').style.display = 'flex';
        } else if (scrolled <= heightToHidden) {
            document.querySelector('.go-to-top').style.display = 'none';
    };
}
       

    useEffect(() => {
        window.addEventListener('scroll', ListenToScroll);
        return () => {
            window.removeEventListener('scroll', ListenToScroll);
        };
    }, []);
  return (
  <Wrapper>

  <div className='go-to-top' onClick={goToTop}>
    <FaArrowUp className='top-btn--icon' />
        </div>;  
    
    </Wrapper>
  );
}
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
.go-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #2b20bc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;
    }
    .go-to-top:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    @media (max-width: 768px) {
        .go-to-top {
            width: 2.5rem;  
            height: 2.5rem;
            font-size: 1.2rem;
        }
        .go-to-top:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
        };   
    
    `;


export default GoToTop;