import { Fileds } from "./type";

const step14: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of washing machine",
                name: "washingMachineBrand",
                type: "text",
                placeholder: "Enter the brand of your washing machine",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of washing machine",
                name: "washingMachineModel",
                type: "text",
                placeholder: "Enter the model of your washing machine",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Type of washing machine",
                name: "washingMachineType",
                placeholder: "Select the type of your washing machine",
                required: true,
                options: [
                    { value: "Front Load", label: "Front Load" },
                    { value: "Top Load", label: "Top Load" },
                    { value: "Semi-Automatic", label: "Semi-Automatic" },
                    { value: "Fully Automatic", label: "Fully Automatic" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Frequency of laundry per week",
                name: "laundryFrequency",
                type: "number",
                placeholder: "Enter the number of times you do laundry per week",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred laundry detergent brand",
                name: "laundryDetergentBrand",
                placeholder: "Select your preferred laundry detergent brand",
                required: true,
                options: [
                    { value: "Tide", label: "Tide" },
                    { value: "Ariel", label: "Ariel" },
                    { value: "Persil", label: "Persil" },
                    { value: "Gain", label: "Gain" },
                    { value: "Other", label: "Other" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use fabric softener?",
                name: "useFabricSoftener",
                placeholder: "Select if you use fabric softener",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type:"",
            },
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average load size (kg)",
                name: "averageLoadSize",
                type: "number",
                placeholder: "Enter the average load size in kilograms",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you separate colors when washing?",
                name: "separateColors",
                placeholder: "Select if you separate colors",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Never", label: "Never" }
                ],
                type:"",
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you air dry or use a dryer?",
                name: "dryingMethod",
                placeholder: "Select your drying method",
                required: true,
                options: [
                    { value: "Air Dry", label: "Air Dry" },
                    { value: "Dryer", label: "Dryer" },
                    { value: "Both", label: "Both" }
                ],
                type:"",
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of people in household",
                name: "householdSize",
                type: "number",
                placeholder: "Enter the number of people in your household",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    }
];

export default step14;
