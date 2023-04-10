export async function POST(req) {
    const body = await req.json()
    console.log('tsest')
    // res.status(200).json({message: 'ok'})
    return new Response(JSON.stringify(body))
}
