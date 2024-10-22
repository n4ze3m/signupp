import { Fileds } from "./type";

const step33: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "How often do you bathe?",
                name: "bathingFrequency",
                placeholder: "Select how often you bathe",
                required: true,
                options: [
                    { value: "Daily", label: "Daily" },
                    { value: "Every other day", label: "Every other day" },
                    { value: "Twice a week", label: "Twice a week" },
                    { value: "Weekly", label: "Weekly" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer showers or baths?",
                name: "showerOrBath",
                placeholder: "Select your preference",
                required: true,
                options: [
                    { value: "Showers", label: "Showers" },
                    { value: "Baths", label: "Baths" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average duration of your bath/shower (minutes)",
                name: "bathingDuration",
                type: "number",
                placeholder: "Enter the average duration in minutes",
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
                label: "Do you use any special bath products?",
                name: "specialBathProducts",
                placeholder: "Select if you use any special bath products",
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
                label: "Favorite bath product brand",
                name: "favoriteBathProductBrand",
                type: "text",
                placeholder: "Enter your favorite bath product brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you listen to music while bathing?",
                name: "listenToMusicWhileBathing",
                placeholder: "Select if you listen to music while bathing",
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
                label: "Do you prefer hot or cold water?",
                name: "waterTemperaturePreference",
                placeholder: "Select your water temperature preference",
                required: true,
                options: [
                    { value: "Hot", label: "Hot" },
                    { value: "Cold", label: "Cold" },
                    { value: "Warm", label: "Warm" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a loofah or washcloth?",
                name: "loofahOrWashcloth",
                placeholder: "Select if you use a loofah or washcloth",
                required: true,
                options: [
                    { value: "Loofah", label: "Loofah" },
                    { value: "Washcloth", label: "Washcloth" },
                    { value: "Neither", label: "Neither" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use bath oils or salts?",
                name: "useBathOilsOrSalts",
                placeholder: "Select if you use bath oils or salts",
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
                label: "Do you have a specific bathing routine?",
                name: "bathingRoutine",
                type: "text",
                placeholder: "Briefly describe your bathing routine",
                required: false
            }
        ]
    }
];

export default step33;
