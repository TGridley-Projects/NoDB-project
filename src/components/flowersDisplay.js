import React from 'react';
import {useTable} from 'react-table'
// import "react-table/react-table.css"

const FlowersDisplay = (props) =>{
    const data = Object.values(props)
    // const data = useMemo(() => {owned.map()})
    const columns = React.useMemo(
        () => [
        {Header: "Type", accessor: "type"},
        {Header: "Color", accessor: "color"},
        {Header: "Quantity", accessor: "quantity", sortable: false, filterable: false}
    ], [])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <table {...getTableProps()} style={{border: 'solid 1px blue'}}>            
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default FlowersDisplay