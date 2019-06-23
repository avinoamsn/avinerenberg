import tw from 'tailwind.macro'
import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const fadeIn = keyframes`
  from {
    color: rgba(255, 255, 255, 0);
  }
  to {
    color: white;
  }
`

const fadeOut = keyframes`
  from {
    color: white;
  }
  to {
    color: rgba(255, 255, 255, 0);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

const fadeInAnimation = css`
  ${fadeIn} 0.25s linear;
`

const fadeOutAnimation = css`
  ${fadeOut} 0.25s linear;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`

export const fade = css`
  animation: ${fadeOutAnimation};
  &:hover {
    animation: ${fadeInAnimation};
  }
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
