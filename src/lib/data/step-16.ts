import { Fileds } from "./type";

const step16: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of oven",
                name: "ovenBrand",
                type: "text",
                placeholder: "Enter the brand of your oven",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of oven",
                name: "ovenModel",
                type: "text",
                placeholder: "Enter the model of your oven",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Type of oven",
                name: "ovenType",
                placeholder: "Select the type of your oven",
                required: true,
                options: [
                    { value: "Conventional", label: "Conventional" },
                    { value: "Convection", label: "Convection" },
                    { value: "Microwave", label: "Microwave" },
                    { value: "Toaster", label: "Toaster" },
                    { value: "Combination", label: "Combination" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Capacity of oven (liters)",
                name: "ovenCapacity",
                type: "number",
                placeholder: "Enter the capacity in liters",
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
                label: "Energy source of oven",
                name: "ovenEnergySource",
                placeholder: "Select the energy source",
                required: true,
                options: [
                    { value: "Electric", label: "Electric" },
                    { value: "Gas", label: "Gas" },
                    { value: "Dual Fuel", label: "Dual Fuel" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a self-cleaning oven?",
                name: "selfCleaningOven",
                placeholder: "Select if you use a self-cleaning oven",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Age of oven (years)",
                name: "ovenAge",
                type: "number",
                placeholder: "Enter the age of your oven",
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
                label: "Do you use a smart oven?",
                name: "useSmartOven",
                placeholder: "Select if you use a smart oven",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of times oven is used per week",
                name: "ovenUsageFrequency",
                type: "number",
                placeholder: "Enter the number of times you use the oven per week",
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
                label: "Do you use an oven thermometer?",
                name: "useOvenThermometer",
                placeholder: "Select if you use an oven thermometer",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    }
];

export default step16;
