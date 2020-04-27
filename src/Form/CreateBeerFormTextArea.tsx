import React from 'react';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function CreateBeerForm(props: Props) {
    return (
        <div>
            <label> 
                {props.label}
                <textarea value={props.value} onChange={props.onChange} />
            </label>
        </div>
    );
}

export default CreateBeerForm;