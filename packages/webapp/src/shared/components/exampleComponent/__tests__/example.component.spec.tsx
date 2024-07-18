import { render } from '../../../../tests/utils/rendering';
import { ExampleComponent } from '../example.component';

describe('ExampleComponent: Component', () => {
  const Component = () => <ExampleComponent />;

  it('should render without errors', () => {
    render(<Component />);
  });
});