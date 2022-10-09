import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Link} from "./Link";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";


export default {
    title: 'shared/Link',
    component: Link,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) =>
    <Link {...args}/>
;

export const Light = Template.bind({})
Light.args = {
    children: 'Text',
}
Light.decorators = [ThemeDecorator(ETheme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {
    children: 'Text',
}
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
