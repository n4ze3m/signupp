import { Fileds } from "./type";

const step17: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of water bottle",
                name: "waterBottleBrand",
                type: "text",
                placeholder: "Enter the brand of your water bottle",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Capacity of water bottle (liters)",
                name: "waterBottleCapacity",
                type: "number",
                placeholder: "Enter the capacity of your water bottle in liters",
                required: true,
                regex: /^\d+(\.\d+)?$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Material of water bottle",
                name: "waterBottleMaterial",
                placeholder: "Select the material of your water bottle",
                required: true,
                options: [
                    { value: "Plastic", label: "Plastic" },
                    { value: "Stainless Steel", label: "Stainless Steel" },
                    { value: "Glass", label: "Glass" },
                    { value: "Aluminum", label: "Aluminum" },
                    { value: "Other", label: "Other" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average number of refills per day",
                name: "waterBottleRefills",
                type: "number",
                placeholder: "Enter the average number of refills per day",
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
                label: "Do you track your water intake?",
                name: "trackWaterIntake",
                placeholder: "Select if you track your water intake",
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
                label: "Preferred temperature of drinking water",
                name: "preferredWaterTemperature",
                type: "text",
                placeholder: "Enter your preferred temperature (e.g., cold, room temperature)",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a water filter?",
                name: "useWaterFilter",
                placeholder: "Select if you use a water filter",
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
                label: "Daily water intake goal (liters)",
                name: "dailyWaterIntakeGoal",
                type: "number",
                placeholder: "Enter your daily water intake goal in liters",
                required: true,
                regex: /^\d+(\.\d+)?$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer sparkling or still water?",
                name: "waterPreference",
                placeholder: "Select your water preference",
                required: true,
                options: [
                    { value: "Sparkling", label: "Sparkling" },
                    { value: "Still", label: "Still" }
                ],
                type: ""
            }
        ]
    }
];

export default step17;
