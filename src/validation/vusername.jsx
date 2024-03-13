// Компонент-валидатор имени пользователя

const vusername = value => {
  let pattern = new RegExp(/^([A-Za-z]{1,})+(\d){1,}([a-zA-Z1-9])*$/g);
  let valid = (pattern.test(value));
  if (value.length < 4 || value.length > 20 || !valid) {
    return (
      <div className='alert alert-danger' role='alert'>
        Логин — только латинские буквы и цифры, первый символ — буква, длина от 4 до 20 символов.
      </div>
    );
  }
};

export default vusername;
