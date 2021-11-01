const initialState = 

     [
  
      
                    {img: <img src="https://www.neweracap.com/medias/sys_master/root/h3e/h4d/8914743492638/8914743492638.png" height="300px" width="300px" alt=""></img>,
                    item: "New Era Black 6 Cap Carrier ",
                    price: 34.99},
                    
                    {img: <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMplXL72OE_pLaxEgac5-0iZV5crJObs8q9hhHwnX7A_zN5gz2FIjvpsscErjh7BIpW7E9wfNDRBoj34X82JH0QPeSDtQsTmaR3c2KkwSRB99rogRRwgiX&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "New Era Carrier ",
                    price: 36.99},
      
                    {img: <img src="https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Hat-Box-Side-Open-w_eabd1dd2-7dfe-4e56-9656-87ede0a87296_480x.jpg?v=1631501544"alt="" height="300px" width="300px"></img>,
                    item: "Golf Gods 6 Hat Caddy Black",
                    price: 49.99},

                    {img: <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMfkFDajI790AFcxGzumQc89ODw00KvZSuI9nHI7HCwxJXVPE_etO6hqLAy4HBiRZ9g_WV8kL2lwZaCA3_1TDtTNhWlspQdhxUZm-j_pHO4hQaAjflgGWW&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Boxy Concepts",
                    price: 45.99},
      
      
               
                    
                    {img: <img src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_1577000/ff_1577896_full.jpg&w=900" height="300px" width="300px"alt=""></img>,
                    item: "Fanatics Wall Mount ",
                    price: 56.00},
                    
                    {img: <img src="https://images.thdstatic.com/productImages/5c2b1ed7-a936-45ee-98f0-5dba8be94abf/svn/espresso-prepac-shoe-cabinets-eusr-0009-1-64_600.jpg" height="300px" width="300px"alt=""></img>,
                    item: "Composite Storage Cabinet",
                    price: 190.00},
                    
                    {img:<img src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw6726216d/product_images/0629602800001NEW_00_001.jpg?sw=1000" height="300px" width="300px"alt=""></img>,
                    item: "Sneaker Lab Hat Care",
                    price: 24.99},
                    
                    {img: <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiJYnQbsobg2joR-Bys4lt8r1i0nE0BZ-AMB8moHlMJvLuzjQt91GGWiGLUFqX124lmb6UGevvGJCmvSYJz_LmPW2DMqSfs3l7gHeZ9bQAqtzKeKV0Ljmr&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Ballcap Buddy Care",
                    price:16.95},
                    
                    {img: <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxiSSvIi-tqIfzXRTgrEOHYx2p2hPAaZcN-Nl2gpknjnm3MthZgfaqAElL-7i4nB-x5gzTxu7_9kKiahTy1HhXslYTWivTlTcry6wCm4VNGHgJLUzrxZ3gbRQ&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "NewEra Eraser ",
                    price: 27.99},
                    
                    {img: <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPzv2UyQK8LaG6DJDhqmEDnNG_MDUVhFW-RZ7QESjHp0goHaWsfiSfwuVVesVGQPcTahytoMSiT9lkvc9lLtDcudjvyArtyoRRvDcYrB823v1m__H5NX0G&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Hat Sizing Tape",
                    price: 16.99},
                    
                    {img: <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQe6LrTCp1zVfvybBt891PjwKzq1IKMIvGDDGyc9AwudTLqN47c1Gte7b0ylVT6-hYS2GE5tl1M2fK7uefY4AnnipK4qR8HH8fc7rb5D_Va1en0LSqrv6yh&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Sweat Blockers",
                    price: 22.99},

                    {img: <img src="https://cdn.shopify.com/s/files/1/0436/2023/7477/products/20211002_130818_1024x1024@2x.jpg?v=1633200704" height="300px" width="300px"alt=""></img>,
                    item: "ExclusiveFitted Protector",
                    price: 19.99},

                    {img: <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvr5QaQW-56O_RLXnWg2EemC8ONB5oG1QHwNttsCpZSpXIA5xLOZQmCMoHxXjDz99lqRxqn7yH4gFTJWyzI_ldFlLmYQ6EbAWYup419rN4HOB6x4JQfD0kgQ&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Jiffy Hat Steamer",
                    price: 149.99},

                    {img:<img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMAr_F7Xgb8utR7s77e745Tl1iuVhjPzN_q72pLi2W7J0Fu0P_r-XP9HEjQNhJ-3IqXWdbWExAxPGv9DpM8NIumW6PfGemU4WDi3UmsFyeFEauMuJDpfSfbA&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Conair Portable Steamer",
                    price: 19.99},

                    {img:<img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIgmWpxHr5LLzYZbInlEUWfrT7XnUu9pMn3bY-bPsj42bDj7BEI0BA4iTBIWdWz5Rtzhw2GGwkd_-nlVnUsBZ2REq65ZitTYcvVuByvluhszC5XPOHq99-&usqp=CAE" height="300px" width="300px"alt=""></img>,
                    item: "Conair Hand Held Steamer",
                    price: 31.99},

                    
                    
      
        
      
      
      
                
  
    ];
  

  

  const ItemData = (state=initialState, action) => {
      switch(action.type){
        default:
            return state
  }
}

export default ItemData;