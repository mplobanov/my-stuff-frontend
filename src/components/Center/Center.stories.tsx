import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Center} from "./Center";

export default {
    title: "Center",
    component: Center,

} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = () => (
    <Center>
        <div style={{
            width: "16rem",
            height: "9rem",
            backgroundColor: "lime"
        }}/>
    </Center>);


export const Default = Template.bind({});
Default.args = {};





