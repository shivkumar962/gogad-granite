
import Hero from "./hero";
import WoderfullProduct from "./woderfullProduct";
import  About  from "./about";
import Concerns from "./concerns";
import TestimonialsAndContact from "./testimonialsAndContact";


const text1 ="Next Generation"
const text2 = "STONES"
const text3 = "Gogad Granite"



const Home = () => {



  return (
    <>

<Hero  text1={ text1} text2={text2} text3={text3}/>
      <WoderfullProduct/>
      <About/>
<Concerns/>

<TestimonialsAndContact></TestimonialsAndContact>
    
    </>
  );
};

export default Home;
