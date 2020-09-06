import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertProduct = payload => api.post(`/Product`, payload)
export const getAllProducts = () => api.get(`/Products`)
export const updateProductById = (id, payload) => api.put(`/Product/${id}`, payload)
export const deleteProductById = id => api.delete(`/Product/${id}`)
export const getProductById = id => api.get(`/Product/${id}`)

const apis = {
    insertProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis
