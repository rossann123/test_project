import React from 'react';
import Box from "../Box";
import Nav from "./Nav";

function Home() {

    const [boxInfo]=React.useState(
        [
            {
                name:"Goku",
                category:"animation",
                value:1,
                img: "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/795075/Goku_%2528Windy%2529_%2528Kamehameha%2529_Vinyl_Art_Toys_8dff3451-1adf-46b3-addd-4d1464a22a3c.png"
            },
            {
                name:"Vegeta",
                category:"animation",
                value:2,
                img: "https://i5.walmartimages.com/asr/889701b8-024a-43c2-bd4a-7d6a1ba01cfe_1.1dfc0bd9f4bbb21a573ebfcfee959f33.png"
            },
            {
                name:"Vegito",
                category:"animation",
                value:5,
                img: "https://www.pngkey.com/png/full/440-4402411_dragon-ball-z-super-saiyan-vegito-funko-pop.png"
            },
            {
                name:"Deku",
                category:"animation",
                value:2,
                img: "https://cdn.shopify.com/s/files/1/2528/8830/products/FU48476_512x512.png?v=1593713656"
            },
            {
                name:"Kazuya",
                category:"games",
                value:3,
                img: "https://www.colthat.com/content/media/2017/02/12830-2.png"
            },
            {
                name:"Cortex",
                category:"games",
                value:2,
                img: "https://www.funko.com/craftmin/products/43451b_CrashBandicoot_NeoCortex_MM_WEB.png"
            },
            {
                name:"Sonic",
                category:"games",
                value:4,
                img: "https://www.colthat.com/content/media/2017/10/funko_pop_vinyl_sonic_-_sonic_the_hedgehog_with_emerald-300x300.png"
            },
            {
                name:"McCree",
                category:"games",
                value:3,
                img: "https://i.postimg.cc/C5V2R8cq/2019sdcc-mccree.png"
            },
            {
                name:"Michael Scott",
                category:"television",
                value:3,
                img: "https://cdn.shopify.com/s/files/1/0706/6127/products/Office_-_Michael_2048x.png?v=1573846990"
            },
            {
                name:"Dwight",
                category:"television",
                value:1,
                img: "https://i5.walmartimages.com/asr/d785a446-e759-46a5-8ad2-48d930dc8111_1.500a9c1774657f6a0ef501b9604b0756.png?odnWidth=612&odnHeight=612&odnBg=ffffff"
            },
            {
                name:"Jim",
                category:"television",
                value:2,
                img: "https://cdn.shopify.com/s/files/1/0258/9350/3010/products/1436-3266-8d6d7fa376535d7-34903a-TheOffice-JimHalpert-Pop-GLAM_1200x1200.png?v=1596208705"
            },
            {
                name:"Pam",
                category:"television",
                value:1,
                img: "https://cdn.shopify.com/s/files/1/1052/2158/products/34905_TheOffice_PamBeesly_WEB.png?v=1585691958"
            }
        ]);

    const boxEles = boxInfo.map((bx, idx)=>
        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} key={idx}/>
    );

    return (
        <div className="homePage">
            {Nav}
            {boxEles}
        </div>
    );
}

export default Home;