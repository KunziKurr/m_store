
function AssortedProducts() {
    const products_list = [
        {
            id: 'Ov',
            image: "https://cdn.pixabay.com/photo/2018/04/12/11/37/apple-3313209_1280.jpg",
            g_name: "grapes",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'ml',
            image: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",
            g_name: "water melons",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'orr',
            image: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
            g_name: "raw oranges",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
            
        },
        {
            id: 'pine',
            image: "https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg",
            g_name: "pineapples",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'berry',
            image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
            g_name: "berries",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'ttt',
            image: "https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg",
            g_name: "tree tomatoes",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'orr',
            image: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
            g_name: "raw oranges",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
            
        },
        {
            id: 'pine',
            image: "https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg",
            g_name: "pineapples",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'berry',
            image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
            g_name: "berries",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
        {
            id: 'ttt',
            image: "https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg",
            g_name: "tree tomatoes",
            g_desc:"Looking for a way to add a touch of freshness and convenience to your grocery shopping",
            price: 500
        },
    
    ]


    return (
      <section className="assorted_products">
            {/* assorted */}
            <div className="assorted_products_wrapper">
                <div className="assorted_products_wrapper_container">
                    <h1 className="assorted_products_wrapper_container_heading">
                        Assorted Groceries
                    </h1>
                    <ul className="assorted_products_wrapper_container_ul">
                        {products_list.map((p_item, i) => {
                        console.info(p_item.image)
                                 return (
                        <li className="assorted_products_wrapper_container_ul_li">
                                         <div className="assorted_products_wrapper_container_ul_li_img" style={{
                                             backgroundImage: `url(${p_item.image})`,
                                             backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: 'center',
                            }}></div>
                            <p className="assorted_products_wrapper_container_ul_li_name">{p_item.g_name}</p>
                            <div className="assorted_products_wrapper_container_ul_li_items">
                                <span className="assorted_products_wrapper_container_ul_li_items_item">Item 1</span>
                                <span className="assorted_products_wrapper_container_ul_li_items_item">Item 1</span>
                                <span className="assorted_products_wrapper_container_ul_li_items_item">Item 1</span>
                                <span className="assorted_products_wrapper_container_ul_li_items_item">Item 1</span>
                                <span className="assorted_products_wrapper_container_ul_li_items_item">Item 1</span>
                            </div>
                            <div className="assorted_products_wrapper_container_ul_li_btns">
                                <button className="assorted_products_wrapper_container_ul_li_btns_price">
                                    {p_item.price}
                                </button>
                                <button className="assorted_products_wrapper_container_ul_li_btns_buy">
                                <svg id="icon-basket" height="23" width="23" viewBox="0 0 24 24">
                                            <path d="M12 17.016q0.797 0 1.406-0.609t0.609-1.406-0.609-1.406-1.406-0.609-1.406 0.609-0.609 1.406 0.609 1.406 1.406 0.609zM9 9h6l-3-4.406zM17.203 9h4.781q0.422 0 0.727 0.281t0.305 0.703q-0.469 1.875-1.406 5.273t-1.172 4.289q-0.422 1.453-1.922 1.453h-13.031q-1.5 0-1.922-1.453l-2.531-9.281q-0.047-0.094-0.047-0.281 0-0.422 0.305-0.703t0.727-0.281h4.781l4.359-6.563q0.281-0.422 0.844-0.422 0.609 0 0.844 0.422z"></path>
                                </svg>
                                </button>
                            </div>
                                     </li>
                    )})}
                    </ul>
                </div>
           </div>
      </section>
    );
  }
  
  export default AssortedProducts;
  