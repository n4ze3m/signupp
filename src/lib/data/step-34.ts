import { Fileds } from "./type";

const step34: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "How often do you clean your toilet?",
                name: "toiletCleaningFrequency",
                placeholder: "Select how often you clean your toilet",
                required: true,
                options: [
                    { value: "Daily", label: "Daily" },
                    { value: "Weekly", label: "Weekly" },
                    { value: "Bi-weekly", label: "Bi-weekly" },
                    { value: "Monthly", label: "Monthly" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer a specific brand of toilet paper?",
                name: "toiletPaperBrandPreference",
                placeholder: "Select if you prefer a specific brand of toilet paper",
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
                label: "Favorite toilet paper brand",
                name: "favoriteToiletPaperBrand",
                type: "text",
                placeholder: "Enter your favorite toilet paper brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a bidet?",
                name: "useBidet",
                placeholder: "Select if you use a bidet",
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
                label: "Do you prefer a specific toilet cleaner brand?",
                name: "toiletCleanerBrandPreference",
                placeholder: "Select if you prefer a specific toilet cleaner brand",
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
                label: "Favorite toilet cleaner brand",
                name: "favoriteToiletCleanerBrand",
                type: "text",
                placeholder: "Enter your favorite toilet cleaner brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use air fresheners in the toilet?",
                name: "useAirFresheners",
                placeholder: "Select if you use air fresheners in the toilet",
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
                label: "Do you prefer a specific type of toilet seat?",
                name: "toiletSeatPreference",
                placeholder: "Select if you prefer a specific type of toilet seat",
                required: true,
                options: [
                    { value: "Soft-close", label: "Soft-close" },
                    { value: "Standard", label: "Standard" },
                    { value: "Heated", label: "Heated" },
                    { value: "No preference", label: "No preference" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a specific toilet paper folding method?",
                name: "toiletPaperFoldingMethod",
                placeholder: "Select if you have a specific toilet paper folding method",
                required: true,
                options: [
                    { value: "Over", label: "Over" },
                    { value: "Under", label: "Under" },
                    { value: "No preference", label: "No preference" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Any other toilet-related preferences?",
                name: "otherToiletPreferences",
                type: "text",
                placeholder: "Enter any other toilet-related preferences",
                required: false
            }
        ]
    }
];

export default step34;
