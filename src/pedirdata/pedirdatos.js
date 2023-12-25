import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(data);
        }, 1000)
    })
}

export const ItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}
export default pedirDatos;