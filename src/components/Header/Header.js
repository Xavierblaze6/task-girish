import React from 'react';

const Header = ({ setGrouping }) => {
    return (
        <div className="header">
            <button onClick={() => setGrouping('user')}>Group by User</button>
            <button onClick={() => setGrouping('priority')}>Group by Priority</button>
        </div>
    );
};

export default Header;
