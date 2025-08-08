// import node module libraries
import { v4 as uuid } from "uuid";
import { FileText, Layers } from "react-bootstrap-icons";
import { settings } from "app.config";

export const MainNavigation = [
  {
    id: uuid(),
    title: "Home",
    link: "/home-essentials",
    icon: "house"
  },
  {
    id: uuid(),
    title: "Stores",
    link: "",
    children: [
      { id: uuid(), name: "Store List", link: "/store/store-list" },
      { id: uuid(), name: "Store Grid", link: "/store/store-grid" },
      { id: uuid(), name: "Store Single", link: "/store/store-single" },
    ],
  },
  {
    id: uuid(),
    title: "Mega menu",
    link: "",
    megaMenu: [
      {
        id: uuid(),
        title: "Dairy, Bread & Eggs",
        children: [
          [
            { id: uuid(), name: "Butter", link: "" },
            { id: uuid(), name: "Milk Drinks", link: "" },
            { id: uuid(), name: "Curd & Yogurt", link: "" },
            { id: uuid(), name: "Eggs", link: "" },
            { id: uuid(), name: "Buns & Bakery", link: "" },
            { id: uuid(), name: "Cheese", link: "" },
            { id: uuid(), name: "Condensed Milk", link: "" },
            { id: uuid(), name: "Dairy Products", link: "" },
          ],
        ],
      },
      {
        id: uuid(),
        title: "Breakfast & Instant Food",
        children: [
          [
            { id: uuid(), name: "Breakfast Cereal", link: "" },
            { id: uuid(), name: "Noodles, Pasta & Soup", link: "" },
            { id: uuid(), name: "Frozen Veg Snacks", link: "" },
            { id: uuid(), name: "Frozen Non-Veg Snacks", link: "" },
            { id: uuid(), name: "Frozen Non-Veg Snacks", link: "" },
            { id: uuid(), name: "Instant Mixes", link: "" },
            { id: uuid(), name: "Batter", link: "" },
            { id: uuid(), name: "Fruit and Juices", link: "" },
          ],
        ],
      },
      {
        id: uuid(),
        title: "Cold Drinks & Juices",
        children: [
          [
            { id: uuid(), name: "Soft Drinks", link: "" },
            { id: uuid(), name: "Fruit Juices", link: "" },
            { id: uuid(), name: "Coldpress", link: "" },
            { id: uuid(), name: "Water & Ice Cubes", link: "" },
            { id: uuid(), name: "Soda & Mixers", link: "" },
            { id: uuid(), name: "Health Drinks", link: "" },
            { id: uuid(), name: "Herbal Drinks", link: "" },
            { id: uuid(), name: "Milk Drinks", link: "" },
          ],
        ],
      },
    ],
  },
  {
    id: uuid(),
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: uuid(),
    title: "Docs",
    children: [
      {
        id: uuid(),
        name: "Documentation",
        version: "",
        desc: "Browse the all documentation",
        icon: <FileText size={24} className="text-primary" />,
        link: "/docs",
      },
      {
        id: uuid(),
        name: "Changelog ",
        version: "v" + settings.app.version,
        desc: "Browse the all documentation",
        icon: <Layers size={24} className="text-primary" />,
        link: "/docs/changelog",
      },
    ],
  },
];

export const DocsNavigation = [
  {
    id: uuid(),
    title: "Docs",
    children: [
      {
        id: uuid(),
        name: "Documentations",
        version: "",
        desc: "Browse the all documentation",
        icon: <FileText size={24} className="text-primary" />,
      },
      {
        id: uuid(),
        name: "Changelog ",
        version: "v" + settings.app.version,
        desc: "Browse the all documentation",
        icon: <Layers size={24} className="text-primary" />,
      },
    ],
  },
];

export const AllDepartment = [
  {
    id: uuid(),
    title: "All Department",
    children: [
      { id: uuid(), name: "Dairy, Bread & Eggs", link: "" },
      { id: uuid(), name: "Snacks & Munchies", link: "" },
      { id: uuid(), name: "Fruits & Vegetables", link: "" },
      { id: uuid(), name: "Cold Drinks & Juices", link: "" },
      { id: uuid(), name: "Breakfast & Instant Food", link: "" },
      { id: uuid(), name: "Bakery & Biscuits", link: "" },
      { id: uuid(), name: "Chicken, Meat & Fish", link: "" },
    ],
  },
];

