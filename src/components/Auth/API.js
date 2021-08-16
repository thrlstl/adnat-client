// DYNAMIC API URL 
// Set environment variable equal to
// 'development' or 'production'

export default function API() {
    const env = 'production'
    const development = 'http://localhost:3000/'
    const production = 'https://adnat-api.herokuapp.com/'

    return env === 'development'
    ? development
    : production
}