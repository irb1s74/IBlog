import {Button} from "./Button";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {
            control: 'color',
        }
    }
} as ComponentMeta<typeof Button>