export const homeUtilityCategories = [
  {
    id: 'home-utility',
    title: 'Home Utility',
    icon: '/images/category/home-utility.jpeg',
    link: '/category/home-utility',
    children: [
      { id: uuid(), name: 'Home Organization', link: '' },
      { id: uuid(), name: 'Kitchen Essentials', link: '' },
      { id: uuid(), name: 'Storage Solutions', link: '' },
      { id: uuid(), name: 'Home Maintenance', link: '' }
    ]
  },
  {
    id: 'bath-laundry',
    title: 'Bath & Laundry',
    icon: '/images/category/bath-laundry.jpeg',
    link: '/category/bath-laundry',
    children: [
      { id: uuid(), name: 'Laundry Detergents', link: '' },
      { id: uuid(), name: 'Fabric Softeners', link: '' },
      { id: uuid(), name: 'Bathroom Cleaners', link: '' },
      { id: uuid(), name: 'Air Fresheners', link: '' }
    ]
  },
  {
    id: 'pooja-festive',
    title: 'Pooja & Festive',
    icon: '/images/category/pooja-festive.jpeg',
    link: '/category/pooja-festive',
    children: [
      { id: uuid(), name: 'Pooja Essentials', link: '' },
      { id: uuid(), name: 'Incense Sticks', link: '' },
      { id: uuid(), name: 'Festive Decorations', link: '' },
      { id: uuid(), name: 'Religious Books', link: '' }
    ]
  },
  {
    id: 'party-needs',
    title: 'Party Needs',
    icon: '/images/category/party-needs.jpeg',
    link: '/category/party-needs',
    children: [
      { id: uuid(), name: 'Paper Plates & Cups', link: '' },
      { id: uuid(), name: 'Party Decorations', link: '' },
      { id: uuid(), name: 'Disposable Cutlery', link: '' },
      { id: uuid(), name: 'Party Hats & Accessories', link: '' }
    ]
  },
  {
    id: 'cleaning-aids',
    title: 'Cleaning Aids & Tissues',
    icon: '/images/category/cleaning-aids.jpeg',
    link: '/category/cleaning-aids',
    children: [
      { id: uuid(), name: 'Floor Cleaners', link: '' },
      { id: uuid(), name: 'Disinfectants', link: '' },
      { id: uuid(), name: 'Tissues & Wipes', link: '' },
      { id: uuid(), name: 'Brooms & Mops', link: '' }
    ]
  },

];

