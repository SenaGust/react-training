import React from 'react';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CreateBeerFormInputText(props: Props) {
    return (
        <div>
            <label>
                {props.label}
                <input type="text" value={props.value} onChange={props.onChange} />
            </label>
        </div>
    );
}

export default CreateBeerFormInputText;