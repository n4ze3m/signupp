import { Fileds } from "./type";

const step24C: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have access to an office kitchen?",
                name: "accessToOfficeKitchen",
                placeholder: "Select if you have access to an office kitchen",
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
                inputType: "select",
                label: "Is there a microwave in the office kitchen?",
                name: "microwaveInOfficeKitchen",
                placeholder: "Select if there is a microwave in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Is there a refrigerator in the office kitchen?",
                name: "refrigeratorInOfficeKitchen",
                placeholder: "Select if there is a refrigerator in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Is there a coffee machine in the office kitchen?",
                name: "coffeeMachineInOfficeKitchen",
                placeholder: "Select if there is a coffee machine in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Is there a dishwasher in the office kitchen?",
                name: "dishwasherInOfficeKitchen",
                placeholder: "Select if there is a dishwasher in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of people using the office kitchen",
                name: "numberOfPeopleUsingOfficeKitchen",
                type: "number",
                placeholder: "Enter the number of people using the office kitchen",
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
                label: "Do you bring your own lunch to the office?",
                name: "bringOwnLunch",
                placeholder: "Select if you bring your own lunch to the office",
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
                inputType: "select",
                label: "Is there a water dispenser in the office kitchen?",
                name: "waterDispenserInOfficeKitchen",
                placeholder: "Select if there is a water dispenser in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Is there a toaster in the office kitchen?",
                name: "toasterInOfficeKitchen",
                placeholder: "Select if there is a toaster in the office kitchen",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use the office kitchen daily?",
                name: "useOfficeKitchenDaily",
                placeholder: "Select if you use the office kitchen daily",
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

export default step24C;
