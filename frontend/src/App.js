// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import {Home} from './components/Home.js';
import { Navbar } from './components/Navbar.js';
import { SideBar } from './components/SideBar.js';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  return (
    <>
    <Wrapper>
      <FlexCol>
        <Navbar/>
        <FlexRow>
          <SideBar/>
          <HomeWrapper>
            <Home/>
          </HomeWrapper>
        </FlexRow>
      </FlexCol>
    </Wrapper>
    {/* <Wrapper>
      <Navbar/>
      <FlexRow>
        <SideBar/>
        <Home/>
      </FlexRow>
      </Wrapper> */}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E5ECF3;
  width:100%;`

const FlexRow = styled.div`
  display:flex;
  flex-direction: row;
`
const FlexCol = styled.div`
  display:flex;
  flex-direction:column;
`
const HomeWrapper  = styled.div`
  border-radius:10px;
  width:100%;
  // border:5px solid #E5ECF3;
`


export default App;
