import React from 'react';

interface Props{
  name: string,
  photo: string
}

function DogDetailsView(props: Props) {
  return (
    <div>
      <img src={props.photo}/>
      <h1>{props.name}</h1>
      <button> Bark! </button>
    </div>
  );
}

export default DogDetailsView;