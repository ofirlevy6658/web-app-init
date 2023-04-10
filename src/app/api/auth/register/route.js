export async function POST(req, res) {
    const body = await req.json()
    // res.status(200).json({message: 'ok'})
    return new Response(JSON.stringify(body))
}
