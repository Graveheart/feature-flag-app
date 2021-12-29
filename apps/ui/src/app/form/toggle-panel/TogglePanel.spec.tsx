import { render } from '@testing-library/react';

import TogglePanel from './TogglePanel';

describe('TogglePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TogglePanel />);
    expect(baseElement).toBeTruthy();
  });
});
