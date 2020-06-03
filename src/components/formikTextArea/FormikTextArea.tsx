import React from 'react';
import {FastField} from 'formik';

interface Props{
    label: string,
    name: string
}

function FormikTextArea(props: Props) {
    return (
        <div>
            <label> 
                {props.label}
                <FastField type="text" component="textarea" name={props.name} />
            </label>
        </div>
    );
}

export default FormikTextArea;