export const allCategories = [
  {
    id: 'fruits-vegetables',
    title: 'Fruits & Vegetables',
    icon: '/images/category/fruits-vegetables.png',
    link: '',
    children: [
      { id: uuid(), name: 'Fresh Vegetables', link: '' },
      { id: uuid(), name: 'Fresh Fruits', link: '' },
      { id: uuid(), name: 'Herbs & Seasonings', link: '' },
      { id: uuid(), name: 'Organic', link: '' },
      { id: uuid(), name: 'Exotic Fruits & Veggies', link: '' },
      { id: uuid(), name: 'Seasonal Specials', link: '' },
    ],
  },
  {
    id: 'dairy-bread-eggs',
    title: 'Dairy, Bread & Eggs',
    icon: '/images/category/dairy-bread-eggs.png',
    link: '',
    children: [
      { id: uuid(), name: 'Milk & Cream', link: '' },
      { id: uuid(), name: 'Cheese & Butter', link: '' },
      { id: uuid(), name: 'Eggs', link: '' },
      { id: uuid(), name: 'Bread & Buns', link: '' },
      { id: uuid(), name: 'Yogurt & Curd', link: '' },
      { id: uuid(), name: 'Panner & Tofu', link: '' },
    ],
  },
  {
    id: 'atta-rice-oil-dal',
    title: 'Atta, Rice, Oil & Dal',
    icon: '/images/category/atta-rice-dal.png',
    link: '',
    children: [
      { id: uuid(), name: 'Wheat & Other Flours', link: '' },
      { id: uuid(), name: 'Rice & Rice Products', link: '' },
      { id: uuid(), name: 'Edible Oils', link: '' },
      { id: uuid(), name: 'Dals & Pulses', link: '' },
      { id: uuid(), name: 'Organic Staples', link: '' },
      { id: uuid(), name: 'Grains & Cereals', link: '' },
    ],
  },
  {
    id: 'masala-dry-fruits',
    title: 'Masala & Dry Fruits',
    icon: '/images/category/Masala-Dry Fruits.jpeg',
    link: '',
    children: [
      { id: uuid(), name: 'Whole Spices', link: '' },
      { id: uuid(), name: 'Powdered Spices', link: '' },
      { id: uuid(), name: 'Blended Masalas', link: '' },
      { id: uuid(), name: 'Dry Fruits', link: '' },
      { id: uuid(), name: 'Nuts & Seeds', link: '' },
      { id: uuid(), name: 'Organic Spices', link: '' },
    ],
  },
  {
    id: 'bakery-biscuits',
    title: 'Bakery & Biscuits',
    icon: '/images/category/bakery-biscuits.png',
    link: '',
    children: [
      { id: uuid(), name: 'Cookies', link: '' },
      { id: uuid(), name: 'Bread & Buns', link: '' },
      { id: uuid(), name: 'Cakes & Pastries', link: '' },
      { id: uuid(), name: 'Rusks & Toasts', link: '' },
      { id: uuid(), name: 'Baking Ingredients', link: '' },
      { id: uuid(), name: 'Gluten Free', link: '' },
    ],
  },
  {
    id: 'cold-drinks-juices',
    title: 'Cold Drinks & Juices',
    icon: '/images/category/cold-drinks-juices.png',
    link: '',
    children: [
      { id: uuid(), name: 'Soft Drinks', link: '' },
      { id: uuid(), name: 'Fruit Juices', link: '' },
      { id: uuid(), name: 'Energy Drinks', link: '' },
      { id: uuid(), name: 'Health Drinks', link: '' },
      { id: uuid(), name: 'Soda & Mixers', link: '' },
      { id: uuid(), name: 'Flavored Water', link: '' },
    ],
  },
  {
    id: 'chicken-meat-fish',
    title: 'Chicken, Meat & Fish',
    icon: '/images/category/chicken-meat-fish.png',
    link: '',
    children: [
      { id: uuid(), name: 'Fresh Chicken', link: '' },
      { id: uuid(), name: 'Mutton & Lamb', link: '' },
      { id: uuid(), name: 'Fish & Seafood', link: '' },
      { id: uuid(), name: 'Marinated & Ready to Cook', link: '' },
      { id: uuid(), name: 'Frozen Meat', link: '' },
      { id: uuid(), name: 'Cold Cuts & Sausages', link: '' },
    ],
  },
  {
    id: 'instant-food',
    title: 'Instant Food',
    icon: '/images/category/instant-food.png',
    link: '',
    children: [
      { id: uuid(), name: 'Noodles & Pasta', link: '' },
      { id: uuid(), name: 'Ready to Eat', link: '' },
      { id: uuid(), name: 'Breakfast Cereals', link: '' },
      { id: uuid(), name: 'Soups', link: '' },
      { id: uuid(), name: 'Snack Foods', link: '' },
      { id: uuid(), name: 'Dessert Mixes', link: '' },
    ],
  },
  {
    id: 'home-needs',
    title: 'Home Needs',
    icon: '/images/category/home-utility.jpeg',
    link: '',
    children: [
      { id: uuid(), name: 'Home Utility', link: '' },
      { id: uuid(), name: 'Kitchen Essentials', link: '' },
      { id: uuid(), name: 'Bath & Laundry', link: '' },
      { id: uuid(), name: 'Home Decor', link: '' },
      { id: uuid(), name: 'Storage Solutions', link: '' },
      { id: uuid(), name: 'Home Fragrances', link: '' },
    ],
  },
  {
    id: 'cleaning-essentials',
    title: 'Cleaning Essentials',
    icon: '/images/category/cleaning-essentials.png',
    link: '',
    children: [
      { id: uuid(), name: 'Floor Cleaners', link: '' },
      { id: uuid(), name: 'Dishwash', link: '' },
      { id: uuid(), name: 'Detergents', link: '' },
      { id: uuid(), name: 'Bathroom Cleaners', link: '' },
      { id: uuid(), name: 'Kitchen Cleaners', link: '' },
      { id: uuid(), name: 'Disinfectants', link: '' },
    ],
  },
  {
    id: 'baby-care',
    title: 'Baby Care',
    icon: '/images/category/baby-care.png',
    link: '',
    children: [
      { id: uuid(), name: 'Diapers & Wipes', link: '' },
      { id: uuid(), name: 'Baby Food', link: '' },
      { id: uuid(), name: 'Baby Bath & Hygiene', link: '' },
      { id: uuid(), name: 'Baby Accessories', link: '' },
      { id: uuid(), name: 'Baby Health', link: '' },
      { id: uuid(), name: 'Maternity Care', link: '' },
    ],
  },
  {
    id: 'pet-care',
    title: 'Pet Care',
    icon: '/images/category/pet-care.png',
    link: '',
    children: [
      { id: uuid(), name: 'Dog Food', link: '' },
      { id: uuid(), name: 'Cat Food', link: '' },
      { id: uuid(), name: 'Pet Accessories', link: '' },
      { id: uuid(), name: 'Pet Grooming', link: '' },
      { id: uuid(), name: 'Pet Treats', link: '' },
      { id: uuid(), name: 'Litter & Housebreaking', link: '' },
    ],
  }
];
