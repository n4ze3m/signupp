import { Fileds } from "./type";

const step38: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "What type of keyboard do you use?",
                name: "keyboardType",
                placeholder: "Select your keyboard type",
                required: true,
                options: [
                    { value: "Mechanical", label: "Mechanical" },
                    { value: "Membrane", label: "Membrane" },
                    { value: "Wireless", label: "Wireless" },
                    { value: "Ergonomic", label: "Ergonomic" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a preferred keyboard brand?",
                name: "preferredKeyboardBrand",
                placeholder: "Select if you have a preferred keyboard brand",
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
                label: "Favorite keyboard brand",
                name: "favoriteKeyboardBrand",
                type: "text",
                placeholder: "Enter your favorite keyboard brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a keyboard with backlighting?",
                name: "keyboardBacklighting",
                placeholder: "Select if your keyboard has backlighting",
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
                label: "Do you use any keyboard shortcuts frequently?",
                name: "useKeyboardShortcuts",
                placeholder: "Select if you use keyboard shortcuts frequently",
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
                label: "Most used keyboard shortcut",
                name: "mostUsedKeyboardShortcut",
                type: "text",
                placeholder: "Enter your most used keyboard shortcut",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer a specific keyboard layout?",
                name: "keyboardLayoutPreference",
                placeholder: "Select your keyboard layout preference",
                required: true,
                options: [
                    { value: "QWERTY", label: "QWERTY" },
                    { value: "AZERTY", label: "AZERTY" },
                    { value: "DVORAK", label: "DVORAK" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a keyboard wrist rest?",
                name: "useWristRest",
                placeholder: "Select if you use a keyboard wrist rest",
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
                label: "Do you customize your keyboard keys?",
                name: "customizeKeyboardKeys",
                placeholder: "Select if you customize your keyboard keys",
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
                label: "Any specific keyboard preferences?",
                name: "specificKeyboardPreferences",
                type: "text",
                placeholder: "Enter any specific keyboard preferences",
                required: false
            }
        ]
    }
];

export default step38;
