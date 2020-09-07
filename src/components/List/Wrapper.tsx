import React, {useEffect, useCallback} from 'react';
import {useRequest} from 'hooks/useRequest';
import List from './List';
import './Wrapper.scss';

function Wrapper() {
  const url = `${process.env.REACT_APP_HOST}/data.json`;
  const {data, sendRequest} = useRequest();

  const sendRequestMemo = useCallback(sendRequest, [url]);
  const ref = React.useCallback(
    (url) => {
      sendRequestMemo(url);
    },
    [sendRequestMemo],
  );

  useEffect(() => {
    ref(url);
  }, [ref, url]);

  return (
    <div>
      <h1>Wrapper list</h1>

      {data.results?.length > 0 && <List data={data.results} />}
    </div>
  );
}

export default Wrapper;
