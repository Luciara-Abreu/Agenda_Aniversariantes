import styled from 'styled-components'


const WrapButtonAnel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
  `

const StylesButtonAnel = styled.button`
  min-width: 150px;
  min-height: 10px;
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  /*&:before {
  content: '';
  border-radius: 1000px;
  //min-width: calc(150px + 12px);
  //min-height: calc(20px + 12px);
  min-width: none;
  min-height: none;
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}*/

&:hover, &:focus {
  color: #313133;
  transform: translateY(-6px);
}

&:hover::before, &:focus::before {
  opacity: 1;
}

::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 3px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

&::hover::after, &::focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
`

export {
  WrapButtonAnel,
  StylesButtonAnel
}