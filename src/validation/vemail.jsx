import { isEmail } from 'validator';

// Компонент-валидатор email

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        Это недействительный адрес электронной почты.
      </div>
    );
  }
};

export default vemail;
