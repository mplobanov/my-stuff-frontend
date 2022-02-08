import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Error} from "./Error";

export default {
    title: 'Error',
    component: Error,

} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = args => <Error {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    errors: [
        'Error: Failed to fetch',
    ]
}