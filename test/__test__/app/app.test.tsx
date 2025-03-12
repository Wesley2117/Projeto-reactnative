import { render, fireEvent, screen } from '@testing-library/react-native';
import App from '../../App';

describe("App Component", () => {
  it("should render the app component correctly", () => {
    render(<App />);

    //Verifica se o titulo "App contador" está presente
    expect(screen.getByText("App contador")).toBeTruthy();

    // Verifica se o contador inicial é 0
    expect(screen.getByTestId("counter").props.children).toBe(0);
  });

  it("should decrement counter when the '-' vutton is pressed", () => {
    render(<App />);

    // Encontra o botão de decremento
    const decrementButton = screen.getByText("-");

    //Simular o clique no botão de decremento
    fireEvent.press(decrementButton);

    //Verificar se o contador foi decrementado para -1
    expect(screen.getByTestId("counter").props.children).toBe(-1);
  });

  it("should increment and decrement counter correctly", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    // Incrementa duas vezes
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    expect(screen.getByTestId("counter").props.children).toBe(2);

    //Decrementando uma vez
    fireEvent.press(decrementButton);
    expect(screen.getByTestId("counter").props.children).toBe(1);

  });

});