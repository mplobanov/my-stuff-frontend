import {ComponentMeta, ComponentStory} from "@storybook/react";
import {DetailsCard} from "./DetailsCard";
import {useLocationSuggestions} from "../../../hooks/useLocations";
import {useEffect, useState} from "react";
import {Suggestion} from "../Suggest/Suggest";
import {Formik} from 'formik';
import {emptyItem} from "../../../hooks/useItems";
import {useGroupSuggestions} from "../../../hooks/useGroups";
import {useStatusSuggestions} from "../../../hooks/useStatuses";
import {object, string} from 'yup'
import {SubmitState} from "../../../utils/SubmitText";

const makeSuggsMock = (returnDict: Suggestion[]) => {
    return () => {
        const [suggs, setSuggs] = useState<Suggestion[] | undefined>(undefined);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setSuggs(returnDict);
            }, 3000);
            return () => {
                clearTimeout(timeout);
            }
        }, []);

        return suggs;
    };
}

const useStoriesLocSuggs: typeof useLocationSuggestions = makeSuggsMock([
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
        name: "Дом",
    }
])

const useStoriesGroupSuggs: typeof useGroupSuggestions = makeSuggsMock([
    {
        id: "1",
        name: "Рубашки",
    },
    {
        id: "2",
        name: "Носки",
    },
    {
        id: "3",
        name: "Кофты"
    }
]);

const useStoriesStatusSuggs: typeof useStatusSuggestions = makeSuggsMock([
    {
        id: "1",
        name: "В стирке",
    },
    {
        id: "2",
        name: "Чистое",
    },
    {
        id: "3",
        name: "Ношеное",
    }
]);

export default {
    title: "Details Card",
    component: DetailsCard,
    args: {
        submitState: SubmitState.NotSubmitted
    }
} as ComponentMeta<typeof DetailsCard>;

const Template: ComponentStory<typeof DetailsCard> = args => (
    <Formik
        initialValues={emptyItem}
        onSubmit={values => console.log(values)}
        validationSchema={object({
            id: string(),

            title: string().required(),

            brand: string(),
            color: string(),
            size: string(),
            volume: string(),

            location: object({
                id: string(),
                name: string().required('Локация обязательна'),
            }),
            group: object({
                id: string(),
                name: string().required('Группа обязательна'),
            }),
            status: object({
                id: string(),
                name: string().required('Статус обязателен'),
            }),
        })}
    >
        <DetailsCard {...args}
                     useLocSuggestions={useStoriesLocSuggs}
                     useGroupSuggestions={useStoriesGroupSuggs}
                     useStatusSuggestions={useStoriesStatusSuggs}
        />
    </Formik>);


export const Default = Template.bind({});
Default.args = {
    editable: false,
    initialValues: {
        id: "007",
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
    submitState: 0,
};

export const Editable = Template.bind({});
Editable.args = {
    editable: true,
    initialValues: emptyItem,
    submitState: 0,
};


