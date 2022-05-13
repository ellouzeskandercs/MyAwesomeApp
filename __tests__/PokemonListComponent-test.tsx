import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PokemonListComponent} from '../src/PokemonListComponent';

it('renders correctly', () => {
  const component = renderer.create(<PokemonListComponent />);
  expect(component).toMatchSnapshot();
});
