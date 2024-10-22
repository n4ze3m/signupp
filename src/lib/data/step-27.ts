import { Fileds } from "./type";

const step27: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use trains for commuting?",
                name: "useTrainsForCommuting",
                placeholder: "Select if you use trains for commuting",
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
                label: "Average number of train rides per week",
                name: "trainRidesPerWeek",
                type: "number",
                placeholder: "Enter the average number of train rides per week",
                required: true,
                regex: /^[0-9]+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a train pass or subscription?",
                name: "trainPassSubscription",
                placeholder: "Select if you have a train pass or subscription",
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
                label: "Preferred train class (e.g., economy, first class)",
                name: "preferredTrainClass",
                type: "text",
                placeholder: "Enter your preferred train class",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you work or relax during train rides?",
                name: "activityDuringTrainRides",
                placeholder: "Select your activity during train rides",
                required: true,
                options: [
                    { value: "Work", label: "Work" },
                    { value: "Relax", label: "Relax" },
                    { value: "Both", label: "Both" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Longest train journey (hours)",
                name: "longestTrainJourney",
                type: "number",
                placeholder: "Enter the duration of your longest train journey in hours",
                required: true,
                regex: /^[0-9]+(\.[0-9]+)?$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer window or aisle seats on trains?",
                name: "trainSeatPreference",
                placeholder: "Select your seat preference on trains",
                required: true,
                options: [
                    { value: "Window", label: "Window" },
                    { value: "Aisle", label: "Aisle" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use train apps for booking or schedules?",
                name: "useTrainApps",
                placeholder: "Select if you use train apps for booking or schedules",
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
                inputType: "select",
                label: "Do you find train travel comfortable?",
                name: "trainTravelComfort",
                placeholder: "Select if you find train travel comfortable",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "Sometimes", label: "Sometimes" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite train route",
                name: "favoriteTrainRoute",
                type: "text",
                placeholder: "Enter your favorite train route",
                required: false
            }
        ]
    }
];

export default step27;
