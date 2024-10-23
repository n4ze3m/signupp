import { Fileds } from "./type";

const step41: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "How many times do you check your watch/clock in the morning?",
                name: "morningClockChecks",
                type: "number",
                placeholder: "Enter number of times you check in the morning",
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
                label: "What type of timepiece do you check most often?",
                name: "preferredTimepiece",
                placeholder: "Select your most checked timepiece",
                required: true,
                options: [
                    { value: "Wristwatch", label: "Wristwatch" },
                    { value: "Phone clock", label: "Phone clock" },
                    { value: "Wall clock", label: "Wall clock" },
                    { value: "Computer time", label: "Computer time" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "How many times do you check the time during work/school hours?",
                name: "workTimeChecks",
                type: "number",
                placeholder: "Enter number of checks during work/school",
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
                label: "How many times do you check the time while commuting?",
                name: "commutingTimeChecks",
                type: "number",
                placeholder: "Enter number of checks while commuting",
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
                label: "How many times do you check the time before sleeping?",
                name: "beforeSleepChecks",
                type: "number",
                placeholder: "Enter number of checks before sleep",
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
                label: "Do you check time more frequently when waiting for something?",
                name: "waitingTimeChecks",
                placeholder: "Select your waiting time check frequency",
                required: true,
                options: [
                    { value: "Much more frequently", label: "Much more frequently" },
                    { value: "Slightly more", label: "Slightly more" },
                    { value: "Same as usual", label: "Same as usual" },
                    { value: "Less frequently", label: "Less frequently" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "How many times do you check time during meals?",
                name: "mealTimeChecks",
                type: "number",
                placeholder: "Enter number of checks during meals",
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
                label: "How many times do you check time during exercise/sports?",
                name: "exerciseTimeChecks",
                type: "number",
                placeholder: "Enter number of checks during exercise",
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
                label: "How many times do you check time during social gatherings?",
                name: "socialTimeChecks",
                type: "number",
                placeholder: "Enter number of checks during social events",
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
                label: "Which part of the day do you check time most frequently?",
                name: "peakCheckingTime",
                placeholder: "Select when you check time most often",
                required: true,
                options: [
                    { value: "Morning", label: "Morning" },
                    { value: "Afternoon", label: "Afternoon" },
                    { value: "Evening", label: "Evening" },
                    { value: "Night", label: "Night" }
                ]
            }
        ]
    }
];

export default step41;
