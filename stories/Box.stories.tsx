import React from 'react';
import { Meta } from '@storybook/react';
import { NormalBox } from '../src';
import { Setup } from './shared/Setup';

export default {
  title: 'My story title',
  component: NormalBox,
  decorators: [(Story) => <Setup><Story /></Setup>]
} as Meta

export const Default = () => <NormalBox />;