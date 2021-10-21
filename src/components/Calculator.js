import '../Calculator.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setstate] = useState({ total: 0, next: null, operation: null });

  const handleClick = (data) => {
    setstate(calculate(state, data));
  };

  const tableButtons = [
    [0],
    ['AC', '+/-', '%', String.fromCodePoint(247)],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const { total, next, operation } = state;
  const previousState = {
    total,
    next,
    operation,
  };

  return (
    <Table
      tableButtons={tableButtons}
      previousState={previousState}
      handleClick={handleClick}
    />
  );
};

const Table = ({ tableButtons, previousState, handleClick }) => (
  <table className="table">
    <tbody>
      {
        tableButtons.map((row) => (
          <TableRow
            key={Math.random()}
            row={row}
            handleClick={handleClick}
            previousState={previousState}
          />
        ))
      }
    </tbody>
  </table>
);

Table.propTypes = { tableButtons: PropTypes.instanceOf(Array).isRequired };
Table.propTypes = { previousState: PropTypes.instanceOf(Object).isRequired };
Table.propTypes = { handleClick: PropTypes.instanceOf(Function).isRequired };

const TableRow = ({ row, previousState, handleClick }) => (
  <tr className="tr">
    {
      row.map((button) => (
        <TableEntry
          key={Math.random()}
          text={button}
          handleClick={handleClick}
          previousState={previousState}
        />
      ))
    }
  </tr>
);

TableRow.propTypes = { row: PropTypes.instanceOf(Array).isRequired };
TableRow.propTypes = { previousState: PropTypes.instanceOf(Object).isRequired };
TableRow.propTypes = { handleClick: PropTypes.instanceOf(Function).isRequired };

const TableEntry = ({ text, previousState, handleClick }) => {
  const { total, next, operation } = previousState;
  let value = '';
  if (text === 0) {
    value = (
      <td className="td">
        <div>
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
      </td>
    );
  } else {
    value = (
      <td className="td">
        <div aria-hidden onClick={() => handleClick(text)}>
          {text}
        </div>
      </td>
    );
  }

  return value;
};

TableEntry.propTypes = { text: PropTypes.string.isRequired };
TableEntry.defaultProps = { text: '0' };

export default Calculator;
