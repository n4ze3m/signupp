import { Fileds } from "./type";

const step39: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "What type of mouse do you use?",
                name: "mouseType",
                placeholder: "Select your mouse type",
                required: true,
                options: [
                    { value: "Optical", label: "Optical" },
                    { value: "Laser", label: "Laser" },
                    { value: "Wireless", label: "Wireless" },
                    { value: "Trackball", label: "Trackball" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a preferred mouse brand?",
                name: "preferredMouseBrand",
                placeholder: "Select if you have a preferred mouse brand",
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
                label: "Favorite mouse brand",
                name: "favoriteMouseBrand",
                type: "text",
                placeholder: "Enter your favorite mouse brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a mouse with additional buttons?",
                name: "mouseWithAdditionalButtons",
                placeholder: "Select if your mouse has additional buttons",
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
                label: "Do you use a mouse pad?",
                name: "useMousePad",
                placeholder: "Select if you use a mouse pad",
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
                label: "Do you prefer a specific mouse sensitivity (DPI)?",
                name: "mouseSensitivityPreference",
                placeholder: "Select your mouse sensitivity preference",
                required: true,
                options: [
                    { value: "Low", label: "Low" },
                    { value: "Medium", label: "Medium" },
                    { value: "High", label: "High" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a vertical mouse?",
                name: "useVerticalMouse",
                placeholder: "Select if you use a vertical mouse",
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
                label: "Do you customize your mouse settings?",
                name: "customizeMouseSettings",
                placeholder: "Select if you customize your mouse settings",
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
                label: "Most used mouse function",
                name: "mostUsedMouseFunction",
                type: "text",
                placeholder: "Enter your most used mouse function",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Any specific mouse preferences?",
                name: "specificMousePreferences",
                type: "text",
                placeholder: "Enter any specific mouse preferences",
                required: false
            }
        ]
    }
];

export default step39;
