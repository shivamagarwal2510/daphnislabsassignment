const getCategories = async()=>{
    try {
        var url = "https://fakestoreapi.com/products/categories";
        const data = await (await fetch(url)).json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getCategories;