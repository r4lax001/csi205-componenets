const users = [
    { user: 'user', pass: '123', role: 'user', token: 'user_token' },
    { user: 'admin', pass: '123', role: 'admin', token: 'admin_token' },
    { user: 'guest', pass: '123', role: 'guest', token: 'guest_token' },
]

export function vfu(username, password) {
    const userFound = users.find((u) => {
        return u.user === username && u.pass === password
    })

    return userFound ? { role: userFound.role, token: userFound.token } : null
}