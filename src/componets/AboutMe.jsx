
import Dueños from"../assets/papas (Medium).jpg"
import Vela from "../assets/velaOficial.png"


function AboutMe() {
  return (
    <div className='h-[105vh] w-full md:flex ' id="nosotros">

        <div className='w-full h-full boder md:border-none'   data-aos="zoom-in" data-aos-duration="2000">

            <h1 className='uppercase  text-center md:mt-46 mt-32 text-5xl familia colorTituto'>El poder de los aromas</h1>

            <h3 className='uppercase  text-center m-10 mb-0 mt-2  text-3xl familia'>Descubriendo los secretos de las fragancias</h3>

            <img className="m-auto h-48 w-48 " src={Vela} alt="abuelita" />

            <p className='uppercase  text-center m-16 mt-2 familia text-xl '>Nos dedicamos a la creación y venta de productos para el ambiente y de limpieza. Somos un emprendimiento familiar que buscar brindar un producto de calidad a nuestros clientes.</p>


        </div>

        <div className=' w-full h-full  bordeRendodeado'>
            <div className="flex justify-center items-center m-auto  md:w-80 md:h-80 md:mt-32 w-80 h-80" data-aos="fade-up"
                 data-aos-duration="1000">
                <img className="rounded-3xl shadow-2xl md:mt-10" src={Dueños} alt="dueños" />
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
