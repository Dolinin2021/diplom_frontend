// Компонент-валидатор пароля

const vpassword = value => {
  let pattern = new RegExp(/^(?=.*[A-Za-z0-9!@#$%^&*(),.=+-]$)[A-Za-z][A-Za-z\d=.,!@#$%^&*()=+_-]{5,256}$/g);
  let valid = (pattern.test(value));
  if (value.length < 6 || !valid) {
    return (
      <div className='alert alert-danger' role='alert'>
        Пароль — не менее 6 символов: как минимум одна заглавная буква, одна цифра и один специальный символ.
      </div>
    );
  }
};

export default vpassword;
