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
      { id: 'bath-laundry', name: 'Bath & Laundry', link: '/category/home-utility?subcategory=bath-laundry' },
      { id: 'pooja-festive', name: 'Pooja & Festive', link: '/category/home-utility?subcategory=pooja-festive' },
      { id: 'party-needs', name: 'Party Needs', link: '/category/home-utility?subcategory=party-needs' },
      { id: 'cleaning-aids-tissues', name: 'Cleaning Aids & Tissues', link: '/category/home-utility?subcategory=cleaning-aids-tissues' }
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
      { id: uuid(), name: 'Pooja Essentials', link: '/category/pooja-festive?subcategory=pooja-essentials' },
      { id: uuid(), name: 'Incense Sticks', link: '/category/pooja-festive?subcategory=incense-sticks' },
      { id: uuid(), name: 'Festive Decor', link: '/category/pooja-festive?subcategory=festive-decor' }
    ]
  },
  {
    id: 'automotive-needs',
    title: 'Automotive Needs',
    icon: '/images/category/automotive-needs.jpeg',
    link: '/category/automotive-needs',
    children: [
      { id: uuid(), name: 'Car Care', link: '/category/automotive-needs?subcategory=car-care' },
      { id: uuid(), name: 'Bike Care', link: '/category/automotive-needs?subcategory=bike-care' },
      { id: uuid(), name: 'Cleaning Tools', link: '/category/automotive-needs?subcategory=cleaning-tools' }
    ]
  },
  {
    id: 'cleaning-aids-tissues',
    title: 'Cleaning Aids & Tissues',
    icon: '/images/category/cleaning-essentials.png',
    link: '/category/cleaning-aids-tissues',
    children: [
      { id: uuid(), name: 'Disinfectants', link: '/category/cleaning-aids-tissues?subcategory=disinfectants' },
      { id: uuid(), name: 'Bathroom Cleaners', link: '/category/cleaning-aids-tissues?subcategory=bathroom-cleaners' },
      { id: uuid(), name: 'Floor Cleaners', link: '/category/cleaning-aids-tissues?subcategory=floor-cleaners' },
      { id: uuid(), name: 'Tissues & Wipes', link: '/category/cleaning-aids-tissues?subcategory=tissues-wipes' }
    ]
  },
  {
    id: 'party-needs',
    title: 'Party Needs',
    icon: '/images/category/party-needs.jpeg',
    link: '/category/party-needs',
    children: [
      { id: uuid(), name: 'Paper Plates & Cups', link: '/category/party-needs?subcategory=paper-plates-cups' },
      { id: uuid(), name: 'Disposable Cutlery', link: '/category/party-needs?subcategory=disposable-cutlery' },
      { id: uuid(), name: 'Party Decorations', link: '/category/party-needs?subcategory=party-decorations' },
      { id: uuid(), name: 'Party Hats & Accessories', link: '/category/party-needs?subcategory=party-hats-accessories' },
      { id: uuid(), name: 'Balloons', link: '/category/party-needs?subcategory=balloons' }
    ]
  },

];

