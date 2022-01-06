import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducers';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import 'firebase/compat/auth';
import {createFirestoreInstance} from 'redux-firestore'
import thunk from 'redux-thunk'
const firebaseConfig = {
  apiKey: "AIzaSyDXrgsw9YXbyT7IHVAdIwQDLxHQTv8I70A",
  authDomain: "resume-e003d.firebaseapp.com",
  projectId: "resume-e003d",
  storageBucket: "resume-e003d.appspot.com",
  messagingSenderId: "645347296415",
  appId: "1:645347296415:web:3ed9a6ca8f717320d84eaa"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()
const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));



ReactDOM.render(

  <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
        <App/>
      </ReactReduxFirebaseProvider>
      
      </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);