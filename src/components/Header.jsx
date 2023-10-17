import "./Header.css";

const Header = ({ handleSearchInput }) => {
  return (
    <header className="header">
      <h1>Dfine</h1>
      <form className="fact-form">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" onChange={e => handleSearchInput(e.target.value)}/>
      </form>
    </header>
  );
};

export default Header;
