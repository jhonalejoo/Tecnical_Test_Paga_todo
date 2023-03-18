/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render} from '@testing-library/react-native';
import App from '../App';

let component;


describe("<Home/>",()=>{
  beforeEach(()=>{
  component= render(<App/>);
  })
  it("Renderiza correctamente",()=>{
    expect(component).toBeDefined();
})
})
