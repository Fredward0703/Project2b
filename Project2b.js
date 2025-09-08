// Coding Challenge 2b

// Code goes here
let producetName = "Telescopes for Nerds";
console.log("Product I will be selling is:", producetName);
let unitCost = 89.99;
let currentStock = 10;
let reorderLevel = 15;
let targetStock = 30;
let weeklyDemand = 8;
let supplierLeadTimeWeeks = 1;
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
console.log("Weeks of cover:", weeksOfCover);
let stockDeficit = Math.max(0, targetStock - currentStock);
console.log("Our current stock deficit is:", stockDeficit);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
console.log("How much we're receiving:",reorderQuantity);
let estimatedReorderCost = reorderQuantity * unitCost;
console.log("Reordering this amount will cost us: $", estimatedReorderCost);
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
console.log("We should reorder this NOW:",reorderNow);