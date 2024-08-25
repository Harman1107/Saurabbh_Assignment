import styled from "styled-components"

export const Navbar = () => {
  return (<Wrapper>
    <p>Logo</p>
    <FlexRow>
    <LoginButton>Login</LoginButton>
    <SignUpButton>Join Now</SignUpButton>
    </FlexRow>
  </Wrapper>)
}

const Wrapper = styled.div`
  height:60px;
  background-color: #FFFFFF;
  border-top: 4px solid #6947BF;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 10px;`

const FlexRow = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`

const LoginButton = styled.button`
  border:2px solid #EAF0F2;
  background-color:#FFFFFF;
  border-radius:20px;
  color:#5B6170;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:600;
  padding: 4px 12px 4px 12px;
  margin:10px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;
  `

  const SignUpButton = styled.button`
  border:0px;
  background-color:#6947BF;
  border-radius:20px;
  color:#FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:600;
  padding: 4px 12px 4px 12px;
  margin:10px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;
  `