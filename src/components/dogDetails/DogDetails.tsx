import React, {useState} from 'react';
import {Button} from '@material-ui/core';

interface Props{
  name: string,
  photo: string,
  onBark: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function DogDetailsView(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img src={props.photo} alt="Here is a pomsky."/>
      <h1>{props.name}</h1>
      <Button onClick={props.onBark} variant="contained" color="primary">Bark!</Button>
      <p>Scolding counter: {count}</p>
      <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">Scold!</Button>
    </div>
  );
}

export default DogDetailsView;