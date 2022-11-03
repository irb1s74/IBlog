import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import LoginForm from "./LoginForm";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator";


export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>;

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(ETheme.LIGHT), StoreDecorator({
    loginForm: {
        username: "user",
        password: "213",
    }
})]
