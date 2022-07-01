import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  nav {
    display: flex;
    align-items: center;
    height: 114px;
    color: var(--primary);

    ul {
      display: flex;
      margin-left: auto;
      font-size: 18px;
    }

    img {
      max-height: 50px;
      cursor: pointer;
    }

    button {
      min-width: 250px;
      margin-left: 0.5rem;
    }

    > a {
      margin-left: auto;
      margin-right: 8px;
    }

    ${media.lessThan('medium')`
      justify-content: space-between;
    `}
  }

  .header-btn-whats-mobile {
    background: var(--primary);
    border: none;
    color: #fff;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    box-shadow: 0px 3.48863px 6.97726px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    margin-right: 1rem;
    animation: whatsappbg 2s ease infinite, pulse 2s infinite;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;

    background-color: #075e54;
    background: linear-gradient(270deg, #25d366, #128c7e, #075e54);
    background-size: 600% 600%;

    @media screen and (min-width: 768px) {
      display: none;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }
    
      70% {
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
    
      100% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }

    @keyframes whatsappbg {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
  }
`

export const NavMob = styled.nav`
  position: fixed;
  background: #fff;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;

  align-items: end;

  ul {
    flex-direction: column;
    text-align: right;
    font-size: 26px;
    padding: 4rem 2rem;
    flex: 1;

    li {
      margin-bottom: 2rem;
    }
  }

  .btn-close {
    width: 100%;
    padding: 1.5rem;
    background: var(--primary_light);
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
`

export const MenuLink = styled.li`
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: 120px;
    `}
  a {
    margin: 1rem;
    padding-bottom: 0.2rem;
    font-weight: 600;

    &:hover {
      border-bottom: 5px solid var(--primary_light);
    }
  }

  ${({ active }) =>
    active &&
    css`
      a {
        border-bottom: 5px solid var(--primary_light);
        color: var(--primary_light);
      }
    `}
`
