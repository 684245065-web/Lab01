let dailySales: number[] = [15000, 5500, 4200, 8900, 7300, 9600, 12500];
function getRestockList(inventory: number[]): number[]{
    const restockList : number[] =[];
    for(let i=0; i<inventory.length; i++){
        if(inventory[i]>10000){
            restockList.push(inventory[i]);
        }
    }
    return restockList;
}
const restock: number[]= getRestockList(dailySales);
console.log(`ยอดขายดีเยี่ยม : ${restock}`);