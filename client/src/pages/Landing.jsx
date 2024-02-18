import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom"
import { Logo } from "../components"

// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;

const Landing = () => {
  return (
    <Wrapper>

      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1><span>code</span> skills</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perferendis reiciendis fuga enim! Quaerat atque porro sunt illum? Suscipit recusandae est nihil neque totam odit harum officiis fugiat laudantium ab!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className="img main-img"/>
      </div>
      {/* <StyledBtn>style btn</StyledBtn> */}

    </Wrapper>
  )
}


export default Landing