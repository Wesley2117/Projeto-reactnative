import { render } from '@testing-library/react-native'
import App from '../../App'

it("test exemplo", () => {

    const num1 = 40;
    const num2 = 20;
    const sum = num1 + num2;

    expect(1).toBe(1);
    expect(sum).toBe(60)
    
})

it("Test render App component", () => {
    render(<App></App>)
})

const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ];
  
  test('a lista de compras tem leite nela', () => {
    expect(shoppingList).toContain('leite');
    expect(new Set(shoppingList)).toContain('leite');
  });