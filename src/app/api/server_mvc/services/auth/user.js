// import {connectMongo} from '../../../../../../utils/db.js'
import User from '../../models/auth/user.js'

export const createUser = async (userBody) => {
    // await connectMongo()
    const user = new User(userBody)
    console.log('user', user)

    await user.save()
}
