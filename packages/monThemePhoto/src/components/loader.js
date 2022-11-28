import React from 'react';
import { keyframes, styled} from 'frontity';

const Loader = ()=>{
  return (
    <DivLoader>
      <h3>Page en chargement...</h3>
      <p>Charles Cantin Photographe</p>
      <TheLoader></TheLoader>
    </DivLoader>
  )
}
const wave = keyframes`
0% {  box-shadow:
  0 0 0 0px rgba(0, 0,0, 1),
  0 0 0 20px rgba(0, 0,0, 0.2),
  0 0 0 40px rgba(0, 0,0, 0.6),
  0 0 0 60px rgba(0, 0,0, 0.4),
  0 0 0 80px rgba(0, 0,0, 0.2)
  }
  100% {  box-shadow:
    0 0 0 80px rgba(255, 255,255, 0),
    0 0 0 60px rgba(255, 255,255, 0.2),
    0 0 0 40px rgba(255, 255,255, 0.4),
    0 0 0 20px rgba(255, 255,255, 0.6),
    0 0 0 0px rgba(255, 255,255, 1)
  }
`

const TheLoader = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000000;
  animation: ${wave} 1s ease-in infinite;
`
const DivLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default Loader

  
