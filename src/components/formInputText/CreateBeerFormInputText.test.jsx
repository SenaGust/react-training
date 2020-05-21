import CreateBeerFormInputText from './CreateBeerFormInputText';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormInputText', () => {
    const labelMock = "Beer name:";
    const onChangeMock = jest.fn().mockImplementation((string) => {
        valueMock = string;
    });
    let valueMock = "";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormInputText label={labelMock} onChange={onChangeMock} value={valueMock} />);

        expect(wrapper.type()).toBe('div');
        expect(wrapper.children()).toHaveLength(1);

        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toBe('label');
        expect(labelWrapper.childAt(0).text()).toBe(labelMock)
        expect(labelWrapper.children()).toHaveLength(2)

        const inputWrapper = labelWrapper.childAt(1);
        const inputMock = (<input type="text" value={""} onChange={onChangeMock} />);
        expect(inputWrapper.matchesElement(inputMock)).toBeTruthy();
    });
});