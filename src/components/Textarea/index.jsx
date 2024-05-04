import { Container } from './styles';

export function Textarea({ Value, ...rest }) {
  return <Container {...rest}>{Value}</Container>;
}
