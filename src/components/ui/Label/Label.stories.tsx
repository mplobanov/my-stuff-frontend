import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Label} from "./Label";

export default {
    title: "Label",
    component: Label,
    argTypes: {
        onClick: {
            action: "clicked",
        }
    }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args}/>;

export const Wear = Template.bind({});
Wear.args = {
    title: "Ношено",
    backgroundColor: "rgba(255, 135, 101, 1)",
    lightTitle: true,
}

export const SecondaryPlace = Template.bind({});
SecondaryPlace.args = {
    title: "Общага",
    selected: true,
}