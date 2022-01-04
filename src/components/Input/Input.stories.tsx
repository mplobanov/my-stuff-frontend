import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Input} from "./Input";
import {Form, Formik} from "formik";
import noop from "../../utils/noop";

export default {
    title: "Input",
    component: Input,
    argTypes: {
        onChange: {
            action: "changed",
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) =>
    <Formik initialValues={{example: 'boo'}} onSubmit={() => console.log('hi')}>
        {() => (
            <Form>
                <Input {...args} name={'example'} setEdited={noop}/>
            </Form>
        )}
    </Formik>


export const LoginInput = Template.bind({});
LoginInput.args = {
    editable: true,
    placeholder: "Логин",
};

export const ClickToEdit = Template.bind({});
ClickToEdit.args = {
    editable: false,
    placeholder: "Объем"
};

export const Loading = Template.bind({});
Loading.args = {
    editable: false,
    placeholder: "Объем",
    loading: true,
};