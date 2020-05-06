import React from 'react';
import {Field} from 'formik';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function FormikTextArea(props: Props) {
    return (
        <div>
            <label> 
                {props.label}
                <Field type="text" value={props.value} onChange={props.onChange} />
            </label>
        </div>
    );
}

export default FormikTextArea;