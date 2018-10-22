import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
    const _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={onchange} value={value} onKeyPress={_handleKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>Add</div>
        </div>
    );   
}

export default TodoInput;