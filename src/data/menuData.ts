import appetizersImg from "@/assets/appetizers.jpg";
import grilledImg from "@/assets/Grilled1.jpg";
import sandwichesImg from "@/assets/sandwiches.jpg";
import broastedImg from "@/assets/broastedChick.jpg";
import crispyImg from "@/assets/crispy.jpg";
import beveragesImg from "@/assets/beverages.jpg";

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  image: string;
}

export const menuData: MenuCategory[] = [
  {
    title: "Appetizers",
    image: appetizersImg,
    items: [
      { name: "Hummus", price: 4, description: "Creamy chickpea dip with tahini and olive oil" },
      { name: "Fries", price: 3, description: "Golden crispy potato fries" },
      { name: "Potato Wedges", price: 4, description: "Seasoned potato wedges with herbs" },
      { name: "Cheese Rolls", price: 3.5, description: "Crispy rolls filled with melted cheese" },
      { name: "Kebbeh Fried", price: 4, description: "Traditional Lebanese fried kebbeh" },
      { name: "Mozzarella Sticks", price: 3.5, description: "Golden fried mozzarella with marinara sauce" },
    ],
  },
  {
    title: "Charcoal-Grilled",
    image: grilledImg,
    items: [
      { name: "Grilled Chicken", price: 15, description: "Full chicken grilled to perfection over charcoal" },
      { name: "Half Chicken", price: 9, description: "Half chicken charcoal-grilled with special spices" },
      { name: "Dabbous w Jeneh Meal", price: 15, description: "Our signature grilled chicken meal" },
      { name: "Charcoal-Grilled Drumstick & Wing", price: 7, description: "Perfect combination of drumstick and wing" },
    ],
  },
  {
    title: "Sandwiches",
    image: sandwichesImg,
    items: [
      { name: "Large Sandwich", price: 6.5, description: "Generous portion with fresh ingredients" },
      { name: "Small Sandwich", price: 4.5, description: "Perfect size for a light meal" },
      { name: "Sandwich Meal (Fries + Pepsi)", price: 9, description: "Complete meal with sides and drink" },
    ],
  },
  {
    title: "Broasted Chicken",
    image: broastedImg,
    items: [
      { name: "Broasted Chicken", price: 19, description: "Full chicken broasted with our special seasoning" },
      { name: "Broasted Meal (3 pcs)", price: 8, description: "Three pieces of tender broasted chicken" },
      { name: "Broasted Wings Meal (5 pcs)", price: 8, description: "Five crispy broasted wings" },
      { name: "Broasted Drumsticks Meal (5 pcs)", price: 9, description: "Five juicy broasted drumsticks" },
    ],
  },
  {
    title: "Crunchy Fried Chicken",
    image: crispyImg,
    items: [
      { name: "Crispy Chicken Meal (12 pcs)", price: 19, description: "Twelve pieces of extra crispy chicken" },
      { name: "Crispy Chicken Meal (5 pcs)", price: 10, description: "Five pieces of crispy fried chicken" },
      { name: "Crispy Chicken Meal (3 pcs)", price: 8, description: "Three pieces of crispy fried chicken" },
      { name: "Dabbous W Jeneh BBQ", price: 8, description: "BBQ flavored crispy chicken specialty" },
      { name: "Dabbous W Jeneh Buffalo", price: 8, description: "Spicy buffalo flavored crispy chicken" },
    ],
  },
  {
    title: "Beverages",
    image: beveragesImg,
    items: [
      { name: "Soft Drinks", price: 1, description: "Variety of refreshing soft drinks" },
      { name: "Ayran", price: 1, description: "Traditional yogurt drink" },
      { name: "Small Water", price: 0.5, description: "500ml bottled water" },
      { name: "Large Water", price: 1, description: "1L bottled water" },
      { name: "Sparkling Water", price: 1, description: "Refreshing sparkling water" },
    ],
  },
];