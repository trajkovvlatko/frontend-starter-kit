import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IProps {
  onSubmit: SubmitHandler<Record<string, any>>;
}

function Form(props: IProps) {
  const {register, handleSubmit, errors} = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input
        name='name'
        className='name'
        defaultValue=''
        ref={register({required: true})}
      />
      {errors.name && <span>Name is required</span>}

      <input
        name='message'
        className='message'
        ref={register({required: true})}
      />
      {errors.message && <span>Message is required</span>}

      <input type='submit' />
    </form>
  );
}

export default Form;
