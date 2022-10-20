import React from "react";
import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 2</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$293.21</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
