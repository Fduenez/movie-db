import React from 'react';
import classes from './Toolbar.module.css'
import SearchBar from './SearchBar/SearchBar';

function Toolbar({movieHandler}){
    return (
        <div className={classes.toolbar}>
            <div className={classes.leftContent}>
                <div className={classes.name}>
                    <h1 className={classes.titleName}>Movie DB</h1>
                </div>
            </div>
            <div className={classes.rightContent}>
                <SearchBar movieHandler={movieHandler}/>

            </div>
        </div>
    );
}

export default Toolbar;