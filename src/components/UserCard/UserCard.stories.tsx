import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UserCard} from "./UserCard";

export default {
    title: 'UserCard',
    component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = args => <UserCard {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    name: "Михаил",
    login: "mplobanov",
}
