// import required custom components
import FreshBadge from "components/common/FreshBadge";

//Capitalized First Character
export function capitalizedWord(str) {
  return str.replace(/-|\b\w/g, (match) => {
    // If the match is a hyphen, replace it with a space
    if (match === "-") {
      return " ";
    }
    // Otherwise, capitalize the word
    return match.toUpperCase();
  });
}

// Render HTML
export function createMarkup(content) {
  return { __html: content };
}

//Create Tab Slug
export function createTabSlug(str) {
  return str.toLowerCase().split(" ").join("-");
}

//Format Date
export function formatDate(isoString) {
  const date = new Date(isoString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return `${day} ${month}, ${year} at ${hours}:${minutes}${ampm}`;
}

//User Order Table Status
export function userOrderStatus(item) {
  switch (item) {
    case "Processing":
      return <FreshBadge content="Processing" bg="warning" pill={false} />;
    case "Completed":
      return <FreshBadge content="Completed" bg="success" pill={false} />;
    case "Cancel":
      return <FreshBadge content="Cancel" bg="danger" pill={false} />;

    default:
      "";
  }
}

//Get Filter Product By Tag Name
export function filterProductsByTag(products, tagName) {
  return products.filter(
    (product) => product.tag && product.tag.includes(tagName)
  );
}

export function getProductByCategoryName(categoryName, products) {
  const filteredProducts = products.filter(
    (item) => item.product_category && item.product_category === categoryName
  );

  return filteredProducts;
}

export function getProductsByCategoryNames(categoryNames, products) {
  const filteredProducts = products.filter(
    (item) =>
      item.product_category && categoryNames.includes(item.product_category)
  );

  return filteredProducts;
}

// Function to calculate sales price
export function calculateSalePrice(price, discount) {
  const salePrice = price - (price * discount) / 100;
  return salePrice;
}

// Function to calculate average rating
export const calculateAvgRating = (reviews) => {
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1);

  const totalReview = reviews?.length;

  return {
    totalReview,
    avgRating,
  };
};

//Thoursand Seperator
export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to generate delivery options for the upcoming seven days
export // Function to generate delivery options for the upcoming seven days
function generateDeliveryOptions() {
  const deliveryOptions = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);

    const dayName =
      i === 0 ? "Today" : day.toLocaleDateString("en-US", { weekday: "short" });
    const shortDate = day.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const options = [
      {
        time: "Within 2 Hours",
        price: "$4.00",
        status: "Paid",
      },
      {
        time: "Within 3 Hours",
        price: "$3.50",
        status: "Paid",
      },
      {
        time: "1pm - 2pm",
        price: "$0.00",
        status: "Free",
      },
      {
        time: "2pm - 3pm",
        price: "$3.99",
        status: "Paid",
      },
      {
        time: "3pm - 4pm",
        price: "$3.99",
        status: "Paid",
      },
      // Add more delivery options for different times as needed
    ];

    // Pushing the grouped delivery options
    deliveryOptions.push({
      day: dayName,
      date: shortDate,
      options: options,
    });
  }

  return deliveryOptions;
}

// Displaying the first item as today
const deliveryOptions = generateDeliveryOptions();

export function getUniqueParam(products, params) {
  const dataSet = new Set();
  products.forEach((product) => {
    dataSet.add(product[params]);
  });

  return Array.from(dataSet);
}

export function getRecentOrderStatus(status) {
  switch (status) {
    case "Shipped":
      return (
        <FreshBadge
          content={status}
          bg="light-primary"
          text="dark-primary"
          pill={false}
        />
      );
    case "Pending":
      return (
        <FreshBadge
          content={status}
          bg="light-warning"
          text="dark-warning"
          pill={false}
        />
      );
    case "Cancel":
      return (
        <FreshBadge
          content={status}
          bg="light-danger"
          text="dark-danger"
          pill={false}
        />
      );
    default:
      return (
        <FreshBadge
          content={status}
          bg="light-info"
          text="dark-info"
          pill={false}
        />
      );
  }
}

//search and filter function
export function searchWithFilter(
  items,
  searchParams,
  query,
  filterItem,
  filterParam
) {
  return items.filter((item) => {
    if (filterParam === "0" || filterParam === "") {
      return searchParams.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    } else if (item[filterItem] === filterParam) {
      return searchParams.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    } else {
      return false; // No match for filterItem and filterParam is not "0" or ""
    }
  });
}

// Function to convert string to number upto 5 number
export function stringToNumber(string) {
  switch (string) {
    case "one star":
      return 1;
    case "two star":
      return 2;
    case "three star":
      return 3;
    case "four star":
      return 4;
    case "five star":
      return 5;
    default:
      return NaN; // Not a Number
  }
}
