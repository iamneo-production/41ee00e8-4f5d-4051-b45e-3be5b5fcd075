
import { createStore } from 'redux';

const Initialstate={
  vehicleno : "TN 47 AE 4534"
}

const Store=createStore((state = Initialstate)=>state);

// const reducer = (state = false, action) => {
//   switch (action.type) {
//     case 'Login':
//       return true;
//     case 'Logout':
//       return false;
//     default:
//       return state;
//   }
// };



export default Store;