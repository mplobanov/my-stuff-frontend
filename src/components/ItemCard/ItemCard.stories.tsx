import {ItemCard} from "./ItemCard";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default {
    title: "Item Card",
    component: ItemCard,
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: {
            action: "clicked",
        }
    }
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args}/>;

export const WashingJeans = Template.bind({});
WashingJeans.args = {
    quantity: "4",
    status: "В стирке",
    name: "Джинсы",
    backgroundColor: "rgb(254, 242, 242)",
}

export const CleanShirt = Template.bind({});
CleanShirt.args = {
    quantity: "3",
    status: "Чистое",
    name: "Рубашка",
    backgroundColor: "rgb(236, 253, 245)",
}

export const LongName = Template.bind({});
LongName.args = {
    quantity: "15",
    status: "В стирке",
    name: "Джинсы гавайские",
    backgroundColor: "rgb(254, 242, 242)",
}

export const Add = Template.bind({});
Add.args = {
    quantity: <FontAwesomeIcon icon={faPlus} color={"rgba(0, 0, 0, 0.4)"}/> ,
    name: "Добавить",
}