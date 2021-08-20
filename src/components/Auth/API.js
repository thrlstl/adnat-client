const useAPI = () => {

    const env = 'development'
    const development = 'http://localhost:3000/'
    const production = 'https://adnat-api.herokuapp.com/'

    const checkEnvironment = () => {
        return env === 'production'
        ? development
        : production
    }

    const API_URL = checkEnvironment()

    return API_URL
}

export default useAPI;

