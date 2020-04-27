import React from 'react';

interface Props{
    label: string,
    value: boolean,
    onChange: (event: React.MouseEvent<HTMLInputElement>) => void
}

function CreateBeerForm(props: Props) {
    return (
        <div>
            <label>
                <input onClick={props.onChange} checked={props.value} type="checkbox"/>
                {props.label}     
            </label>
        </div>
    );
}

export default CreateBeerForm;