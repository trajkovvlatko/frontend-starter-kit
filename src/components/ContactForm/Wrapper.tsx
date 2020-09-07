import React from 'react';
import './Wrapper.scss';
import Form from './Form';
import {useRequest} from 'hooks/useRequest';

type IForm = {
  [x: string]: any;
};

function Wrapper() {
  const {data, sendRequest} = useRequest();
  const url = `${process.env.REACT_APP_HOST}/data.json`;

  const onSubmit = async (values: IForm) => {
    const formValues = new FormData();
    formValues.append('name', values.name);
    formValues.append('message', values.message);
    await sendRequest(url, 'POST', null, formValues);
  };

  return (
    <div>
      <h2>Contact form</h2>
      {data.error && <div>An error occured.</div>}
      {data.loading && <div>Please wait...</div>}
      {data.results?.success && <div>Successfully submitted.</div>}
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default Wrapper;
