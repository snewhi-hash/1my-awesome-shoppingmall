import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="🔍 할 일 검색..."
                value={searchQuery}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;