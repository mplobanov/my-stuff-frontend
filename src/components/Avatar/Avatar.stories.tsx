import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Avatar} from "./Avatar";

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        onClick: {
            action: 'clicked',
        }
    }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    name: "Михаил"
}
