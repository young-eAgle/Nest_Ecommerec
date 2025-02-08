import React from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../../components/catSlider/catSlider";
import Products from "../../components/produts/products";
import TopProducts from "./topProducts/TopProducts";
import Footer from "../../components/footer/footer";




const HomePage = ()=>{


    return(
        <div>
        <HomeSlider/>
        <CatSlider/>
        <section className="homeProducts">

            
                <div className="filterTabs-Container flex justify-between items-center px-6">
                <h2 className=" heading text-2xl font-bold ">Popular Products</h2>

                  
                   <ul className="filters-list flex gap-5">
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">All</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Milk & Diaries</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Coffes & Teas</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Pet Foods</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Meats</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Vegitables</li>
                    <li className="SingleCategory-list text-md font-semibold cursor-pointer hover:text-green-400">Fruits</li>
                   </ul>

                </div>
                <div className="products-container   bg-amber-600 flex items-center justify-center flex-wrap">
                    
                    
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>
                    <div className="Single_product">
                        <Products/>

                    </div>


                



            </div>


        </section>




     <section className="topProductsSection">

        <div className="products-container">


            <div className="products flex items-center justify-between gap-3 mt-10 ">

                <div className="product1">
                    <TopProducts title={"Top Selling"}/>
                </div>

                <div className="product1">
                    <TopProducts  title={"Treding Products"}/>
                </div>


                <div className="product1">
                    <TopProducts title={"Recently Added"}/>
                </div>


                <div className="product1">
                   <TopProducts title={"Top Rated"}/>
                </div>


            </div>
        </div>

 <br />
 <br />
 <br />
 <br />
 <br /> <br />
 <br />
 <br />
 <br />
 

     </section>

     <Footer/>



        
        </div>
    )

}

export default HomePage;