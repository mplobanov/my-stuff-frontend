import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Support} from "./Support";


export default {
    title: 'Support',
    component: Support,

} as ComponentMeta<typeof Support>;


const Template: ComponentStory<typeof Support> = args => <Support />;

export const Regular = Template.bind({});
Regular.args = {
}
