import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Switch} from "./Switch";

export default {
    title: 'shared/Switch',
    component: Switch,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args}/>;

export const Default = Template.bind({})
