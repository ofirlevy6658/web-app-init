import {createUser} from '../../server_mvc/services/auth/user.js'

export async function POST(req) {
    try {
        const body = await req.json()
        const response = await createUser(body)
        return new Response(JSON.stringify(response))
    } catch (error) {
        console.log('error', error)
    }
}
