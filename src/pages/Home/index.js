import React from 'react';
import Menu from '../../components/Menu'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais'
import Footer from '../../components/Footer'
import BannerMain from '../../components/BannerMain'

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"Escreva aqui a sua descrição"}
      url={dadosIniciais.categorias[0].videos[0].url}/>
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}
      />
      <Footer/>
    </div>
  );
}

export default Home;
