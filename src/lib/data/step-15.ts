import { Fileds } from "./type";

const step15: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of refrigerator",
                name: "fridgeBrand",
                type: "text",
                placeholder: "Enter the brand of your refrigerator",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of refrigerator",
                name: "fridgeModel",
                type: "text",
                placeholder: "Enter the model of your refrigerator",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Type of refrigerator",
                name: "fridgeType",
                placeholder: "Select the type of your refrigerator",
                required: true,
                options: [
                    { value: "Single Door", label: "Single Door" },
                    { value: "Double Door", label: "Double Door" },
                    { value: "Side by Side", label: "Side by Side" },
                    { value: "French Door", label: "French Door" },
                    { value: "Mini Fridge", label: "Mini Fridge" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Capacity of refrigerator (liters)",
                name: "fridgeCapacity",
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
                label: "Energy rating of refrigerator",
                name: "fridgeEnergyRating",
                placeholder: "Select the energy rating",
                required: true,
                options: [
                    { value: "1 Star", label: "1 Star" },
                    { value: "2 Stars", label: "2 Stars" },
                    { value: "3 Stars", label: "3 Stars" },
                    { value: "4 Stars", label: "4 Stars" },
                    { value: "5 Stars", label: "5 Stars" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a freezer?",
                name: "hasFreezer",
                placeholder: "Select if you have a freezer",
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
                label: "Age of refrigerator (years)",
                name: "fridgeAge",
                type: "number",
                placeholder: "Enter the age of your refrigerator",
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
                label: "Do you use a water dispenser?",
                name: "useWaterDispenser",
                placeholder: "Select if you use a water dispenser",
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
                label: "Do you use a smart fridge?",
                name: "useSmartFridge",
                placeholder: "Select if you use a smart fridge",
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
                label: "Number of people using the fridge",
                name: "fridgeUsers",
                type: "number",
                placeholder: "Enter the number of people using the fridge",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    }
];

export default step15;
