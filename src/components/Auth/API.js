// DYNAMIC API URL 
// Set environment variable equal to
// 'development' or 'production'

export default function API() {
    const env = 'development'
    const development = 'http://localhost:3000/'
    const production = 'https://adnat-client.herokuapp.com/'

    return env === 'production'
    ? development
    : production
}