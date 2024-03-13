// Компонент-валидатор имени файла

const vfilename = value => {
  let pattern = new RegExp(/^([A-Za-z]){1,}[A-Za-z0-9\d=.,!@#$%^&*()=+_-]{0,}\.[A-Za-z]{1,3}$/g);
  let valid = (pattern.test(value));
  if (!valid) {
    alert('Имя файла должно содержать только латинские буквы, цифры и специальные символы, первый символ — буква.' + '\n'
        + 'Необходимо также указать формат файла.');
    return;
  }
  return valid;
};

export default vfilename;
