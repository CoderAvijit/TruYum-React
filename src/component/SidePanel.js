import React from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <h3>Menu</h3>
      <div className="menulink">
        <Link  to="/Menu_1">Break Fast</Link>
      </div>
      <div className="menulink">
        <Link  to="/Menu_2">Lunch</Link>
      </div>
      <div className="menulink">
        <Link  to="/Menu_3">Snacks</Link>
      </div>
      <div className="menulink">
        <Link  to="/Menu_4">Dinner</Link>
      </div>
      <div className="menulink">
        <Link  to="/Menu_5">Biriyani Special</Link>
      </div>
    </div>
  );
};

export default SidePanel;
