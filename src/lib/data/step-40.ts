import { Fileds } from "./type";

const step40: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "What type of chair do you use most often?",
                name: "chairType",
                placeholder: "Select your most used chair type",
                required: true,
                options: [
                    { value: "Office chair", label: "Office chair" },
                    { value: "Gaming chair", label: "Gaming chair" },
                    { value: "Recliner", label: "Recliner" },
                    { value: "Dining chair", label: "Dining chair" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a preferred chair brand?",
                name: "preferredChairBrand",
                placeholder: "Select if you have a preferred chair brand",
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
                label: "Favorite chair brand",
                name: "favoriteChairBrand",
                type: "text",
                placeholder: "Enter your favorite chair brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a chair with lumbar support?",
                name: "lumbarSupport",
                placeholder: "Select if your chair has lumbar support",
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
                label: "Do you prefer a chair with armrests?",
                name: "armrestsPreference",
                placeholder: "Select if you prefer a chair with armrests",
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
                label: "Do you use a chair mat?",
                name: "useChairMat",
                placeholder: "Select if you use a chair mat",
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
                label: "Do you have a standing desk option?",
                name: "standingDeskOption",
                placeholder: "Select if you have a standing desk option",
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
                label: "Do you adjust your chair height frequently?",
                name: "adjustChairHeight",
                placeholder: "Select if you adjust your chair height frequently",
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
                label: "How many hours do you spend sitting in a chair daily?",
                name: "hoursSittingDaily",
                type: "number",
                placeholder: "Enter the number of hours",
                required: true,
                regex: /^[0-9]+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Any specific chair preferences?",
                name: "specificChairPreferences",
                type: "text",
                placeholder: "Enter any specific chair preferences",
                required: false
            }
        ]
    }
];

export default step40;
