import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import NotFoundPage from "./NotFoundPage";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";


export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args}/>;

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
