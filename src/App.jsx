import React from "react";
import FormSection from "./components/FormSection";
import ImageSection from "./components/ImageSection";

const App = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <FormSection />
        <ImageSection />
      </div>
    </React.Fragment>
  );
};

export default App;
