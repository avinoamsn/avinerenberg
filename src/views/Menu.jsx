import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'
import { fade } from '../styles/animations'

const Nav = styled.ul`
  ${tw`p-0 text-left flex`}
`

const Menu = () => {
  const initialState = {
    projectsVisibility: false,
    projectsWidth: 0,
  }
  const [state, setstate] = useState(initialState)
  const projectsRef = useRef(null)
  const getWidth = ref => ref.current.getBoundingClientRect().width
  const slideDecide = () => (state.projectsVisibility ? slideToAnimation : slideFromAnimation)
  const leftOffset = state.projectsVisibility ? `${state.projectsWidth}px` : '3rem'

  const endState = css`
    visibility: ${state.projectsVisibility ? `visible` : `hidden`};
  `

  const slideTo = keyframes`
    from { left: 3rem }
    to { left: ${leftOffset} }
  `

  const slideFrom = keyframes`
  from { left: 170px }
  to { left: 3rem }
`

  const slideToAnimation = css`
    ${slideTo} 0.25s ease-in-out;
  `

  const slideFromAnimation = css`
    ${slideFrom} 0.25s ease-in-out;
  `

  const Link = styled.a`
    ${tw`flex items-center relative`};
    animation: ${props => (props.slide ? slideDecide : null)};
  `

  Link.propTypes = {
    slide: PropTypes.bool,
  }

  Link.defaultProps = {
    slide: false,
  }

  const LinkText = styled.span`
    ${tw`text-3xl lg:text-5xl font-sans text-white absolute`};
    color: ${state.projectsVisibility ? `rgba(255,255,255,1)` : `rgba(255,255,255,0)`};
    ${endState};
    ${fade};
  `
  // visibility: ${state.projectsVisibility ? `visible` : `hidden`};

  return (
    <Nav>
      <Link
        href="#projects"
        onMouseEnter={() =>
          setstate({
            projectsVisibility: true,
            projectsWidth: getWidth(projectsRef),
          })
        }
        onMouseLeave={() => {
          setstate({ projectsWidth: '3rem' })
          setTimeout(() => setstate({ projectsVisibility: false }), 500)
        }}
      >
        <SVG
          style={{ fade }}
          icon="triangleFat"
          width={12}
          stroke={state.projectsVisibility ? colors.transparent : colors.white}
          left="0"
          position=""
        />

        <LinkText ref={projectsRef}>Projects</LinkText>
      </Link>

      <Link slide style={{ left: `${leftOffset}` }} href="#projects">
        <SVG icon="triangleFat" width={12} stroke={colors.white} position="" />
      </Link>
    </Nav>
  )
}

export default Menu
