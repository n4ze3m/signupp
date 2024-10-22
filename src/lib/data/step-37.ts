import { Fileds } from "./type";

const step37: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "What is your primary web browser?",
                name: "primaryBrowser",
                placeholder: "Select your primary web browser",
                required: true,
                options: [
                    { value: "Chrome", label: "Chrome" },
                    { value: "Firefox", label: "Firefox" },
                    { value: "Safari", label: "Safari" },
                    { value: "Edge", label: "Edge" },
                    { value: "Opera", label: "Opera" },
                    { value: "Brave", label: "Brave" },
                    { value: "Vivaldi", label: "Vivaldi" },
                    { value: "Arc", label: "Arc" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use multiple browsers?",
                name: "useMultipleBrowsers",
                placeholder: "Select if you use multiple browsers",
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
                label: "Secondary browser (if any)",
                name: "secondaryBrowser",
                type: "text",
                placeholder: "Enter your secondary browser",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use browser extensions?",
                name: "useBrowserExtensions",
                placeholder: "Select if you use browser extensions",
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
                label: "Favorite browser extension",
                name: "favoriteBrowserExtension",
                type: "text",
                placeholder: "Enter your favorite browser extension",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer dark mode in your browser?",
                name: "preferDarkMode",
                placeholder: "Select if you prefer dark mode",
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
                label: "Do you sync your browser data across devices?",
                name: "syncBrowserData",
                placeholder: "Select if you sync your browser data",
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
                label: "Do you use a browser-based password manager?",
                name: "usePasswordManager",
                placeholder: "Select if you use a browser-based password manager",
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
                label: "Do you clear your browser history regularly?",
                name: "clearBrowserHistory",
                placeholder: "Select if you clear your browser history regularly",
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
                label: "Any specific browser preferences?",
                name: "specificBrowserPreferences",
                type: "text",
                placeholder: "Enter any specific browser preferences",
                required: false
            }
        ]
    }
];

export default step37;
