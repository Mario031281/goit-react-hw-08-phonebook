import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormRegister, LabelRegister } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister>
        Username
        <input type="text" name="name" required minLength={2} maxLength={30} />
      </LabelRegister>
      <LabelRegister>
        Email
        <input type="email" name="email" required />
      </LabelRegister>
      <LabelRegister>
        Password
        <input type="password" name="password" required minLength={8} />
      </LabelRegister>
      <button type="submit">Register</button>
    </FormRegister>
  );
};
