import { StoryFn } from '@storybook/react';
import { ExampleComponent } from './example.component';

const Template: StoryFn = () => {
  return <ExampleComponent />;
};

export default {
  title: 'Shared/ExampleComponent',
  component: ExampleComponent,
};

export const Default = Template.bind({});