import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Suggest} from "./Suggest";
import {Form, Formik} from "formik";
import noop from "../../utils/noop";

export default {
    title: "Suggest",
    component: Suggest,
} as ComponentMeta<typeof Suggest>;

const Template: ComponentStory<typeof Suggest> = (args) =>
    <Formik initialValues={{status: {name: 'boo', id: '123'}}} onSubmit={() => console.log('hi')}>
        {() => (
            <Form>
                <Suggest {...args} name={'status'} setEdited={noop}/>
            </Form>
        )}
    </Formik>


export const LoginSuggest = Template.bind({});
LoginSuggest.args = {
    editable: true,
    placeholder: "Логин",
    suggestions: [
        {
            name: 'boo',
            id: '123',
        },
        {
            name: 'aaa',
            id: '345',
        },
        {
            name: 'bbb',
            id: '5',
        },
    ]
};

export const LongSuggestions = Template.bind({});
LongSuggestions.args = {
    editable: false,
    placeholder: "Объем",
    suggestions: [
        {
            name: 'boo',
            id: '123',
        },
        {
            name: 'aaa',
            id: '345',
        },
        {
            name: 'bbb',
            id: '5',
        },
        {
            name: 'boo',
            id: '1231',
        },
        {
            name: 'aaa',
            id: '3415',
        },
        {
            name: 'bbb',
            id: '51',
        },
        {
            name: 'boo',
            id: '1223',
        },
        {
            name: 'aaa',
            id: '3245',
        },
        {
            name: 'bbb',
            id: '25',
        },
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    editable: true,
    placeholder: "Логин",
};

export const Colorful = Template.bind({});
Colorful.args = {
    editable: true,
    placeholder: "Логин",
    suggestions: [
        {
            name: 'boo',
            id: '123',
        },
        {
            name: 'aaa',
            id: '345',
        },
        {
            name: 'bbb',
            id: '5',
        },
    ],
    colorful: true,
};
