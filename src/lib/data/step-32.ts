import { Fileds } from "./type";

const step32: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Are you a morning person or a night owl?",
                name: "morningOrNight",
                placeholder: "Select if you are a morning person or a night owl",
                required: true,
                options: [
                    { value: "Morning person", label: "Morning person" },
                    { value: "Night owl", label: "Night owl" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "What time do you usually wake up?",
                name: "wakeUpTime",
                type: "time",
                placeholder: "Enter the time you usually wake up",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "What time do you usually go to bed?",
                name: "bedTime",
                type: "time",
                placeholder: "Enter the time you usually go to bed",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "How many hours of sleep do you get on average?",
                name: "averageSleepHours",
                type: "number",
                placeholder: "Enter the average number of sleep hours",
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
                label: "Do you prefer working in the morning or afternoon?",
                name: "preferredWorkTime",
                placeholder: "Select your preferred work time",
                required: true,
                options: [
                    { value: "Morning", label: "Morning" },
                    { value: "Afternoon", label: "Afternoon" },
                    { value: "Evening", label: "Evening" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "What is your favorite time of day?",
                name: "favoriteTimeOfDay",
                type: "text",
                placeholder: "Enter your favorite time of day",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a digital or analog clock?",
                name: "clockPreference",
                placeholder: "Select your clock preference",
                required: true,
                options: [
                    { value: "Digital", label: "Digital" },
                    { value: "Analog", label: "Analog" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you often lose track of time?",
                name: "loseTrackOfTime",
                placeholder: "Select if you often lose track of time",
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
                label: "How do you usually spend your free time?",
                name: "freeTimeActivities",
                type: "text",
                placeholder: "Enter how you usually spend your free time",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer planning your time or being spontaneous?",
                name: "planningOrSpontaneity",
                placeholder: "Select if you prefer planning your time or being spontaneous",
                required: true,
                options: [
                    { value: "Planning", label: "Planning" },
                    { value: "Spontaneity", label: "Spontaneity" }
                ]
            }
        ]
    }
];

export default step32;
