import axios from "axios";

export function storeExpense(expenseData) {
   axios.post(
    'https://react-native-course-a4ae6-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    );
}