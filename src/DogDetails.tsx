import React from 'react';

interface Props{
  name: string,
  photo: string,
  onBark: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function DogDetailsView(props: Props) {
  return (
    <div>
      <img src={props.photo} alt="Here is a pomsky."/>
      <h1>{props.name}</h1>
      <button onClick={props.onBark}>Bark!</button>
    </div>
  );
}

export default DogDetailsView;