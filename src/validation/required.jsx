// Компонент-валидатор поля

const required = value => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Это поле обязательно к заполнению!
      </div>
    );
  }
};

export default required;
