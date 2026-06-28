
const filterCategories = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Food"
    },
    {
        id: 3,
        name: "Drinks"
    },
    {
        id: 4,
        name: "Snacks"
    },
    {
        id: 5,
        name: "Special"
    }
];


export const state = {
    currentScreen: "MENU",
    currentFilterId: 3,
    filterCategories,
    menuItems: [
        {
            id: 1,
            name: "Rizoto me Perime",
            description: "Karrot, Kungull, Domate",
            price: 800,
            image: "",
            categoryIds: [2]
        },
        {

            id: 2,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [2]

        },


// Temporary shit:


        {

            id: 3,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },

        {

            id: 4,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },

        {

            id: 5,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },

        {

            id: 6,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },

        {

            id: 7,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },

        {

            id: 8,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },
        {

            id: 9,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3]

        },
        {

            id: 10,
            name: "Rizoto me Fruta Deti",
            description: "Midhje, Karkalec, Kallamar",
            price: 950,
            image: "",
            categoryIds: [3, 5]

        },
    ]
}