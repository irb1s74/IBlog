import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button, ButtonVariants} from './Button';


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
    variant: ButtonVariants.contained
}

export const Text = Template.bind({})
Text.args = {
    children: 'Text',
    variant: ButtonVariants.text
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Text',
    variant: ButtonVariants.outlined
}
