import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getBooks, getCategorys } from '../../redux/actions/index';
import FiltradoGenero from '../FiltradoGenero/filtradoGenero';
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico';

import NavBar from '../NavBar/NavBar';
import { Paginated } from '../Paginated/paginated';
import Carousel from '../CarouselRecomendados/Carousel';
import CarouselPV from '../CarouselParaVos/Carousel';
import CarouselN from '../CarouselNuevos/Carousel';
import SearchBar from '../SearchBar/SearchBar';



export const Home = () => {
  const dispatch = useDispatch();
  const [showCarousels, setShowCarousels] = useState(true);
  /*   const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category) */

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getCategorys());
  }, [dispatch]);
console.log(showCarousels);
  return (

    <div className="grid grid-cols-12">
      <div className=" grid col-span-3">
        <NavBar />
      </div>
      <div className="w-9/12">
        <SearchBar setShowCarousels={setShowCarousels}/>
      </div>
      <div className="grid bg-gray col-span-9 pt-10">
        <h1>This is Home</h1>

        {showCarousels && (
          <>
            <Carousel />
            <CarouselPV />
            <CarouselN />
          </>
        )}

        

        <div className="text-center">
          <FiltradoGenero />
          <OrdAlfabetico />
        </div>
      </div>
 
    </div>
  );
};
