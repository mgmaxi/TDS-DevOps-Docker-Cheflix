import React from 'react';
import '../assets/styles/header-view.css';

const HeaderView = () => {
  return (
    <div className="header-view">
      <h2 className="header-view-title">Drag me to..</h2>
      <p className="header-view-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa
        mollitia necessitatibus delectus accusamus magni praesentium officia,
        fugit id, quaerat commodi nobis neque quisquam sunt accusantium deleniti
        ab doloremque deserunt! Asperiores doloribus accusamus tenetur qui cum
      </p>
      <div className="header-view-btn">
        <button className="play-btn">
          <div>&gt;</div>
          <span>Play</span>
        </button>
        <button className="info-btn">
          <div>@</div>
          <span>More info</span>
        </button>
      </div>
      <div className="actions-maturity-container">
        <div className="actions-btn">@</div>
        <div className="maturity-rating">16+</div>
      </div>
    </div>
  );
};

export default HeaderView;
