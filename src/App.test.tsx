// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';

const mockStore = configureStore([]);
const store = mockStore({
  drawer: {
    activeForm: 'Customers'
  },
  home: {
    firstName: '',
    lastName: '',
  }
})

describe("App Test", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )
  
  // test case 1 - the App component Exist
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  })

})
