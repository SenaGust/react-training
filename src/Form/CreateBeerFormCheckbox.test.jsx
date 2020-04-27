import CreateBeerFormCheckbox from './CreateBeerFormCheckbox';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormCheckbox', () => {
    const label = "has corn";
    const onChange = jest.fn().mockImplementation(() => {
        value = !value;
    });
    let value = true;

    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} value={value} onChange={onChange}/>);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('label');
        expect(wrapper.childAt(0).props().children).toHaveLength(2);
        expect(wrapper.childAt(0).props().children[1]).toEqual(label);
        expect(wrapper.childAt(0).props().children[0].type).toEqual('input');
    });
    it('should update the checkbox to false when I click on the checkbox', () => {
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} value={value} onChange={onChange}/>);

        wrapper.find('input').simulate('click');

        expect(onChange).toBeCalledTimes(1);
        expect(value).toBeFalsy();
    });
});