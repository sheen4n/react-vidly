import React from 'react';

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  valueProperty = '_id',
  textProperty = 'name'
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={`list-group-item ${item === selectedItem && 'active'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
