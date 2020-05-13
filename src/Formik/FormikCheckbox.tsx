import React from 'react';
import {FastField} from 'formik';

interface Props{
    label: string,
    name: string
}

function formikCheckbox(props: Props) {
    return (
        <div>
            <label>
                <FastField name={props.name} type="checkbox"/>
                {props.label}     
            </label>
        </div>
    );
}

export default formikCheckbox;