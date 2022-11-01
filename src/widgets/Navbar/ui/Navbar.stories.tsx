import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {ETheme} from "app/providers/ThemeProvider";
import {Navbar} from "./Navbar";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator";

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>;

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(ETheme.LIGHT), StoreDecorator({
    user: {authData: {}}
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(ETheme.DARK), StoreDecorator({
    user: {authData: {}}
})]
