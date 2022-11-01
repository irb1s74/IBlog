import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './Button';


export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Contained = Template.bind({})

Contained.args = {
    children: 'Text',
    variant: "contained"
}

export const Text = Template.bind({})
Text.args = {
    children: 'Text',
    variant: "text"
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Text',
    variant: "outlined"
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Text',
    variant: "contained",
    disabled: true,
}
