import React, {useState, useEffect, Component} from "react";
import Header from './components/Header/Header'
import UserSection from './components/UserSection/UserSection';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeList from "./components/utils/EmplopyeeList";
// import people from "./directory.json";

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <UserSection />
    </div>
  );
}

export default App;
