```javascript
const cat = {
    name: "Pussic"
}

const usersSettings = [
    {
        id: "wsedrftgyhuj",
        avatar: "cat.png",
        theme: "dark",
        notifications: true
    },
    {
        id: "5d6f7tgy8u",
        avatar: "cat.png",
        theme: "dark",
        notifications: true
    }
]

const user = {
    name: "Ivan",
    settingsId: "wsedrftgyhuj",
}

const userSettings = usersSettings.find(settings => settings.id === user.settingsId)

const bookGenres = [
    {
        id: 1,
        name: "Horror",
    },
    {
        id: 2,
        name: "Fantasy",
    },
    {
        id: 3,
        name: "Romance",
    },
    {
        id: 4,
        name: "Mystery",
    }
]

const book = {
    id: 1,
    title: "The Hobbit",
    genreIds: [1, 2, 3],
}

```