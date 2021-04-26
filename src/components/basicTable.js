import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./column";
import "./table.css";

export const BasicTable = () => {



    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const lastRow = {
        id: data.length + 1,
        first_name: "CUCM total head count",
        last_name: "",
        "T-S/M-F": "",
    };
    for (var i = 1; i <= 30; i++) {
        lastRow[`${i}`] = 0;
    }

    data.map((row) => {
        row.Total = 0;

        for (var i = 1; i <= 30; i++) {
            row.Total = row.Total + row[`${i}`];
            lastRow[`${i}`] = lastRow[`${i}`] + row[`${i}`];
        }

    });
    data.push(lastRow);
    const d = new Date();
    const SM = d.getMonth();
    const FY = d.getFullYear();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    const tableInstance = useTable({
        columns,
        data,
    });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;
    return ( <
        >
        <
        h2 > GCE CUCM MONTH - { n }
        YEAR - { FY } < /h2>{" "} <
        h6 > { " " }
        Enter P: Present, WFH = Work from Home, PTO = PTO, SL = sick leave, PL =
        Present but Late, PH = Public Holiday, W = Weekend { " " } <
        /h6>{" "} <
        table {...getTableProps() } >
        <
        thead > { " " } {
            headerGroups.map((headerGroup) => ( <
                tr {...headerGroup.getHeaderGroupProps() } > { " " } {
                    headerGroup.headers.map((column) => ( <
                        th {...column.getHeaderProps() } > { " " } { column.render("Header") } { " " } <
                        /th>
                    ))
                } { " " } <
                /tr>
            ))
        } { " " } <
        /thead>{" "} <
        tbody {...getTableBodyProps() } > { " " } {
            rows.map((row) => {
                prepareRow(row);
                return ( <
                    tr {...row.getRowProps() } > { " " } {
                        row.cells.map((cell) => {
                            return ( <
                                td {...cell.getCellProps() } > { cell.render("Cell") } < /td>
                            );
                        })
                    } { " " } <
                    /tr>
                );
            })
        } { " " } <
        /tbody>{" "} < /
        table > { " " } <
        />
    );
};

export default BasicTable;