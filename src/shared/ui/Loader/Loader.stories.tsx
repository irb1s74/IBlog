import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Loader} from "./Loader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";


export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
    <div style={{display: 'flex'}}>
        <Loader {...args}/>
    </div>
);

export const Light = Template.bind({})
Light.decorators = [ThemeDecorator(ETheme.LIGHT)]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
