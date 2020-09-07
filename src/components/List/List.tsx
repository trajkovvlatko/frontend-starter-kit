import React from 'react';
import Row from './Row';
import IRow from './interfaces/IRow';

interface IProps {
  data: IRow[];
}

function List(props: IProps) {
  return (
    <ul>
      {props.data.map((row: IRow) => (
        <Row row={row} key={`row-${row.id}`} />
      ))}
    </ul>
  );
}

export default List;
