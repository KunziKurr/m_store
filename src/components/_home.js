import AssortedProducts from "./_assorted_products";
import Header from "./_header";
import Products from "./_products";

function Home() {
  return (
      <>
      <div className="header">
            {/* Home */}
        <Header />
      </div>
      <Products />
      <AssortedProducts />

      </>
    );
  }
  
  export default Home;
  