import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import styled from 'styled-components';
import FormContainer from './form/form-container/FormContainer';
import manageFeatureFormConfig from './manage-features-form.json';

const StyledApp = styled.div`
  font-family: Industry;
  text-transform: uppercase;
  background: #000;
  min-height: 100vh;

  main {
    padding: 16px 0;
  }

  h2 {
    font-size: 20px;
    margin: 32px 0 8px 0;
  }
`;

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

export const theme = extendTheme({ config });

export function App({
  children = <FormContainer {...manageFeatureFormConfig} />
}) {
  return (
    <StyledApp>
      <ChakraProvider theme={theme}>
        <main>
          <Container maxW="container.xl">{children}</Container>
        </main>
      </ChakraProvider>
    </StyledApp>
  );
}

export default App;
