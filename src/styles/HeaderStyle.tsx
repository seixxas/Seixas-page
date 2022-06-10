import styled from "styled-components";

const Title = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 40px;
  font-family: sans-serif;

  a{
      text-decoration: none;
      color: #9d00f8;
     
  } 
  a:hover{
          color: #c272f0;
          transition: 500ms;
      }
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  padding: 30px 150px;
  border: 10px;
  position: relative;
  background-image: linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));

  nav {
    position: absolute;
    right: 0%;
    padding: 0 200px;
}
ul {
    align-items: center;
    display: flex;
    list-style-type: none;
  }
  li {
    padding: 0 20px;
    font-size: 25px;
    
    a{
      font-weight: 500;
      text-decoration: none;
      color: #ece7ec;
      position: relative;
    }
    a:after{
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 0%;
        height: 4px;
        background: #ff3c78;
        transition: .3s;
      }
    a:hover:after{
        width: 100%;
    }
  }
`;




export {Title, Header};