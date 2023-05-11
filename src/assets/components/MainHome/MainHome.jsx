import React, { useContext } from "react";
import Home from "../Home/Home";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext, ProductContext } from "../../../App";

const MainHome = () => {
  // const productsJobs = useContext(ProductContext || []);
  // const [cart, setCart] = useContext(CartContext || []);

  // const handleAddToCart = (product) => {
  //   console.log(id);
    // let newCart = [];
    // const exists = cart.find(
    //   (existingProduct) => existingProduct.id === product.id
    // );
    // if (!exists) {
    //   product.quantity = 1;
    //   newCart = [...cart, product];
    // } else {
    //   const rest = cart.filter(
    //     (existingProduct) => existingProduct.id !== product.id
    //   );
    //   exists.quantity = exists.quantity + 1;
    //   newCart = [...rest, exists];
    // }

    // setCart(newCart);
    // addToDb(product.id);
    // toast.success("Product Added! 🛒", { autoClose: 500 });
  //};

  //   const navigation = useNavigate();
  //   console.log(navigation.state);
  //   if (navigation.state === 'loading') {
  //     return <LoadingSpinner />
  //   }
  const { jobsProducts } = useLoaderData();
  //   console.log(jobsProducts);

  return (
    <div>
      <div>
        <Home></Home>
      </div>
      <div>
        <JobCategoryList></JobCategoryList>
        {/* <FeaturedJobs></FeaturedJobs> */}
        <div>
          <div className="pt-5 ">
            <div className="py-5 mx-4 my-3">
              <div className="mb-4">
                <div className="grid items-center justify-items-center text-center gap-4">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    Featured Jobs
                  </div>
                  <div className="pb-5 text-[#757575]">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4">
                <div className=" grid items-center grid-cols-1 md:grid-cols-2 gap-10 md:p-8 lg:p-8 p-2">
                  {jobsProducts.map((JobItems) => (
                    <FeaturedJobs
                      key={JobItems.id}
                      JobItems={JobItems}
                      // handleAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="Btn-button-indigo"> See All Jobs </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
