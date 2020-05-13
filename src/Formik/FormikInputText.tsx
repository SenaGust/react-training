import React from 'react';
import {FastField} from 'formik';

interface Props{
    label: string,
    name: string
}

function FormikInputText(props: Props) {
    return (
        <div>
            <label>
                {props.label}
                <FastField type="text" name={props.name}/>
            </label>
        </div>
    );
}

export default FormikInputText;