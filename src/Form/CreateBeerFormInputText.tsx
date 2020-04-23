import React, {useState} from 'react';

interface Props{
    label: string
}

function CreateBeerFormInputText(props: Props) {
    const [text, setText] = useState("");
    return (
        <div>
            <label>
                {props.label}
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
            </label>
        </div>
    );
}

export default CreateBeerFormInputText;