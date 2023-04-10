export async function POST(req, res) {
    const body = await req.json()
    console.log('test')
    // res.status(200).json({message: 'ok'})
    return new Response(JSON.stringify(body))
}
