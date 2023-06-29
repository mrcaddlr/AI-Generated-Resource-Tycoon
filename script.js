const generateWoodButton = document.getElementById("generate-wood");
const generateMetalButton = document.getElementById("generate-metal");
const generatePlasticButton = document.getElementById("generate-plastic");

const woodAmountDisplay = document.getElementById("wood-amount");
const metalAmountDisplay = document.getElementById("metal-amount");
const plasticAmountDisplay = document.getElementById("plastic-amount");

let woodAmount = 100;
let metalAmount = 100;
let plasticAmount = 100;

// Upgrade buttons
const upgradeWoodButton = document.getElementById("upgrade-wood");
const upgradeMetalButton = document.getElementById("upgrade-metal");
const upgradePlasticButton = document.getElementById("upgrade-plastic");

// Upgrade prices
let woodUpgradePrice = 500;
let metalUpgradePrice = 500;
let plasticUpgradePrice = 500;

// Resource production multipliers
let woodMultiplier = 1;
let metalMultiplier = 1;
let plasticMultiplier = 1;

generateWoodButton.addEventListener("click", function() {
  woodAmount += 10 * woodMultiplier;
  woodAmountDisplay.innerHTML = woodAmount;
});

generateMetalButton.addEventListener("click", function() {
  metalAmount += 10 * metalMultiplier;
  metalAmountDisplay.innerHTML = metalAmount;
});

generatePlasticButton.addEventListener("click", function() {
  plasticAmount += 10 * plasticMultiplier;
  plasticAmountDisplay.innerHTML = plasticAmount;
});

upgradeWoodButton.addEventListener("click", function() {
  if (woodAmount >= woodUpgradePrice) {
    woodAmount -= woodUpgradePrice;
    woodUpgradePrice *= 2;
    woodMultiplier *= 2;
    woodAmountDisplay.innerHTML = woodAmount;
    alert("Wood production upgraded! New upgrade price: " + woodUpgradePrice);
  } else {
    alert("Not enough wood to upgrade");
  }
});

upgradeMetalButton.addEventListener("click", function() {
  if (metalAmount >= metalUpgradePrice) {
    metalAmount -= metalUpgradePrice;
    metalUpgradePrice *= 2;
    metalMultiplier *= 2;
    metalAmountDisplay.innerHTML = metalAmount;
    alert("Metal production upgraded! New upgrade price: " + metalUpgradePrice);
  } else {
    alert("Not enough Metal to upgrade");
  }
});

upgradePlasticButton.addEventListener("click", function() {
  if (plasticAmount >= plasticUpgradePrice) {
    plasticAmount -= plasticUpgradePrice;
    plasticUpgradePrice *= 2;
    plasticMultiplier *= 2;
    plasticAmountDisplay.innerHTML = plasticAmount;
    alert("Plastic production upgraded! New upgrade price: " + plasticUpgradePrice);
  } else {
    alert("Not enough plastic to upgrade");
  }
});