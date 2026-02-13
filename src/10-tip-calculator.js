/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if(billAmount<=0) return null;
  if(typeof(serviceRating) !== 'number' || !Number.isInteger(serviceRating)) return null;
  if(serviceRating<1 || serviceRating>5) return null;
  let tipPer = 0;
  switch(serviceRating){
    case 1:
      tipPer=5;
      break;
    case 2:
      tipPer=10;
      break;
    case 3:
      tipPer=15;
      break;
    case 4:
      tipPer=20;
      break;
    case 5:
      tipPer=25;
      break;
  }
  let tipamn = 0;
  tipamn = Math.round(billAmount*tipPer)/100;
  return{
    tipPercentage: tipPer,
    tipAmount: tipamn,
    totalAmount: billAmount + tipamn
  };
}
