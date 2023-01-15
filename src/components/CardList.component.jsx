import Card from "./Card.component";
const CardList = ({productsList})=>{
    // console.log(productsList[0].image);
    console.log(productsList);
    return (
      <>
        <div className="cardList flex flex-col flex-wrap ">
          {productsList[0] !== undefined ? (
            <strong className="mt-12 ml-10 text-2xl">
              Products
            </strong>
          ) : (
            <h1>Loading...</h1>
          )}
          <div className="cards items-center justify-center flex flex-wrap m-auto w-[95vw]">
            {productsList.map((item) => {
              const product = {
                id: item.id,
                title: item.title,
                thumbnail: item.image,
                description: item.description,
                price: item.price,
                category: item.category
              };
              
              return (
                <>
                  <Card product={product} />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default CardList;
