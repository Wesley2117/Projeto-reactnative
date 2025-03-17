import { render } from '@testing-library/react-native';
import App from '../../App'

it("test exemplo", () => {

    expect(1).toBe(1);
})

it("Test render App componet", () => {
    render(<App/>)
})