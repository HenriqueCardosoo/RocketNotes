import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Details() {
  return (
    //fragmente para devolver um único elemento
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sint natus laborum sed quod, consequatur autem, repellendus esse blanditiis reprehenderit veniam numquam mollitia at obcaecati dolorum cupiditate rerum ea deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos unde, labore porro nesciunt dicta itaque tenetur, id fugiat ullam dolor consequatur dolorem provident repellendus esse! Aliquid quis optio odio dolorum.</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
