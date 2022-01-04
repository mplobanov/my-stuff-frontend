import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Loading} from "./Loading";

export default {
    title: "Loading",
    component: Loading,
    argTypes: {
        onClick: {
            action: "clicked",
        }
    }
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => <Loading {...args}/>;

export const Wear = Template.bind({});
Wear.args = {
    values: [true,],
}
