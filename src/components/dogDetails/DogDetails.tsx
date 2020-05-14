import React, {useState} from 'react';

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
      <button onClick={props.onBark}>Bark!</button>
      <p>Scolding counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Scold!</button>
    </div>
  );
}

export default DogDetailsView;