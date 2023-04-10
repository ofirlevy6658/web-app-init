export async function POST(req, res) {
    const body = await req.json()
    console.log('bodyyyy', body)
    return new Response(JSON.stringify(body))
}
