import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
import { DBCharacters } from "../models/DBCharacters";
import { Minor } from "../models/Minor";
import { Tertiary } from "../models/Tertiary";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);

  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  // const fandom = "https://dragonball.fandom.com/wiki/";

  const handleDownload = () => {
    console.log("Whole object:");
    console.log(DBCharacters);
    const finalChar = DBCharacters.map(({ id, title }) => {
      if (
        Minor.some((minor) => minor.title === title) ||
        Tertiary.some((tertiary) => tertiary.title === title)
      ) {
        return 0;
      }
      return { id: id, title: title };
    });
    console.log("With 0's: ");
    console.log(finalChar);
    const a = finalChar.filter((final) => final !== 0);
    console.log("Filter final: ");
    console.log(a);
    // const final = filterTertiary.map(
    //   (x) => `{ url: "${fandom + x.split(" ").join("_")}" }`
    // );
    // console.log("Final map: ");
    // console.log(final);
  };

  return (
    <div className="container mt-5">
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character:{" "}
              <input
                placeholder="Character Name"
                type="text"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Results: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-warning text-center">
              No Results Found
            </div>
          )}
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </div>
      <button type="button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default SearchScreen;

// https://dragonball.fandom.com/api/v1/Articles/List?category=Characters&limit=1511

// https://dragonball.fandom.com/api/v1/Articles/Details?ids=9124&abstract=200&width=200&height=200
