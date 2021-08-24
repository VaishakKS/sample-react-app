function SearchResult(props){
    function updateURL() {
        props.url = "localhost";
    }
    return(
        <div>
            <div className="search-url">{props.url}</div>
            <h2 className="search-title">{props.title}</h2>
            <div className="search-description">{props.description}</div>
            <button onClick={updateURL}>Update URL</button>
        </div>
    );
}

export default SearchResult;