import React from 'react'

const Products = [
    {
      id: 1,
      categoryName: "hombre",
      title: "Remera Nike SB",
      description: "La remera Nike SB es un básico de skate ligero que te permite moverte libremente con el mayor confort posible",
      price: 2000,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-Fka-w6b9mr-LvQItShFewAAAA%26pid%3DApi&f=1",
      stock: 10,
    },
    {
        id: 2,
        categoryName: "hombre",
        title: "Remera Nike Air",
        description: "Confeccionada con una tela fresca con tecnología Dri-FIT que absorbe el sudor de la piel para mantenerte fresco y seco durante más tiempo.",
        price: 3000,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jUn9Em9vpKEIUuARu7X1mQAAAA%26pid%3DApi&f=1",
        stock: 10,
    },
    {
      id: 3,
      categoryName: "hombre",
      title: "Remera Nike DriFit",
      description: "Confeccionada en un tejido elástico, te mantengas seco y absorbe el sudor rápidamente",
      price: 3500,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.fenicio.app%2Fimgs%2F2d8619%2Fmenpi.uy%2Fmenpuy%2Fa1dc%2Foriginal%2Fcatalogo%2FCU5438064-0-1%2F460x460%2Fremera-nike-hombre-running-brth-rise-365-ss-ff-gx-color-unico.jpg&f=1&nofb=1",
      stock: 10,
    },
    {
        id: 4,
        categoryName: "hombre",
        title: "Remera Nike SB",
        description: "De estilo liso, cuello redondo y mangas largas, cumple con todos los requisitos que la uses durante todo el día",
        price: 4000,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z67g4HO7C0oVVASvEG-sEQAAAA%26pid%3DApi&f=1",
        stock: 10,
    },
    {
      id: 5,
      categoryName: "mujer",
      title: "Remera Nike SW",
      description: "La remera Nike Sportswear combina la comodidad del algodón suave con un estampado reflectante para que tu estilo brille siempre. Hecha para entrenar, pensada para acompañarte todos los días.",
      price: 2500,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmegasports.vteximg.com.br%2Farquivos%2Fids%2F188648-400-400%2F06186100001_0.jpg%3Fv%3D637365860869630000&f=1&nofb=1",
      stock: 10,
    },
    {
        id: 6,
        categoryName: "mujer",
        title: "Remera Nike AIR",
        description: "Confeccionada en un tejido elástico, para que te mantengas seca y absorbe el sudor rápidamente. Ideal para tus deportes preferidos",
        price: 3000,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolodeportes-9bvc3m9qgmf6g9x.stackpathdns.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbaa193a472891718a9656a0f6c3cd266%2F5%2F1%2F510020bv4004363-1.jpg&f=1&nofb=1",
        stock: 10,
    },
    {
      id: 7,
      categoryName: "mujer",
      title: "Remera Nike DriFit",
      description: "La Remera Nike Dri-FIT te ayuda a sumar kilómetros en cada salida y acompaña a todos los runners con la mejor calidad posible",
      price: 2000,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmegasports.vteximg.com.br%2Farquivos%2Fids%2F188520-400-400%2F06327810001_0.jpg%3Fv%3D637365850275230000&f=1&nofb=1",
      stock: 10,
    },
    {
        id: 8,
        categoryName: "mujer",
        title: "Remera Nike SB",
        description: " Es ligera, liviana y cómoda. Además, cuenta con tecnología Dri- FIT",
        price: 4000,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmegasports.vteximg.com.br%2Farquivos%2Fids%2F199407-400-400%2F06278021001_0.jpg%3Fv%3D637625565156800000&f=1&nofb=1",
        stock: 10,
    },
    {
      id: 9,
      categoryName: "deco",
      title: "Mesa TopLiving",
      description: "Esta mesa simple, limpia y moderna tiene un encanto naturalmente atractivo. La amplia mesa y el clásico acabado marrón vintage realzan el atractivo de esta mesa de centro que es exactamente lo que necesita su hogar.",
      price: 14000,
      picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2Fb3%2F4e%2F87b34eec8cd9a80cdb38d952ed0f1f86.jpg&f=1&nofb=1",
      stock: 10,
  },
  {
    id: 10,
    categoryName: "deco",
    title: "Sillon Alameda",
    description: "Sillon tapizado en Tela importada resistente y duradera con patrones y colores modernos cuidadosamente seleccionados, muy suaves y de fácil limpieza",
    price: 12000,
    picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsike.mx%2F1141-medium_default%2Fsilla-decorativa-moderna-sofa-individual-comodo-sillon-tapizado-en-tela-sala-de-estar-amarillo.jpg&f=1&nofb=1",
    stock: 10,
  },
  {
      id: 11,
      categoryName: "deco",
      title: "Lampara Tecnolite",
      description: "Es ideal en comedores, bares, encimeras de cocina, fregaderos y dormitorios. Esta lámpara colgante funciona con diseños industriales, modernos y transicionales",
      price: 2000,
      picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhomecenterco.scene7.com%2Fis%2Fimage%2FSodimacCO%2F303212%3Ffmt%3Djpg%26fit%3Dconstrain%2C1%26wid%3D420%26hei%3D420&f=1&nofb=1",
      stock: 10,
  },
  {
    id: 12,
    categoryName: "deco",
    title: "Set Cuadros Minimalista",
    description: "Están montados sobre un bastidor de madera altamente resistente, ideal para imprimir tu estilo y hacer únicos tus espacios",
    price: 6000,
    picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61%2BPE0tp4eL._AC_SS350_.jpg&f=1&nofb=1",
    stock: 10,
  },
   
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(Products)
      }, 1000);
  });
}