
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux5a/store";
import Posts from "../../Redux5a/Posts";



function Course() {
return(
      <Provider store={ store }>
              <Posts />
          </Provider>   
   );
  }
export default Course;