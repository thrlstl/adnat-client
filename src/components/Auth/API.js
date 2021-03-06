const useAPI = () => {

    const env = 'production'
    const development = 'http://localhost:3000/'
    const production = 'https://adnat-api.herokuapp.com/'

    const checkEnvironment = () => {
        return env === 'development'
        ? development
        : production
    }

    const API_URL = checkEnvironment()

    return API_URL
}

export default useAPI;

