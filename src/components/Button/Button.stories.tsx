import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button} from "./Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked',
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Фильтры',
    primary: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Войти',
    primary: false,
}