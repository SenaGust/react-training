import FormikTextArea from './FormikTextArea';
import { shallow } from 'enzyme';
import React from 'react';
import {Field} from 'formik';

describe('function formikTextArea', () => {
    const labelMock = "ingredients";
    const onChangeMock = jest.fn().mockImplementation((string) => {
        valueMock = string;
    });
    let valueMock = "";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<FormikTextArea label={labelMock} value={valueMock} onChange={onChangeMock} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('label');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.children()).toHaveLength(2);

        expect(labelWrapper.childAt(0).text()).toEqual(labelMock);

        const textAreaWrapper = labelWrapper.childAt(1);

        const textAreaMock = (<Field type="text" value={""} onChange={onChangeMock} />);
        console.log(textAreaMock);
        console.log(textAreaWrapper.debug());

        expect(textAreaWrapper.matchesElement(textAreaMock)).toBeTruthy();

    });
    it('should update value when I change the input', () => {
        const wrapper = shallow(<FormikTextArea label={labelMock} onChange={onChangeMock} value={valueMock} />);

        wrapper.find('Field').simulate('change', 'ola');

        expect(onChangeMock).toBeCalledTimes(1);
        expect(valueMock).toEqual("ola");
    });
});