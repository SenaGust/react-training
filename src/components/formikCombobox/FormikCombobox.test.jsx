import FormikCombobox from './FormikCombobox';
import { shallow } from 'enzyme';
import React from 'react';
import {Field} from 'formik';

describe('function formikCombobox', () => {
    const labelMock = "Beer type:";
    const elementsMock = ['ola', 'bem'];
    let valueMock = elementsMock[0];
    const onChangeMock = jest.fn().mockImplementation((string) => {
        valueMock = string;
    });

    it('children should be properly orderly', () => {
        const wrapper = shallow(<FormikCombobox label={labelMock} elements={elementsMock} value={valueMock} onChange={onChangeMock}/>);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children().length).toBe(1);
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children().length).toBe(2);
        expect(labelWrapper.childAt(0).text()).toEqual(labelMock);
        
        const select = labelWrapper.childAt(1);
        const selectMock = (
        <Field type="select" onChange={onChangeMock}>
            <option value='ola'> ola </option>
            <option value='bem'> bem </option>
        </Field>);
        
        expect(select.matchesElement(selectMock)).toBeTruthy();
    });
    it('should update the value when I choose other option in select', () => {
        const wrapper = shallow(<FormikCombobox label={labelMock} elements={elementsMock} value={valueMock} onChange={onChangeMock}/>);

        wrapper.find('Field').simulate('change',  "bem");

        expect(valueMock).toEqual('bem');
    });
});