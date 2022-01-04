import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ChipGroup} from "./ChipGroup";

export default {
    title: 'ChipGroup',
    component: ChipGroup,
    argTypes: {
        onChange: {
            action: "changed"
        },
        onAdd: {
            action: "added"
        }
    }
} as ComponentMeta<typeof ChipGroup>;

const Template: ComponentStory<typeof ChipGroup> = args => <ChipGroup {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    values: [
        {
            name: 'Дом',
            id: 'a1',
        },
        {
            name: 'Работа',
            id: 'a2',
        },
        {
            name: 'Общага',
            id: 'a3',
        },
    ],
}
