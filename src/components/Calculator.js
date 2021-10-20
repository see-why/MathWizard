import '../Calculator.css';
import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  tableButtons = [
    [0],
    ['AC', '+/-', '%', String.fromCodePoint(247)],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  render() {
    return (<Table tableButtons={this.tableButtons} />);
  }
}

const Table = ({ tableButtons }) => (
  <table className="table">
    <tbody>
      {
        tableButtons.map((row) => (
          <TableRow
            key={Math.random()}
            row={row}
          />
        ))
      }
    </tbody>
  </table>
);

Table.propTypes = { tableButtons: PropTypes.instanceOf(Array).isRequired };

const TableRow = ({ row }) => (
  <tr className="tr">
    {
      row.map((button) => (
        <TableEntry
          key={Math.random()}
          text={button}
        />
      ))
    }
  </tr>
);

TableRow.propTypes = { row: PropTypes.instanceOf(Array).isRequired };

const TableEntry = ({ text }) => (
  <td className="td">
    <div>
      {text}
    </div>
  </td>
);

TableEntry.propTypes = { text: PropTypes.string.isRequired };

export default Calculator;
