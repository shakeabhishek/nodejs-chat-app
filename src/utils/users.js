const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room) {
        return {
            error: 'Username and Room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// addUser({
//     id: 1,
//     username: 'Abhishek',
//     room: 'Memes'
// })

// addUser({
//     id: 2,
//     username: 'Nikhil',
//     room: 'Memes'
// })

// addUser({
//     id: 3,
//     username: 'Rutvik',
//     room: 'Money'
// })

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.toLowerCase()
    return users.filter((user) => user.room === room)
}

// console.log(getUser(1))
// console.log(getUser(3))
// console.log(getUsersInRoom('Money'))

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
