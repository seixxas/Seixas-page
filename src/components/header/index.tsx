
import { Header, Title } from "../../styles/HeaderStyle";

function HeaderDispley() {
  return (
    <>
      <Header>
        <Title>
          <a href="">Seixas</a>
        </Title>
        <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="https://github.com/seixxas" target="blank">Projects </a></li>
              <li><a href="https://www.linkedin.com/in/guilherme-seixas-133819201/" target="blank">Social </a></li>
          </ul>
        </nav>
      </Header>
    
      </>
  );
}

export default HeaderDispley;
