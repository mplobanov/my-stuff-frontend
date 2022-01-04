import {ComponentMeta, ComponentStory} from "@storybook/react";
import {DetailsCard} from "./DetailsCard";
import {useLocationSuggestions} from "../../hooks/useLocations";
import {useEffect, useState} from "react";
import {Suggestion} from "../Suggest/Suggest";
import { Formik } from 'formik';
import {emptyItem} from "../../hooks/useItems";

const useStoriesLocSuggs: typeof useLocationSuggestions = () => {
    const [suggs, setSuggs] = useState<Suggestion[] | undefined>(undefined);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSuggs([
                {
                    id: "1",
                    name: "Общага",
                },
                {
                    id: "2",
                    name: "Квартира",
                },
                {
                    id: "3",
                    name: "Дом"
                }
            ]);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return suggs;
}

export default {
    title: "Details Card",
    component: DetailsCard,

} as ComponentMeta<typeof DetailsCard>;

const Template: ComponentStory<typeof DetailsCard> = args => (
    <Formik
        initialValues={emptyItem}
        onSubmit={values => console.log(values)}
    >
        <DetailsCard {...args} useLocSuggestions={useStoriesLocSuggs}/>
    </Formik>);


export const Default = Template.bind({});
Default.args = {
    editable: false,
    initialValues: {
        title: "Рубашка",
        location: {
            id: "1",
            name: "Общага",
        },
        status: {
            id: "1o",
            name: "В стирке",
        },
        group: {
            id: "231",
            name: "Рубашки",
        },
        brand: "H&M",
        size: "52",
        color: "Белая",
        volume: ""
    },
    loading: false,
};

export const Editable = Template.bind({});
Editable.args = {
    editable: true,
    initialValues: emptyItem
};