export const allCategories = [
  ...homeUtilityCategories,
  {
    id: 'fruits-vegetables',
    title: 'Fruits & Vegetables',
    icon: '/images/category/fruits-vegetables.png',
    link: '/fruits-vegetables',
    children: [
      { 
        id: 'fresh-vegetables', 
        name: 'Fresh Vegetables', 
        link: '/category/fruits-vegetables?subcategory=fresh-vegetables',
        image: '/images/categories/fresh-vegetables.jpeg'
      },
      { 
        id: 'fresh-fruits', 
        name: 'Fresh Fruits', 
        link: '/category/fruits-vegetables?subcategory=fresh-fruits',
        image: '/images/categories/fresh-fruits.jpeg'
      },
      { 
        id: 'herbs-seasonings', 
        name: 'Herbs & Seasonings', 
        link: '/category/fruits-vegetables?subcategory=herbs-seasonings',
        image: '/images/categories/Flowers-Leaves.jpeg'
      },
      { 
        id: 'cuts-sprouts', 
        name: 'Cuts & Sprouts', 
        link: '/category/fruits-vegetables?subcategory=cuts-sprouts',
        image: '/images/categories/Cuts-Sprouts.jpeg'
      },
      { 
        id: 'exotic-premium', 
        name: 'Exotic & Premium', 
        link: '/category/fruits-vegetables?subcategory=exotic-premium',
        image: '/images/categories/Exotics-Premium.jpeg'
      }
    ],
  },
  {
    id: 'dairy-bread-eggs',
    title: 'Dairy, Bread & Eggs',
    icon: '/images/category/dairy-bread-eggs.png',
    link: '/category/dairy-bread-eggs',
    children: [
      { id: 'milk-curd', name: 'Milk & Curd', link: '/category/dairy-bread-eggs?subcategory=milk-curd' },
      { id: 'paneer-cream', name: 'Paneer & Cream', link: '/category/dairy-bread-eggs?subcategory=paneer-cream' },
      { id: 'butter', name: 'Butter', link: '/category/dairy-bread-eggs?subcategory=butter' },
      { id: 'bread-buns', name: 'Bread & Buns', link: '/category/dairy-bread-eggs?subcategory=bread-buns' },
      { id: 'batters-mixes', name: 'Batters & Mixes', link: '/category/dairy-bread-eggs?subcategory=batters-mixes' },
      { id: 'eggs', name: 'Eggs', link: '/category/dairy-bread-eggs?subcategory=eggs' },
    ],
  },
  {
    id: 'atta-rice-oil-dal',
    title: 'Atta, Rice, Oil & Dal',
    icon: '/images/category/atta-rice-dal.png',
    link: '/category/atta-rice-oil-dal',
    children: [
      { id: 'oil', name: 'Oil', link: '/category/atta-rice-oil-dal?subcategory=oil' },
      { id: 'atta', name: 'Atta', link: '/category/atta-rice-oil-dal?subcategory=atta' },
      { id: 'besan-sooji-maida', name: 'Besan, Sooji & Maida', link: '/category/atta-rice-oil-dal?subcategory=besan-sooji-maida' },
      { id: 'millets-pulses', name: 'Millets & Other Pulses', link: '/category/atta-rice-oil-dal?subcategory=millets-pulses' },
      { id: 'dals-pulses', name: 'Dals & Pulses', link: '/category/atta-rice-oil-dal?subcategory=dals-pulses' },
      { id: 'rice-more', name: 'Rice & More', link: '/category/atta-rice-oil-dal?subcategory=rice-more' },
    ],
  },
  {
    id: 'masala-dry-fruits',
    title: 'Masala & Dry Fruits',
    icon: '/images/category/Masala-Dry Fruits.jpeg',
    link: '/category/masala-dry-fruits',
    children: [
      { id: 'powders-pastes', name: 'Powders & Pastes', link: '/category/masala-dry-fruits?subcategory=powders-pastes' },
      { id: 'dry-fruits-nuts', name: 'Dry Fruits & Nuts', link: '/category/masala-dry-fruits?subcategory=dry-fruits-nuts' },
      { id: 'dates-seeds', name: 'Dates & Seeds', link: '/category/masala-dry-fruits?subcategory=dates-seeds' },
      { id: 'whole-spices', name: 'Whole Spices & Seasonings', link: '/category/masala-dry-fruits?subcategory=whole-spices' },
      { id: 'salt', name: 'Salt', link: '/category/masala-dry-fruits?subcategory=salt' },
      { id: 'sugar-jaggery', name: 'Sugar & Jaggery', link: '/category/masala-dry-fruits?subcategory=sugar-jaggery' },
    ],
  },
  {
    id: 'bakery-biscuits',
    title: 'Bakery & Biscuits',
    icon: '/images/category/bakery-biscuits.png',
    link: '/category/bakery-biscuits',
    children: [
      { id: 'cookies', name: 'Cookies', link: '/category/bakery-biscuits?subcategory=cookies' },
      { id: 'crackers', name: 'Crackers', link: '/category/bakery-biscuits?subcategory=crackers' },
      { id: 'wafers', name: 'Wafers', link: '/category/bakery-biscuits?subcategory=wafers' },
      { id: 'creamfills', name: 'Cream Fills', link: '/category/bakery-biscuits?subcategory=creamfills' },
      { id: 'digestives', name: 'Digestives', link: '/category/bakery-biscuits?subcategory=digestives' },
    ],
  },
  {
    id: 'cold-drinks-juices',
    title: 'Cold Drinks & Juices',
    icon: '/images/category/cold-drinks-juices.png',
    link: '/category/cold-drinks-juices',
    children: [
      { id: 'soft-drinks', name: 'Soft Drinks', link: '/category/cold-drinks-juices?subcategory=soft-drinks' },
      { id: 'fruit-juices', name: 'Fruit Juices & Drinks', link: '/category/cold-drinks-juices?subcategory=fruit-juices' },
      { id: 'coffee-tea', name: 'Cold Coffee & Iced Tea', link: '/category/cold-drinks-juices?subcategory=coffee-tea' },
      { id: 'water', name: 'Water', link: '/category/cold-drinks-juices?subcategory=water' },
      { id: 'soda-mixers', name: 'Soda & Mixers', link: '/category/cold-drinks-juices?subcategory=soda-mixers' },
      { id: 'energy-drinks', name: 'Non-Alcoholic & Energy Drinks', link: '/category/cold-drinks-juices?subcategory=energy-drinks' },
    ],
  },
  {
    id: 'chicken-meat-fish',
    title: 'Chicken, Meat & Fish',
    icon: '/images/category/chicken-meat-fish.png',
    link: '/category/chicken-meat-fish',
    children: [
      { id: 'chicken', name: 'Chicken', link: '/category/chicken-meat-fish?subcategory=chicken' },
      { id: 'mutton', name: 'Mutton', link: '/category/chicken-meat-fish?subcategory=mutton' },
      { id: 'fish-seafood', name: 'Fish & Sea Food', link: '/category/chicken-meat-fish?subcategory=fish-seafood' },
      { id: 'egg', name: 'Egg', link: '/category/chicken-meat-fish?subcategory=egg' },
      { id: 'frozen-meat', name: 'Frozen Meat', link: '/category/chicken-meat-fish?subcategory=frozen-meat' },
    ],
  },
  {
    id: 'instant-food',
    title: 'Instant Food',
    icon: '/images/category/instant-food.png',
    link: '/category/instant-food',
    children: [
      { id: 'noodles-vermicelli', name: 'Noodles & Vermicelli', link: '/category/instant-food?subcategory=noodles-vermicelli' },
      { id: 'pasta-soups', name: 'Pasta & Soups', link: '/category/instant-food?subcategory=pasta-soups' },
      { id: 'papads-pickles', name: 'Papads, Pickles & Chutney', link: '/category/instant-food?subcategory=papads-pickles' },
      { id: 'ready-to-cook', name: 'Ready to Cook', link: '/category/instant-food?subcategory=ready-to-cook' },
      { id: 'baking-mixes', name: 'Baking Mixes & Ingredients', link: '/category/instant-food?subcategory=baking-mixes' },
      { id: 'dessert-mixes', name: 'Dessert Mixes', link: '/category/instant-food?subcategory=dessert-mixes' },
    ],
  },
  {
    id: 'cleaning-essentials',
    title: 'Cleaning Essentials',
    icon: '/images/category/cleaning-essentials.png',
    link: '/category/cleaning-essentials',
    children: [
      { id: 'repellents', name: 'Repellents', link: '/category/cleaning-essentials?subcategory=repellents' },
      { id: 'detergent-powder-bars', name: 'Detergent Powder & Bars', link: '/category/cleaning-essentials?subcategory=detergent-powder-bars' },
      { id: 'liquid-detergents', name: 'Liquid Detergents', link: '/category/cleaning-essentials?subcategory=liquid-detergents' },
      { id: 'dishwash-gels-bars', name: 'Dishwash Gels & Bars', link: '/category/cleaning-essentials?subcategory=dishwash-gels-bars' },
      { id: 'floor-surface-cleaners', name: 'Floor & Surface Cleaners', link: '/category/cleaning-essentials?subcategory=floor-surface-cleaners' },
      { id: 'toilet-bathroom', name: 'Toilet & Bathroom', link: '/category/cleaning-essentials?subcategory=toilet-bathroom' },
      { id: 'fresheners', name: 'Fresheners', link: '/category/cleaning-essentials?subcategory=fresheners' },
    ],
  },
  {
    id: 'baby-care',
    title: 'Baby Care',
    icon: '/images/category/baby-care.png',
    link: '/category/baby-care',
    children: [
      { id: 'baby-diapering', name: 'Baby Diapering', link: '/category/baby-care?subcategory=baby-diapering' },
      { id: 'baby-bath', name: 'Baby Bath', link: '/category/baby-care?subcategory=baby-bath' },
      { id: 'baby-skin-hair', name: 'Baby Skin & Hair Care', link: '/category/baby-care?subcategory=baby-skin-hair' },
      { id: 'baby-wipes', name: 'Baby Wipes', link: '/category/baby-care?subcategory=baby-wipes' },
      { id: 'baby-feeding', name: 'Baby Feeding', link: '/category/baby-care?subcategory=baby-feeding' },
      { id: 'baby-health', name: 'Baby Health', link: '/category/baby-care?subcategory=baby-health' },
      { id: 'infant-clothing', name: 'Infant Clothing', link: '/category/baby-care?subcategory=infant-clothing' },
    ],
  },
  {
    id: 'pet-care',
    title: 'Pet Care',
    icon: '/images/category/pet-care.png',
    link: '/category/pet-care',
    children: [
      { id: 'dog-food', name: 'Dog Food', link: '/category/pet-care?subcategory=dog-food' },
      { id: 'cat-food', name: 'Cat Food', link: '/category/pet-care?subcategory=cat-food' },
      { id: 'large-pack', name: 'Large Pack', link: '/category/pet-care?subcategory=large-pack' },
      { id: 'pet-treats-toys', name: 'Pet Treats & Toys', link: '/category/pet-care?subcategory=pet-treats-toys' },
      { id: 'pet-accessories', name: 'Pet Accessories', link: '/category/pet-care?subcategory=pet-accessories' },
      { id: 'small-pet-food', name: 'Small Pet Food', link: '/category/pet-care?subcategory=small-pet-food' },
    ],
  }
];
