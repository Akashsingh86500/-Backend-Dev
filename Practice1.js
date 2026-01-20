// q1


const rawUsers = [
  { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
  { id: 2, name: "Sanya", password: "123_password", role: "user" },
  { id: 3, name: "Amit", password: "secret_password", role: "user" }
];

// 1. Remove passwords using map + rest operator
const safeUsers = rawUsers.map(({ password, ...rest }) => rest);

// 2. Filter only admins
const admins = safeUsers.filter(user => user.role === "admin");

console.log("Safe Users:", safeUsers);
console.log("Admins:", admins);


// q2


const cart = [
  { item: "Laptop", price: 50000, quantity: 1, inStock: true },
  { item: "Mouse", price: 1500, quantity: 2, inStock: true },
  { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

// 1. Check if every item is in stock
const allInStock = cart.every(product => product.inStock);

console.log(allInStock ? "Ready to Ship" : "Wait");

// 2. Filter items that are in stock
const availableItems = cart.filter(product => product.inStock);

// 3. Calculate total bill using reduce
const totalBill = availableItems.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log("Available Items:", availableItems);
console.log("Total Bill:", totalBill);