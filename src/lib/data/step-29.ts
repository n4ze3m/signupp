import { Fileds } from "./type";

const step29: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you sneeze frequently?",
                name: "frequentSneeze",
                placeholder: "Select if you sneeze frequently",
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
                label: "Average number of sneezes per day",
                name: "sneezesPerDay",
                type: "number",
                placeholder: "Enter the average number of sneezes per day",
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
                label: "Do you have any known allergies?",
                name: "knownAllergies",
                placeholder: "Select if you have any known allergies",
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
                label: "Common triggers for sneezing",
                name: "sneezeTriggers",
                type: "text",
                placeholder: "Enter common triggers for your sneezing",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use any medication for sneezing?",
                name: "medicationForSneezing",
                placeholder: "Select if you use any medication for sneezing",
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
                label: "Do you sneeze more during a particular season?",
                name: "seasonalSneezing",
                placeholder: "Select if you sneeze more during a particular season",
                required: true,
                options: [
                    { value: "Spring", label: "Spring" },
                    { value: "Summer", label: "Summer" },
                    { value: "Fall", label: "Fall" },
                    { value: "Winter", label: "Winter" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you sneeze in response to bright light?",
                name: "sneezeToBrightLight",
                placeholder: "Select if you sneeze in response to bright light",
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
                label: "Do you cover your mouth when sneezing?",
                name: "coverMouthWhenSneezing",
                placeholder: "Select if you cover your mouth when sneezing",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Never", label: "Never" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Do you use tissues or handkerchiefs?",
                name: "tissuesOrHandkerchiefs",
                type: "text",
                placeholder: "Enter if you use tissues or handkerchiefs",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you experience other symptoms with sneezing?",
                name: "otherSymptomsWithSneezing",
                placeholder: "Select if you experience other symptoms with sneezing",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    }
];

export default step29;
