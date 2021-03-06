import React from "react";
import { useTable } from "react-table";

const FlowersDisplay = (props) => {
  const funct = props.deleteFlower;
  const data = Object.values(props);
  const columns = React.useMemo(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "Type", accessor: "type" },
      { Header: "Color", accessor: "color" },
      {
        Header: "Quantity",
        accessor: "quantity",
        sortable: false,
        filterable: false,
      },
      {
        Header: "Delete",
        Cell: (props) => {
          return (
            <button
              className="delete"
              onClick={() => {
                funct(props.row.original.id);
              }}
            >
              Delete
            </button>
          );
        },
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <section className="table">
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px blue",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px blue",
                        background: "aliceblue",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default FlowersDisplay;
