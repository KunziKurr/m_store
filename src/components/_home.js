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

      </>
    );
  }
  
  export default Home;
  