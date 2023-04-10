const register = async (data) => {
    await fetch('http://localhost:3001/api/auth/register', {
        body: data,
        method: 'POST',
    })
}

export default register
