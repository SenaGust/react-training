import CreateBeerForm from './CreateBeerForm';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerForm', () => {
    it('children should be properly orderly', () => {        
        const wrapper = shallow(<CreateBeerForm />);
        
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children().length).toBe(1);
    });
});