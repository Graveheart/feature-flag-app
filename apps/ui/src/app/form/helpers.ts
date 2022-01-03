import { GridProps } from '@chakra-ui/react';

export const getGridPropsForType = (type: string): GridProps => {
  switch (type) {
    case 'single': {
      return {
        gap: 4,
        templateRows: 'repeat(2, 1fr)',
        templateColumns: 'repeat(3, 1fr)',
        autoFlow: 'column'
      };
    }
    case 'grouped': {
      return {
        gap: 0,
        autoFlow: 'row',
        bg: 'gray.900',
        borderRadius: 4
      };
    }
    case 'bordered': {
      return {
        gap: 1,
        p: 1,
        autoFlow: 'row',
        bg: 'gray.700',
        borderRadius: 4
      };
    }
    default:
      return {};
  }
};
