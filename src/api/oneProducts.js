const oneProducts = async (id) => {
    const data = await GET(`/products/${id}`);
    return data;
};

export default oneProducts;
