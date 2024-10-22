import { Fileds } from "./type";

const final: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "How would you rate the signup process?",
                name: "signupProcessRating",
                placeholder: "Select your rating for the signup process",
                required: true,
                options: [
                    { value: "Excellent", label: "Excellent" },
                    { value: "Good", label: "Good" },
                    { value: "Average", label: "Average" },
                    { value: "Poor", label: "Poor" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "What did you like about the signup process?",
                name: "signupProcessLikes",
                type: "text",
                placeholder: "Enter what you liked about the signup process",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "What improvements would you suggest for the signup process?",
                name: "signupProcessImprovements",
                type: "text",
                placeholder: "Enter your suggestions for improvements",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Was the signup process easy to understand?",
                name: "signupProcessEase",
                placeholder: "Select if the signup process was easy to understand",
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
                label: "Did you encounter any issues during signup?",
                name: "signupIssuesEncountered",
                placeholder: "Select if you encountered any issues",
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
                label: "Please describe any issues you encountered",
                name: "signupIssuesDescription",
                type: "text",
                placeholder: "Enter a description of any issues",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Would you recommend our signup process to others?",
                name: "recommendSignupProcess",
                placeholder: "Select if you would recommend the signup process",
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
                inputType: "textarea",
                label: "Any additional feedback?",
                name: "additionalFeedback",
                type: "text",
                placeholder: "Enter any additional feedback",
                required: false
            }
        ]
    }
];

export default final;
