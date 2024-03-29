import { render } from '@testing-library/react';

import PublicHeader from './public-header';

describe('PublicHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicHeader />);
    expect(baseElement).toBeTruthy();
  });
});
