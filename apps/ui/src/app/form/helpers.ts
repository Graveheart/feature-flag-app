import { GridProps } from '@chakra-ui/react';

export const getGridPropsForType = (type: string): GridProps => {
  switch (type) {
    case 'single': {
      return {
        gap: 4,
        templateRows: 'repeat(2, 1fr)',
        templateColumns: 'repeat(3, 1fr)',
        autoFlow: 'column',
      };
    }
    case 'grouped': {
      return {
        gap: 0,
        autoFlow: 'row',
      };
    }
    case 'bordered': {
      return {
        gap: 0,
        autoFlow: 'row',
      };
    }
    default:
      return {};
  }
};
