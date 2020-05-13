import React from 'react';
import {Formik} from 'formik';
import FormikCombobox from '../Formik/FormikCombobox';
import FormikCheckbox from '../Formik/FormikCheckbox';
import FormikInputText from '../Formik/FormikInputText';
import FormikTextArea from '../Formik/FormikTextArea';

function CreateBeerFormik() {
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    return (
        <Formik
            initialValues={{beerName: '', beerType: beerTypes[0], hasCorn: false, ingredients: ''}}
            onSubmit={(values) => {
                console.log('submitting', values);
            }}
        >
        {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
                <h1>Beer form</h1>
                <FormikInputText label="Beer name:" name="beerName"/>
                <FormikCombobox label="Beer type:" elements={beerTypes} name="beerType"/>
                <FormikCheckbox label="Has corn" name="hasCorn"/>
                <FormikTextArea label="Ingredients" name="ingredients"/>
                <button type="submit">Submit</button>
            </form>
        )}
        </Formik>
    );
}

export default CreateBeerFormik;