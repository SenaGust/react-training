import React, { BaseSyntheticEvent, useState } from 'react';
import {Button} from '@material-ui/core';
import CreateBeerFormCombobox from '../../components/formCombobox/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from '../../components/formCheckbox/CreateBeerFormCheckbox';
import CreateBeerFormInputText from '../../components/formInputText/CreateBeerFormInputText';
import CreateBeerFormTextArea from '../../components/formTextArea/CreateBeerFormTextArea';

function CreateBeerForm() {
    const onSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        console.log(valueTextArea, valueInputText, valueComboBox, valueCheckBox);
    };

    const [valueTextArea, onChangeTextArea] = useState("");
    const [valueInputText, onChangeInputText] = useState("");
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    const [valueComboBox, onChangeComboBox] = useState(beerTypes[0]);
    const [valueCheckBox, onChangeCheckBox] = useState(false);
    return (
        <form onSubmit={onSubmit}>
            <h1>Beer form</h1>
            <CreateBeerFormInputText label="Beer name:" value={valueInputText} onChange={e => onChangeInputText(e.target.value)}/>
            <CreateBeerFormCombobox label="Beer type:" elements={beerTypes} value={valueComboBox} onChange={e => onChangeComboBox(e.target.value)}/>
            <CreateBeerFormCheckbox label="Has corn" value={valueCheckBox} onChange={e => onChangeCheckBox(!valueCheckBox)}/>
            <CreateBeerFormTextArea label="Ingredients" value={valueTextArea} onChange={e => onChangeTextArea(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
}

export default CreateBeerForm;