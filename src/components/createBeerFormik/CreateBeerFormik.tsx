import React from 'react';
import {Formik} from 'formik';
import FormikCombobox from '../formikCombobox/FormikCombobox';
import FormikCheckbox from '../formikCheckbox/FormikCheckbox';
import FormikInputText from '../formikInputText/FormikInputText';
import FormikTextArea from '../formikTextArea/FormikTextArea';

function CreateBeerFormik() {
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    return (
        <Formik
            initialValues={{beerName: '', beerType: beerTypes[0], hasCorn: false, ingredients: ''}}
            onSubmit={(values) => {
                console.log('submitting', values);
            }}
        >
        {({ handleSubmit }) => (
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