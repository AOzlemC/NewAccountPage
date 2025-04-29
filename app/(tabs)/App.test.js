import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from './App';

// Mocking Alert
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

import { alert as Alert } from 'react-native/Libraries/Alert/Alert';

describe('Create New Account Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows error when fields are empty', async () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Error', 'Please fill in all fields.');
    });
  });
/*
  it('shows error when email is invalid', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Özlem');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Çalışkan');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'invalidemail');
    fireEvent.changeText(getByPlaceholderText('Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Date of Birth (dd/mm/yyyy)'), '01/01/2000');

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Error', 'Please enter a valid email address.');
    });
  });

  it('shows error when password is too short', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Özlem');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Çalışkan');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'ozlem@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '1234'); // short password
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), '1234');
    fireEvent.changeText(getByPlaceholderText('Date of Birth (dd/mm/yyyy)'), '01/01/2000');

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Error', 'Password must be at least 8 characters.');
    });
  });

  it('shows error when passwords do not match', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Özlem');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Çalışkan');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'ozlem@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), '87654321');
    fireEvent.changeText(getByPlaceholderText('Date of Birth (dd/mm/yyyy)'), '01/01/2000');

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Error', 'Passwords do not match.');
    });
  });

  it('shows error when date of birth format is invalid', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Özlem');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Çalışkan');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'ozlem@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Date of Birth (dd/mm/yyyy)'), '2000-01-01'); // invalid format

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Error', 'Invalid date of birth format. (dd/mm/yyyy)');
    });
  });*/
  

  it('shows success message when form is correctly filled', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Özlem');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Çalışkan');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'ozlem@gamil.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), '12345678');
    fireEvent.changeText(getByPlaceholderText('Date of Birth (dd/mm/yyyy)'), '20/02/2003');

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(Alert).toHaveBeenCalledWith('Success', 'Your account has been created!');
    });
  });
});