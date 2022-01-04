import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Header} from "./Header";

export default {
    title: 'Header',
    component: Header,

} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    headerText: 'Фильтры',
}

export const WithDescription = Template.bind({});
WithDescription.args = {
    headerText: 'Фильтры',
    description: 'Выберите нужные фильтры',
}