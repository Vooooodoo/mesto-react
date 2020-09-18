import React from 'react';
import Authentication from './Authentication';
import * as mestoAuth from '../mestoAuth';
import { useHistory } from 'react-router-dom';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const history = useHistory();

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    mestoAuth.register(email, password) //* аргументы с переменными состояния в которых значения инпутов формы
      .then((res) => {
        if (res) { //* если форма отправлена успешно, перенаправить пользователя на страницу авторизации
          setMessage({
            message: ''
          });

          history.push('/sign-in');
        } else {
          setMessage({
            message: 'Что-то пошло не так!'
          });
        }
      });
  }

  return (
    <Authentication
      title="Регистрация"
      btnText="Зарегистрироваться"
      subBtnText="Уже зарегистрированы?"
      linkText="Войти"
      linkRoute="/sign-in"
      onSubmitButton={handleSubmit}
      onEmailInput={handleEmailChange}
      onPasswordInput={handlePasswordChange}
    />
  );
}

export default Register;