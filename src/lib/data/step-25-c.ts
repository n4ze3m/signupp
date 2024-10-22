import { Fileds } from "./type";

const step25C: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a good relationship with your manager?",
                name: "relationshipWithManager",
                placeholder: "Select your relationship status with your manager",
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
                inputType: "select",
                label: "Do you feel supported by your boss?",
                name: "supportFromBoss",
                placeholder: "Select if you feel supported by your boss",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you collaborate well with coworkers?",
                name: "collaborationWithCoworkers",
                placeholder: "Select your collaboration level with coworkers",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have regular meetings with your manager?",
                name: "meetingsWithManager",
                placeholder: "Select if you have regular meetings with your manager",
                required: true,
                options: [
                    { value: "Weekly", label: "Weekly" },
                    { value: "Bi-weekly", label: "Bi-weekly" },
                    { value: "Monthly", label: "Monthly" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you receive constructive feedback from your boss?",
                name: "feedbackFromBoss",
                placeholder: "Select if you receive constructive feedback from your boss",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you socialize with coworkers outside of work?",
                name: "socializeWithCoworkers",
                placeholder: "Select if you socialize with coworkers outside of work",
                required: true,
                options: [
                    { value: "Frequently", label: "Frequently" },
                    { value: "Occasionally", label: "Occasionally" },
                    { value: "Rarely", label: "Rarely" },
                    { value: "Never", label: "Never" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you feel valued by your manager?",
                name: "valuedByManager",
                placeholder: "Select if you feel valued by your manager",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have conflicts with coworkers?",
                name: "conflictsWithCoworkers",
                placeholder: "Select if you have conflicts with coworkers",
                required: true,
                options: [
                    { value: "Never", label: "Never" },
                    { value: "Rarely", label: "Rarely" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Often", label: "Often" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you feel your boss recognizes your achievements?",
                name: "recognitionFromBoss",
                placeholder: "Select if your boss recognizes your achievements",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you feel comfortable discussing issues with your manager?",
                name: "comfortableDiscussingWithManager",
                placeholder: "Select if you feel comfortable discussing issues with your manager",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Often", label: "Often" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Rarely", label: "Rarely" }
                ]
            }
        ]
    }
];

export default step25C;
