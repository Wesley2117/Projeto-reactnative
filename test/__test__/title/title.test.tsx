import { render } from '@testing-library/react-native';
import { Title } from '../../src/Title';

describe("Test Title component", () => {
    
    it("should render title correctly", () => {
        const {getByText} = render(<Title title="sujeito" />)

        expect(getByText("sujeito")).toBeTruthy();
    })
})