// frontend/src/tests/AdminUsers.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserForm from '../components/UserForm';

const mockStore = configureStore([]);

test('renders UserForm and submits', () => {
  const store = mockStore({ auth: { role: 'admin' } });
  render(
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
  fireEvent.click(screen.getByText('Add User'));
  expect(screen.getByPlaceholderText('Username').value).toBe('');
});