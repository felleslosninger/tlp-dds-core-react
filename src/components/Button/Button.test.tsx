import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    shallow(<Button>Click here</Button>);
  });

  it('has text', () => {
    const button = shallow(<Button>Click here</Button>);
    expect(button.text()).toEqual('Click here');
  });
});
