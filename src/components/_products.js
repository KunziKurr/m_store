
function Products() {
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
                                         <div style={{
                                        // backgroundImage: `url("https://via.placeholder.com/500")` 
                                    }} alt="" className="products_wrapper_container_list_ul_li_img" />
                                    <p className="products_wrapper_container_list_ul_li_name">
                                        {p_item.g_name}
                                    </p>
                                    <p className="products_wrapper_container_list_ul_li_desc">
                                        {p_item.g_desc}
                                    </p>
                                    <div className="products_wrapper_container_list_ul_li_btns">
                                        <button className="products_wrapper_container_list_ul_li_price">Ksh 3000.00</button>
                                        <button className="products_wrapper_container_list_ul_li_buy">
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
            </div>
      </section>
    );
  }
  
  export default Products;
  