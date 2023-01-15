import ReadMoreLess from "./ReadMoreLess.component";

const Card = ({product})=>{
    // console.log(product.title, product.thumbnail);
    return (
      <>
        <div class=" flex flex-col w-[314px] min-h-[520px] m-[1.5rem] border-solid border-2 shadow-lg">
          <div className=" img m-auto mt-2 mb-2 w-[280px] h-[280px] ">
            <img
              src={`${product.thumbnail}`}
              alt="product"
              className=" m-auto  w-[70%] h-[250px] "
            />
            <p className="text-end ">
              <span className="border-none rounded bg-blue-800 text-white p-2 border">{product.category}</span>
            </p>
          </div>
          <p class="brand_name mt-4 pr-[7px] pl-[7px] font-bold">{product.title}</p>
          <ReadMoreLess>{product.description}</ReadMoreLess>
        </div>
      </>
    );
}
export default Card;