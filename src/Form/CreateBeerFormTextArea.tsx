import React, {useState} from 'react';

interface Props{
    label: string
}

function CreateBeerForm(props: Props) {
    const [text, setText] = useState("");
    return (
        <div>
            <label> 
                {props.label}
                <textarea value={text} onChange={e => setText(e.target.value)} />
            </label>
        </div>
    );
}

export default CreateBeerForm;