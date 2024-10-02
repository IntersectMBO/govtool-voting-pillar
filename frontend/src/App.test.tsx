import { render } from '@testing-library/react';
import App from './App';

test('should render correctly', () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});
