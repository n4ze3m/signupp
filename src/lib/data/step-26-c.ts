import { Fileds } from "./type";

const step26C: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Primary mode of transportation to office",
                name: "transportationMode",
                placeholder: "Select your primary mode of transportation",
                required: true,
                options: [
                    { value: "Car", label: "Car" },
                    { value: "Public Transit", label: "Public Transit" },
                    { value: "Bicycle", label: "Bicycle" },
                    { value: "Walking", label: "Walking" },
                    { value: "Carpool", label: "Carpool" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average commute time (minutes)",
                name: "commuteTime",
                type: "number",
                placeholder: "Enter your average commute time in minutes",
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
                label: "Do you work from home occasionally?",
                name: "workFromHomeOccasionally",
                placeholder: "Select if you work from home occasionally",
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
                label: "Office location (city)",
                name: "officeLocationCity",
                type: "text",
                placeholder: "Enter the city of your office location",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Office location (address)",
                name: "officeLocationAddress",
                type: "text",
                placeholder: "Enter the address of your office location",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have flexible working hours?",
                name: "flexibleWorkingHours",
                placeholder: "Select if you have flexible working hours",
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
                label: "Do you travel for work frequently?",
                name: "travelForWork",
                placeholder: "Select if you travel for work frequently",
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
                label: "Distance to office (km)",
                name: "distanceToOffice",
                type: "number",
                placeholder: "Enter the distance to your office in kilometers",
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
                label: "Do you have parking at your office?",
                name: "officeParking",
                placeholder: "Select if you have parking at your office",
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
                label: "Is your office location accessible by public transit?",
                name: "publicTransitAccess",
                placeholder: "Select if your office location is accessible by public transit",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    }
];

export default step26C;
