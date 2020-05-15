import {shallow} from 'enzyme';
import React from 'react';
import {Formik} from 'formik';

import CreateBeerFormik from './CreateBeerFormik';

describe('function CreateBeerFormik', () => {
    it('should show components properly', () => {
        let wrapper = shallow(<CreateBeerFormik />);
        expect(wrapper.type()).toBe(Formik);
    });
    it('should submit values', () => {
        const values = {beerName: '', beerType: '', hasCorn: false, ingredients: ''}
        const wrapper = shallow(<CreateBeerFormik />)
        console.log = jest.fn();

        wrapper.find('Formik').simulate('submit', values);
        
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('submitting', values);
    });
});