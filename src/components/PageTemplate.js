import React from "react";
import styles from './PageTemplate/PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h2>schedule management</h2>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;