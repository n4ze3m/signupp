import { Fileds } from "./type";

const step10: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "How many years have you been driving?",
                type: "number",
                name: "yearsDriving",
                placeholder: "Enter number of years",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Type of vehicle you drive most often",
                type: "text",
                name: "vehicleType",
                placeholder: "Select vehicle type",
                required: true,
                options: [
                    { value: "Car", label: "Car" },
                    { value: "Motorcycle", label: "Motorcycle" },
                    { value: "Truck", label: "Truck" },
                    { value: "SUV", label: "SUV" },
                    { value: "Van", label: "Van" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average miles driven per week",
                type: "number",
                name: "milesPerWeek",
                placeholder: "Enter average miles per week",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a valid driver's license?",
                type: "text",
                name: "validLicense",
                placeholder: "Select if you have a valid license",
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
                label: "Preferred driving time",
                type: "text",
                name: "preferredDrivingTime",
                placeholder: "Select your preferred driving time",
                required: true,
                options: [
                    { value: "Morning", label: "Morning" },
                    { value: "Afternoon", label: "Afternoon" },
                    { value: "Evening", label: "Evening" },
                    { value: "Night", label: "Night" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite road trip destination",
                type: "text",
                name: "favoriteDestination",
                placeholder: "Enter your favorite road trip destination",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you listen to music while driving?",
                type: "text",
                name: "listenToMusic",
                placeholder: "Select if you listen to music",
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
                label: "Number of traffic violations in the past year",
                type: "number",
                name: "trafficViolations",
                placeholder: "Enter number of traffic violations",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a GPS for navigation?",
                type: "text",
                name: "useGPS",
                placeholder: "Select if you use a GPS",
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
                label: "Preferred car brand",
                type: "text",
                name: "preferredCarBrand",
                placeholder: "Enter your preferred car brand",
                required: true,
            }
        ]
    }
];

export default step10;