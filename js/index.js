import { getExpensesData } from './lib/firebase/api';
import { expenseItemTemplte } from './templates/expenseItem';

async function appInit() {
const appData = await getExpensesData();
const expensesItem = Object.values(appData).map((obj) => {
	return expenseItemTemplte(obj.data);
});

expensesItem.forEach((data) => {
	document.querySelector('#root').insertAdjacentHTML('afterbegin', data);
})
}

appInit();