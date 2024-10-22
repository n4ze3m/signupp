import { Fileds } from "./type";

const step20: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Dominant hand",
                name: "dominantHand",
                placeholder: "Select your dominant hand",
                required: true,
                options: [
                    { value: "Right", label: "Right" },
                    { value: "Left", label: "Left" },
                    { value: "Ambidextrous", label: "Ambidextrous" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of fingers on dominant hand",
                name: "fingersOnDominantHand",
                type: "number",
                placeholder: "Enter the number of fingers on your dominant hand",
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
                label: "Ring size",
                name: "ringSize",
                type: "text",
                placeholder: "Enter your ring size",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you wear rings?",
                name: "wearRings",
                placeholder: "Select if you wear rings",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have any hand tattoos?",
                name: "handTattoos",
                placeholder: "Select if you have hand tattoos",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you play a musical instrument?",
                name: "playInstrument",
                placeholder: "Select if you play a musical instrument",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite hand cream brand",
                name: "favoriteHandCreamBrand",
                type: "text",
                placeholder: "Enter your favorite hand cream brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have any finger injuries?",
                name: "fingerInjuries",
                placeholder: "Select if you have any finger injuries",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Hand span (cm)",
                name: "handSpan",
                type: "number",
                placeholder: "Enter your hand span in centimeters",
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
                label: "Do you use hand sanitizer regularly?",
                name: "useHandSanitizer",
                placeholder: "Select if you use hand sanitizer regularly",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    }
];

export default step20;
