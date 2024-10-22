import { Fileds } from "./type";

const step12: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Type of garden you have",
                type: "text",
                name: "gardenType",
                placeholder: "Select your garden type",
                required: true,
                options: [
                    { value: "Vegetable", label: "Vegetable" },
                    { value: "Flower", label: "Flower" },
                    { value: "Herb", label: "Herb" },
                    { value: "Fruit", label: "Fruit" },
                    { value: "Mixed", label: "Mixed" },
                    { value: "None", label: "None" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of plants in your garden",
                type: "number",
                name: "numberOfPlants",
                placeholder: "Enter number of plants",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred gardening season",
                type: "text",
                name: "gardeningSeason",
                placeholder: "Select your preferred season",
                required: true,
                options: [
                    { value: "Spring", label: "Spring" },
                    { value: "Summer", label: "Summer" },
                    { value: "Autumn", label: "Autumn" },
                    { value: "Winter", label: "Winter" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite plant to grow",
                type: "text",
                name: "favoritePlant",
                placeholder: "Enter your favorite plant",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use organic fertilizers?",
                type: "text",
                name: "useOrganicFertilizers",
                placeholder: "Select if you use organic fertilizers",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average time spent gardening per week (hours)",
                type: "number",
                name: "gardeningTime",
                placeholder: "Enter average time spent",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a greenhouse?",
                type: "text",
                name: "haveGreenhouse",
                placeholder: "Select if you have a greenhouse",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Most challenging plant to grow",
                type: "text",
                name: "challengingPlant",
                placeholder: "Enter the most challenging plant",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you compost?",
                type: "text",
                name: "doCompost",
                placeholder: "Select if you compost",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Preferred gardening tool",
                type: "text",
                name: "gardeningTool",
                placeholder: "Enter your preferred gardening tool",
                required: true,
            }
        ]
    }
];

export default step12;
