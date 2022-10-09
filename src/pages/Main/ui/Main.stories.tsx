import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Main from "./Main";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";


export default {
    title: 'pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args}/>;

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
