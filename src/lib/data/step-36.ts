import { Fileds } from "./type";

const step36: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Do you drink coffee?",
                name: "drinkCoffee",
                placeholder: "Select if you drink coffee",
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
                label: "How many cups of coffee do you drink per day?",
                name: "cupsOfCoffeePerDay",
                placeholder: "Select the number of cups per day",
                required: true,
                options: [
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                    { value: "4 or more", label: "4 or more" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "What is your preferred type of coffee?",
                name: "preferredCoffeeType",
                placeholder: "Select your preferred type of coffee",
                required: true,
                options: [
                    { value: "Espresso", label: "Espresso" },
                    { value: "Latte", label: "Latte" },
                    { value: "Cappuccino", label: "Cappuccino" },
                    { value: "Americano", label: "Americano" },
                    { value: "Black", label: "Black" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you add sugar to your coffee?",
                name: "addSugar",
                placeholder: "Select if you add sugar",
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
                label: "Do you add milk or cream to your coffee?",
                name: "addMilkOrCream",
                placeholder: "Select if you add milk or cream",
                required: true,
                options: [
                    { value: "Milk", label: "Milk" },
                    { value: "Cream", label: "Cream" },
                    { value: "Neither", label: "Neither" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer hot or iced coffee?",
                name: "hotOrIcedCoffee",
                placeholder: "Select your preference",
                required: true,
                options: [
                    { value: "Hot", label: "Hot" },
                    { value: "Iced", label: "Iced" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a favorite coffee shop?",
                name: "favoriteCoffeeShop",
                placeholder: "Select if you have a favorite coffee shop",
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
                label: "Favorite coffee shop name",
                name: "favoriteCoffeeShopName",
                type: "text",
                placeholder: "Enter your favorite coffee shop name",
                required: false
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you grind your own coffee beans?",
                name: "grindOwnBeans",
                placeholder: "Select if you grind your own beans",
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
                label: "Any specific coffee preferences?",
                name: "specificCoffeePreferences",
                type: "text",
                placeholder: "Enter any specific coffee preferences",
                required: false
            }
        ]
    }
];

export default step36;
