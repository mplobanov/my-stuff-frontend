import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Page} from "./Page";

export default {
    title: "Page",
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = args =>
    <Page {...args}>
        <div style={{background: 'red', height: '3rem'}} >1</div>
        <div style={{background: 'green', height: '3rem'}} >2</div>
        <div style={{background: 'blue', height: '3rem'}} >3</div>
    </Page>;

export const Classic = Template.bind({});
Classic.args = {};
