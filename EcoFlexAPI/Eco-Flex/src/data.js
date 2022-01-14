import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <IoIcons.IoMdShirt />,
    cName: 'nav-text'
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <IoIcons.IoIosLogIn />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];


export const SliderItem = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        title: "SHOP FOR SUSTAINABILITY",
        desc: "We won’t have a society if we destroy the environment.",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/4219651/pexels-photo-4219651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=840",
        title: "Go Carbon -ve",
        desc: "We don’t have to sacrifice a strong economy for a healthy environment.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1555529669-83329d5fac8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80",
        title: "SHOP Zero Waste",
        desc: "Our planet’s alarm is going off, and it is time to wake up and take action!",
        bg: "fbf0f4",
    },
]

export const categories = [
    {
        id: 1,
        img:"https://images.pexels.com/photos/5644680/pexels-photo-5644680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "HOME",
        desc: "DON'T COMPROMISE ON DECORATIONS! GRAB OUR NEW ARRIVALS.",
        cat:"home"
        
    },
    {
        id: 2,
        img:"https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "FASHION",
        desc: "WALK IN STYLE WITH OUR LATEST TRENDY COLLECTION.",
        cat:"fashion"
    },
    {
        id: 3,
        img:"https://images.pexels.com/photos/6620703/pexels-photo-6620703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "PERSONAL CARE",
        desc: "GET PERSONAL CARE WITH OUR BEST PERSONAL CARE BRANDS.",
        cat:"care"

    },
    {
        id: 4,
        img:"https://images.pexels.com/photos/3754300/pexels-photo-3754300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "FOOD",
        desc: "HANDPICKED, FRESHWATER CLEANED AND FROZEN.BEST QUALITY FOOD PRODUCTS HERE.",
        cat:"food"

    },
    {
        id: 5,
        img:"https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "TRAVELS",
        desc: "PLANNING TO TRAVEL SOMEWHERE? GRAB THE BEST DEALS ON OUR TRAVEL PRODUCTS.",
        cat:"travel"

    },
    {
        id: 6,
        img:"https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "GIFTS",
        desc: "SURPRISE YOUR LOVED ONES WITH OUR NEW COLLECTION OF GIFTS.EXPLORE NOW!",
        cat:"gift"

    },
]

export const materials = [
    {
      id:1,
      title: "Bamboo",
      desc:"Bamboos are typically fast-growing perennials, with some species growing as much as 30 cm (1 foot) per day.",
      img:"https://images.pexels.com/photos/2534507/pexels-photo-2534507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id:2,
      title: "Organic",
      desc:"Organic is natural matter or compounds with a carbon base, and also refers to food and meat grown or raised without chemicals or pesticides.",
      img:"https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id:3,
      title: "Recycled & Upcycled",
      desc:"Recycling is the process of converting waste materials into new materials and objects.",
      img:"https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:4,
      title: "Cane",
      desc:"Sugarcane stalks contain mostly water and sugar that are crushed to extract the sweet juice, which is processed into sugar.",
      img:"https://static.toiimg.com/thumb/msid-69095049,width-800,height-600,resizemode-75,imgsize-1675636,pt-32,y_pad-40/69095049.jpg",
    },
    {
      id:5,
      title: "Terracotta",
      desc:"A glazed or unglazed fired clay used especially for statuettes and vases and architectural purposes",
      img:"https://www.ellementry.com/blog/wp-content/uploads/2020/04/Terracotta_Banner-Desktop.jpg",
    },
    {
      id:6,
      title: "Bamboo Fiber",
      desc:"Bamboo fiber is a cellulosic fiber that is regenerated from bamboo plant.",
      img:"https://images.squarespace-cdn.com/content/v1/5e5cd082c50ea102c52e5bb0/1589696709437-TKHV7AB55ACLCMYMSG64/Bamboo+Fibers",
    },
    {
      id:7,
      title: " Hemp",
      desc:"True hemp is a fine, light-colored, lustrous, and strong bast fiber, obtained from the hemp plant.",
      img:"https://cdn.britannica.com/39/123539-050-837C3C7C/Hemp.jpg",
    },
    {
      id:8,
      title: "Longpi Stone",
      desc:"Longpi pottery is made from a mixed paste of ground black serpentine stone and special brown clay.",
      img:"https://5.imimg.com/data5/NW/XO/MY-19353396/longpi-container-500x500.jpeg",
    },
    {
      id:9,
      title: "Cork",
      desc:"Cork is an impermeable buoyant material, the phellem layer of bark tissue that is harvested for commercial use.",
      img:"https://images.immediate.co.uk/production/volatile/sites/4/2018/08/GettyImages-486402460-9616a1e.jpg?quality=45&resize=768,574",
    },
    {
      id:10,
      title: "Pinatex",
      desc:"Pinatex is a non-biodegradeable leather alternative made from cellulose fibres extracted from pineapple leaves.",
      img:"https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/19/1418996707627/Goods-made-from-leather-a-012.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=058906ef18c66ca96f5de9448c14b3fe",
    },
  ]


  export const searchLinks = [
    {
      "link": "/products",
      "title": "Products",
    },
    {
      "link": "/cart",
      "title": "Cart",
    },
    {
      "link": "/products/women",
      "title": "Women",
    },
    {
      "link": "/products/men",
      "title": "Men",
    },
    {
      "link": "/products/shoes",
      "title": "Shoes",
    },
    {
      "link": "/products/bag",
      "title": "Bag",
    },
    {
      "link": "/products/t-shirt",
      "title": "T-Shirt",
    },
    {
      "link": "/products/coat",
      "title": "Coat",
    },
    {
      "link": "/products/jacket",
      "title": "Jacket",
    },
    {
      "link": "/products/mask",
      "title": "Mask",
    },
    {
      "link": "/products/soap",
      "title": "soap",
    },
    {
      "link": "/products/stool",
      "title": "Stool",
    },
    {
      "link": "/products/straw",
      "title": "Straw",
    },
    {
      "link": "/products/handmade",
      "title": "Handmade",
    },
    {
      "link": "/products/slippers",
      "title": "Slippers",
    },
    {
      "link": "/products/fashion",
      "title": "fashion",
    },
    {
      "link": "/products/food",
      "title": "food",
    },
    {
      "link": "/products/travel",
      "title": "travel",
    },
    {
      "link": "/products/care",
      "title": "care",
    },

  ]