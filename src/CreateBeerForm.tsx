import React from 'react';
import CreateBeerFormCombobox from './Form/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from './Form/CreateBeerFormCheckbox';
import CreateBeerFormInputText from './Form/CreateBeerFormInputText';
import CreateBeerFormTextArea from './Form/CreateBeerFormTextArea';

function CreateBeerForm() {
    return (
        <form>
            <h1>Beer form</h1>
            <CreateBeerFormInputText label="Beer name:" />
            <CreateBeerFormCombobox label="Beer type:" elements={['Ale', 'Lager', 'Stout']}/>
            <CreateBeerFormCheckbox label="Has corn"/>
            <CreateBeerFormTextArea label="Ingredients" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateBeerForm;