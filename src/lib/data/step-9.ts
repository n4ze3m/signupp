import { Fileds } from "./type";

const step9: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Streaming service you use daily",
                type: "text",
                name: "streamingService",
                placeholder: "Select your streaming service",
                required: true,
                options: [
                    {
                        value: "Netflix",
                        label: "Netflix"
                    },
                    {
                        value: "Amazon Prime",
                        label: "Amazon Prime"
                    },
                    {
                        value: "Hulu",
                        label: "Hulu"
                    },
                    {
                        value: "Disney+",
                        label: "Disney+"
                    },
                    {
                        value: "Apple TV+",
                        label: "Apple TV+"
                    },
                    {
                        value: "YouTube Premium",
                        label: "YouTube Premium"
                    },
                    {
                        value: "Other",
                        label: "Other"
                    }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Screen time per day",
                type: "number",
                name: "screenTimePerDay",
                placeholder: "Enter your screen time per day",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Favorite genre",
                type: "text",
                name: "favoriteGenre",
                placeholder: "Select your favorite genre",
                required: true,
                options: [
                    { value: "Action", label: "Action" },
                    { value: "Comedy", label: "Comedy" },
                    { value: "Drama", label: "Drama" },
                    { value: "Horror", label: "Horror" },
                    { value: "Sci-Fi", label: "Sci-Fi" },
                    { value: "Documentary", label: "Documentary" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of streaming subscriptions",
                type: "number",
                name: "numberOfSubscriptions",
                placeholder: "Enter number of streaming subscriptions",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred streaming quality",
                type: "text",
                name: "streamingQuality",
                placeholder: "Select your preferred streaming quality",
                required: true,
                options: [
                    { value: "SD", label: "SD" },
                    { value: "HD", label: "HD" },
                    { value: "4K", label: "4K" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average number of movies watched per month",
                type: "number",
                name: "moviesPerMonth",
                placeholder: "Enter average number of movies watched per month",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Device most used for streaming",
                type: "text",
                name: "streamingDevice",
                placeholder: "Select your most used streaming device",
                required: true,
                options: [
                    { value: "Smart TV", label: "Smart TV" },
                    { value: "Laptop", label: "Laptop" },
                    { value: "Tablet", label: "Tablet" },
                    { value: "Smartphone", label: "Smartphone" },
                    { value: "Gaming Console", label: "Gaming Console" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite streaming original series",
                type: "text",
                name: "favoriteOriginalSeries",
                placeholder: "Enter your favorite streaming original series",
                required: false,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you share your streaming account?",
                type: "text",
                name: "shareAccount",
                placeholder: "Select if you share your account",
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
                label: "Preferred time for streaming",
                type: "text",
                name: "streamingTime",
                placeholder: "Enter your preferred time for streaming",
                required: false,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you watch live streams?",
                type: "text",
                name: "watchLiveStreams",
                placeholder: "Select if you watch live streams",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    }
];

export default step9