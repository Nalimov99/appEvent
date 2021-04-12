const url = 'https://appevent.ru/dev/task1/catalog'

export default class Products {
    static getProducts = async () => {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('Server Error')
        }
        return await response.json()
    }
}