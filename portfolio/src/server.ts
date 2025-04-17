import { testDatabaseConnection } from './app/actions'

testDatabaseConnection().then(() => {
    console.log('You successfully connected to MongoDB!')
})
