import getCategories from "../apis/getCategories";
import { useEffect, useState, useContext } from "react";
import { CategorySearchContext } from "../contexts/CategorySearch.context";
import { TitleSearchContext } from "../contexts/TitleSearch.context";

const SearchForm = ()=>{
    const [categoryList, setCategoryList] = useState([]);
    const {categorySearch, setCategorySearch} = useContext(CategorySearchContext);
    const {titleSearch, setTitleSearch} = useContext(TitleSearchContext);
    // const [categorySearch, setCategorySearch] = useState("");
    // const [titleSearch, setTitleSearch] = useState("");
    useEffect(() => {
      const Categories = getCategories();
      Categories.then((data) => {
        setCategoryList(data);
        // console.log("data", data);
      });
    }, []);
    const categoryChange = (e)=>{
        setCategorySearch(e.target.value);
    }
    const titleChange = (e)=>{
        setTitleSearch(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    // console.log(categorySearch, titleSearch);
    return (
      <>
      <form className="flex items-center justify-items-end" onSubmit = {submitHandler}>
      <div className="h-14 items-center justify-items-end flex w-[100%] bg-blue-700">
            <select
              name="category"
              className="border border-gray-400 rounded mr-2 ml-auto pl-2 h-[35px]  w-[40vw]"
              onChange={categoryChange}
            >
              <option value="" selected="selected">
                Select Category
              </option>
              {categoryList.map((category) => {
                return (
                  <>
                    <option value={`${category}`}>{category}</option>
                  </>
                );
              })}
            </select>
            <input
              type="text"
              name="title"
              placeholder="Search Products..."
              value={titleSearch}
              onChange={titleChange}
              className="border border-gray-400 rounded mr-4 ml-4 pl-2 h-[35px]  w-[40vw]"
            />
            </div>
          </form>
      </>
    );
}
export default SearchForm;