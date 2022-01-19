import { ItemObject } from "../context/dataContext";

interface FinalBillOfPerson {
  name: string;
  totalAmountToPay: number;
  itemsToPayFor: ItemObject[];
}

//FIXME: Fix calculations this shit is wrong LOL
export const calculateTotals = (peopleList: string[], itemsList: ItemObject[]) => {
    const totalsForEachPerson: {[key: string]: FinalBillOfPerson} = {}
    peopleList.forEach((personName) => {
        totalsForEachPerson[personName] = {
            name: personName,
            totalAmountToPay: 0,
            itemsToPayFor: []
        }
    })

    itemsList.forEach(itemObj => {
        itemObj.assignedPeople.forEach(personName => {
            totalsForEachPerson[personName].totalAmountToPay += itemObj.itemPrice
            totalsForEachPerson[personName].itemsToPayFor.push(itemObj)
        })
    })

    return [...Object.values(totalsForEachPerson)]
};
