import 'dotenv/config'
import { connect } from 'mongoose'

function dbConnect() {
  const DB_URI: string = process.env.DB_URI || ''
  connect(DB_URI)
    .then(() => {
    console.log('Database connected')
  })
    .catch((err) => {
    console.log(err)
  })
}

export {dbConnect}