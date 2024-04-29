import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/henriquecardosoo.png" alt="foto fo usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Henrique Cardoso</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
