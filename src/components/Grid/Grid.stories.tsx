import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Grid} from "./Grid";

export default {
    title: "Grid",
    component: Grid,
    argTypes: {
        onClick: {
            action: "clicked",
        }
    }
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = args =>
    <Grid {...args}>
            {Array(150).fill(0).map((v, i) =>
                <div style={{background: ['green', 'red', 'blue', 'purple'][i % 4], height: '3rem', width: '3rem'}} >{i + 1}</div>
            )}

    </Grid>;

export const Regular = Template.bind({});
Regular.args = {
}
