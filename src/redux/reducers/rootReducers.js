import { combineReducers } from "redux";
import documentReducer from "./documentReducers";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    auth: authReducer,
})
export default rootReducer;