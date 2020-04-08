import DogDetailsView from './DogDetails';
import { shallow } from 'enzyme';
import React from 'react';

describe('function DogDetailsView', () => {
    it('return Roberto e uma imagem', () => {
        const wrapper = shallow(<DogDetailsView name="Roberto" photo='https://img.ibxk.com.br/2019/07/16/16123213283052.jpg'/>);
        
        const propsExpect = wrapper.props();

        expect(propsExpect.name).toBe('fieldName');
        expect(propsExpect.photo).toBe('fieldName');
    });
});