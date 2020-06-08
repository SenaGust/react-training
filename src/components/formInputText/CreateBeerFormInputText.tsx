import React from 'react';
import {TextField} from '@material-ui/core';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CreateBeerFormInputText(props: Props) {
    return (
        <div>
            <TextField 
            label={props.label} 
            value={props.value}
            onChange={props.onChange}
            variant="outlined" />
        </div>
    );
}

export default CreateBeerFormInputText;