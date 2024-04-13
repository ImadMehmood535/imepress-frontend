const { sale_img1 } = require("@/assets");

const dailysaledata = [
  {
    id: 1,
    image: sale_img1,
    title: "Cosmetics",
    reg_price: 98.00,
    sale_price: 68.00,
    tags: {
      tag: "new",
      discount: "-25%",
    },
   
  },
  {
    id : 2,
    image: sale_img1,
    title: "Slouchy trousers with darts",
    reg_price: 98.00,
    sale_price: 68.00,
    tags : { 
        tag : "new",
        discount : "-25%",
    },
    
  },
  {
    id : 3,
    image: sale_img1,
    title: "Faux-leather shirt dress",
    reg_price: 98.00,
    sale_price: 68.00,
    tags : { 
        tag : "new",
        discount : "-25%",
    },
    
  },
  {
    id : 4,
    image: sale_img1,
    title: "Wool1 double-breasted coat",
    reg_price: 98.00,
    
    tags : { 
        tag : "new",
       
    }
  },
  {
    id : 5,
    image: sale_img1,
    title: "Wool2 double-breasted coat",
    reg_price: 98.00,
    
    tags : { 
        tag : "new",
       
    }
  },
];

export { dailysaledata };
