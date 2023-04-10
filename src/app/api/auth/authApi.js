const signup = async (data) => {
    await fetch('http://localhost:3000/api/auth/register', {
        body: data,
        method: 'POST',
    })
}

export default signup
