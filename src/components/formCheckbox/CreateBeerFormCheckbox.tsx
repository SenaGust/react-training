import React from 'react';
import {Checkbox} from '@material-ui/core';

interface Props{
    label: string,
    value: boolean,
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function CreateBeerForm(props: Props) {
    return (
        <div>
            <label>
                <Checkbox 
                checked={props.value}
                onClick={props.onChange}
                color="primary"
                />
                {props.label}     
            </label>
        </div>
    );
}

export default CreateBeerForm;