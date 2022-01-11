import { ColorModeProvider, CSSReset } from '@chakra-ui/react';
import App from '../src/app/app';
import '../src/assets/styles/index.css';
import theme from '../src/app/app'
export const parameters = {chakra: {theme}};

export const decorators = [
  (Story) => (
    <App>
        <ColorModeProvider options={{
            initialColorMode: 'dark',
            useSystemColorMode: true
        }}>
            <CSSReset />
            <Story />
        </ColorModeProvider>
    </App>
  ),
];