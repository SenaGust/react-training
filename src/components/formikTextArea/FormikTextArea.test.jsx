import FormikTextArea from './FormikTextArea';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik';

describe('function formikTextArea', () => {
    const labelMock = "ingredients",
    nameMock = "ingredients";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<FormikTextArea label={labelMock} name={nameMock} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('label');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.children()).toHaveLength(2);

        expect(labelWrapper.childAt(0).text()).toEqual(labelMock);

        const textAreaWrapper = labelWrapper.childAt(1);

        const textAreaMock = (<FastField type="text" name={nameMock} />);
        expect(textAreaWrapper.matchesElement(textAreaMock)).toBeTruthy();

    });
});