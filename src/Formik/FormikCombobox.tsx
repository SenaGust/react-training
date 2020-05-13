import React from 'react';
import {FastField} from 'formik';

interface Props{
    label: string,
    elements: Array<string>,
    name: string
}

function formikCombobox(props: Props) {
    return (    
        <div>
            <label>
                {props.label}
                <FastField component="select" name={props.name}>
                    { props.elements.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                </FastField>
            </label>
        </div>
    );
}

export default formikCombobox;