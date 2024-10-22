import { Fileds } from "./type";

const step35: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "What is your preferred clothing style?",
                name: "preferredClothingStyle",
                placeholder: "Select your preferred clothing style",
                required: true,
                options: [
                    { value: "Casual", label: "Casual" },
                    { value: "Formal", label: "Formal" },
                    { value: "Sporty", label: "Sporty" },
                    { value: "Trendy", label: "Trendy" },
                    { value: "Vintage", label: "Vintage" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a favorite clothing brand?",
                name: "favoriteClothingBrand",
                placeholder: "Select if you have a favorite clothing brand",
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
                label: "Favorite clothing brand",
                name: "favoriteClothingBrandName",
                type: "text",
                placeholder: "Enter your favorite clothing brand",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer online or in-store shopping for clothes?",
                name: "shoppingPreference",
                placeholder: "Select your shopping preference",
                required: true,
                options: [
                    { value: "Online", label: "Online" },
                    { value: "In-store", label: "In-store" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "How often do you buy new clothes?",
                name: "buyNewClothesFrequency",
                placeholder: "Select how often you buy new clothes",
                required: true,
                options: [
                    { value: "Weekly", label: "Weekly" },
                    { value: "Monthly", label: "Monthly" },
                    { value: "Quarterly", label: "Quarterly" },
                    { value: "Annually", label: "Annually" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you follow fashion trends?",
                name: "followFashionTrends",
                placeholder: "Select if you follow fashion trends",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "Sometimes", label: "Sometimes" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer sustainable clothing?",
                name: "sustainableClothingPreference",
                placeholder: "Select if you prefer sustainable clothing",
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
                label: "Do you have a favorite color for clothes?",
                name: "favoriteClothingColor",
                placeholder: "Select if you have a favorite color for clothes",
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
                label: "Favorite color for clothes",
                name: "favoriteClothingColorName",
                type: "text",
                placeholder: "Enter your favorite color for clothes",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer comfort over style?",
                name: "comfortOverStyle",
                placeholder: "Select if you prefer comfort over style",
                required: true,
                options: [
                    { value: "Comfort", label: "Comfort" },
                    { value: "Style", label: "Style" },
                    { value: "Both equally", label: "Both equally" }
                ]
            }
        ]
    }
];

export default step35;
