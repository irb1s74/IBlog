import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import About from "./About";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";


export default {
    title: 'pages/About',
    component: About,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args}/>;

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
