import { Fileds } from "./type";

const step28: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you frequently travel by airplane?",
                name: "frequentAirplaneTravel",
                placeholder: "Select if you frequently travel by airplane",
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
                label: "Average number of flights per year",
                name: "flightsPerYear",
                type: "number",
                placeholder: "Enter the average number of flights per year",
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
                label: "Preferred airline",
                name: "preferredAirline",
                placeholder: "Select your preferred airline",
                required: true,
                options: [
                    { value: "Delta", label: "Delta" },
                    { value: "American Airlines", label: "American Airlines" },
                    { value: "United", label: "United" },
                    { value: "Southwest", label: "Southwest" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred class for air travel",
                name: "preferredTravelClass",
                placeholder: "Select your preferred class for air travel",
                required: true,
                options: [
                    { value: "Economy", label: "Economy" },
                    { value: "Business", label: "Business" },
                    { value: "First Class", label: "First Class" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a frequent flyer membership?",
                name: "frequentFlyerMembership",
                placeholder: "Select if you have a frequent flyer membership",
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
                label: "Longest flight duration (hours)",
                name: "longestFlightDuration",
                type: "number",
                placeholder: "Enter the duration of your longest flight in hours",
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
                label: "Do you prefer window or aisle seats?",
                name: "seatPreference",
                placeholder: "Select your seat preference",
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
                label: "Do you use in-flight Wi-Fi?",
                name: "useInFlightWiFi",
                placeholder: "Select if you use in-flight Wi-Fi",
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
                label: "Do you find air travel comfortable?",
                name: "airTravelComfort",
                placeholder: "Select if you find air travel comfortable",
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
                label: "Favorite destination by air",
                name: "favoriteAirDestination",
                type: "text",
                placeholder: "Enter your favorite destination by air",
                required: false
            }
        ]
    }
];

export default step28;
