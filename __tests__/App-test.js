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
    global.fetch = jest.fn(()=>Promise.resolve({
      json: ()=> Promise.resolve(
        [

          {
        
            "description": "Banco Paga Todo es Para Todos",
        
            "age": 10,
        
            "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20",
        
            "bankName": "Paga Todo"
        
          },
        
        ]
      )
    }));
  component= render(<App/>);
  })
  it("Renderiza correctamente",()=>{
    expect(component).toBeDefined();
})
it("Renderiza loss elementos del APi",()=>{
        
})
})
