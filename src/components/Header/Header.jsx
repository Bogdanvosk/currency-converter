import React from 'react';
import { VerticalDivider } from "@react-md/divider";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ReactMDLink } from "@react-md/link";
import styles from './header.module.css'

function Link(props) {
    return <ReactMDLink component={ReactRouterLink} {...props} />;
}

const Header = () => {
    return (
        <nav>
            <ul className={styles.navMenu}>
                <Link to='/list'>List</Link>
                <VerticalDivider />
                <Link to='/converter'>Converter</Link>
            </ul>
        </nav>
    );
};

export default Header;