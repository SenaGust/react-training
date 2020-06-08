import CreateBeerFormCheckbox from './CreateBeerFormCheckbox';
import { shallow } from 'enzyme';
import React from 'react';
import {Checkbox} from '@material-ui/core';

describe('function CreateBeerFormCheckbox', () => {
    const label = "has corn";
    const onChange = jest.fn().mockImplementation(() => {
        value = !value;
    });
    let value = true;

    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} value={value} onChange={onChange}/>);

        expect(wrapper.type()).toEqual('div');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(1).text()).toBe(label);

        const inputMock = (<Checkbox 
            checked={value}
            onClick={onChange}
            color="primary"
            />);
        expect(labelWrapper.childAt(0).matchesElement(inputMock)).toBeTruthy();
    });
    it('should update the checkbox to false when I click on the checkbox', () => {
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} value={value} onChange={onChange}/>);

        wrapper.find(Checkbox).simulate('click');

        expect(onChange).toBeCalledTimes(1);
        expect(value).toBeFalsy();
    });
});