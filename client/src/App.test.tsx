import App from './App';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

describe('App Component', () => {
  test('renders react app', () => {
    const app = renderer.create(<App />);
    expect(app).not.toBe(null);
  });
  test('Should have loaders spinning on render', () => {
    render(<App />);
    const spinners = screen.getAllByTestId('loader');
    expect(spinners.length).toBe(2);
  });
});
