import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ContactForm from './Contact';

describe('ContactForm', () => {
  test('renders form fields and buttons', () => {
    const container = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });

  test('updates form data when fields are changed', () => {
    const { getByLabelText, container } = render(<ContactForm />);

    fireEvent.change(getByLabelText(/nome/i), {
      target: { value: 'John Due' },
    });
    fireEvent.change(getByLabelText(/assunto/i), {
      target: { value: 'Teste de formulário' },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByLabelText(/mensagem/i), {
      target: { value: 'Olá, gostaria de fazer um teste de formulário.' },
    });

    expect(container).toMatchSnapshot();
  });
});
