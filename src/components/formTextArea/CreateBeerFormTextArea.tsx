import React from 'react';
import {TextField} from '@material-ui/core';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function CreateBeerForm(props: Props) {
    return (
        <div>
            <TextField
            rows={2}
            multiline
            label={props.label}
            variant="outlined"
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    );
}

export default CreateBeerForm;