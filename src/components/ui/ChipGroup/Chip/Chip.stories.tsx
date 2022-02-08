import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Chip} from "./Chip";

export default {
    title: 'Chip',
    component: Chip,
    argTypes: {
        onClick: {
            action: 'clicked',
        }
    }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    text: 'Hello',
    selected: false,
}

export const Selected = Template.bind({});
Selected.args = {
    text: 'Hello',
    selected: true,
}