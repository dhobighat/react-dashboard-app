import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useAuth0 } from '@auth0/auth0-react';


const Search = (props) => {

    const { isAuthenticated} = useAuth0();
    if(isAuthenticated){
        return (
            <div className={props.classes.search}>
            <div className={props.classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: props.classes.inputRoot,
                input: props.classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        );
    }
    else{
        return <div></div>;
    }
}

export default Search;