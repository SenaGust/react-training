import React, {useState} from 'react';
import {Formik} from 'formik';
import FormikCombobox from '../Formik/FormikCombobox';
import FormikCheckbox from '../Formik/FormikCheckbox';
import FormikInputText from '../Formik/FormikInputText';
import FormikTextArea from '../Formik/FormikTextArea';

function CreateBeerFormik() {   
    const [valueTextArea, onChangeTextArea] = useState("");
    const [valueInputText, onChangeInputText] = useState("");
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    const [valueComboBox, onChangeComboBox] = useState(beerTypes[0]);
    const [valueCheckBox, onChangeCheckBox] = useState(false);
    return (
        <Formik
            initialValues={{}}
            onSubmit={(value) => {
                console.log('submitting', valueTextArea, valueCheckBox, valueComboBox, valueInputText);
            }}
        >
        {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <h1>Beer form</h1>
                <FormikInputText label="Beer name:" value={valueInputText} onChange={e => onChangeInputText(e.target.value)}/>
                <FormikCombobox label="Beer type:" elements={beerTypes} value={valueComboBox} onChange={e => onChangeComboBox(e.target.value)}/>
                <FormikCheckbox label="Has corn" value={valueCheckBox} onChange={e => onChangeCheckBox(!valueCheckBox)}/>
                <FormikTextArea label="Ingredients" value={valueTextArea} onChange={e => onChangeTextArea(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        )}
        </Formik>
    );
}

export default CreateBeerFormik;