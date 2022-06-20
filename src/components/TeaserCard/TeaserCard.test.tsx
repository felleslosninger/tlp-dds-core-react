import React from 'react';
import { shallow } from 'enzyme';
import { TeaserCard } from './TeaserCard';

describe('TeaserCard', () => {
  it('renders without crashing', () => {
    shallow(<TeaserCard></TeaserCard>);
  });
});
