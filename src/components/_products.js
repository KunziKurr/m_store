
function Products() {
    const products_list = [
        {
            id: 'Ov',
            image: "https://cdn.pixabay.com/photo/2018/04/12/11/37/apple-3313209_1280.jpg",
            g_name: "grapes",
            g_desc:"We offer cheap fresh groceries delivered right to your door. Our team of experts will take care of the rest, delivering groceries that are fresh, delicious and affordable. Order online or call us today!",
            price: 500
        },
        {
            id: 'ml',
            image: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",
            g_name: "water melons",
            g_desc:"Do you love watermelons? No? Well, maybe you should! For a limited time only,save up to 50% on watermelons from our selection of top quality fresh and cheap groceries. Get your melon today and enjoy the sweet, juicy taste of summer all year long!",
            price: 500
        },
        {
            id: 'orr',
            image: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
            g_name: "raw oranges",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping? Check out the raw oranges! These delicious fruits are delivered directly to your door, guaranteed to be fresh, and at a fraction of the cost of store-bought produce. Plus, they're perfect for adding natural sweetness and color to your meals.",
            price: 500
            
        },
        {
            id: 'pine',
            image: "https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg",
            g_name: "pineapples",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping? Check out the raw oranges! These delicious fruits are delivered directly to your door, guaranteed to be fresh, and at a fraction of the cost of store-bought produce. Plus, they're perfect for adding natural sweetness and color to your meals.",
            price: 500
        },
        {
            id: 'berry',
            image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
            g_name: "berries",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping? Check out the raw oranges! These delicious fruits are delivered directly to your door, guaranteed to be fresh, and at a fraction of the cost of store-bought produce. Plus, they're perfect for adding natural sweetness and color to your meals.",
            price: 500
        },
        {
            id: 'ttt',
            image: "https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg",
            g_name: "tree tomatoes",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping? Check out the raw oranges! These delicious fruits are delivered directly to your door, guaranteed to be fresh, and at a fraction of the cost of store-bought produce. Plus, they're perfect for adding natural sweetness and color to your meals.",
            price: 500
        }
    
    ]


    return (
      <section className="products">
            {/* Products */}
            <div className="products_wrapper">
                <div className="products_wrapper_container">
                    <div className="products_wrapper_container_list">
                        <ul className="products_wrapper_container_list_ul">
                            {products_list.map((p_item, i) => {
                                 return (
                                <li className="products_wrapper_container_list_ul_li" key={p_item.id}>
                                    <img src={p_item.image} alt="" className="products_wrapper_container_list_ul_li_img" />
                                    <p className="products_wrapper_container_list_ul_li_name">
                                        {p_item.g_name}
                                    </p>
                                    <p className="products_wrapper_container_list_ul_li_desc">
                                        Description of prodcts will come here (few characters)
                                    </p>
                                    <div className="products_wrapper_container_list_ul_li_btns">
                                        <button className="products_wrapper_container_list_ul_li_price">$3.00</button>
                                        <button className="products_wrapper_container_list_ul_li_buy">
                                            <svg id="icon-basket" height="25" width="25" viewBox="0 0 32 32">
                                                <path d="M0 14v-3h3.75l7.531-7.532c-0.050-0.149-0.093-0.301-0.093-0.468 0-0.829 0.671-1.5 1.5-1.5 0.828 0 1.5 0.671 1.5 1.5s-0.672 1.5-1.5 1.5c-0.111 0-0.209-0.041-0.312-0.063l-6.564 6.563h19.354l-6.525-6.579c-0.129 0.036-0.252 0.079-0.391 0.079-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.671 1.5 1.5c0 0.153-0.045 0.293-0.088 0.433l7.567 7.567h3.771v3h-31zM24.869 28.902c-0.293 1.172-1.105 1.107-1.105 1.107l-16.595 0.032c-0.846 0-1.073-1.072-1.073-1.072l-4.387-13.955 27.574-0.026-4.414 13.914zM9.999 17h-1v5h1v-5zM9.999 23h-1v5h1v-5zM11.999 17h-0.999v5h0.999v-5zM11.999 23h-0.999v5h0.999v-5zM13.999 17h-1v5h1v-5zM13.999 23h-1v5h1v-5zM16 17h-1v5h1v-5zM16 23h-1v5h1v-5zM18 17h-1v5h1v-5zM18 23h-1v5h1v-5zM20 17h-1v5h1v-5zM20 23h-1v5h1v-5zM22 17h-1v5h1v-5zM22 23h-1v5h1v-5z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>
            </div>
      </section>
    );
  }
  
  export default Products;
  