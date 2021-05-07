import React, { useMemo, useState, useEffect , Component} from "react";
import { render } from 'react-dom';
import ReactTable from 'react-table';
import { useForm, useField, splitFormProps } from "react-form";
import { useTable } from "react-table";
import logo from './restoration-logo.png';
import us from './vendor-logo.PNG';

import "./ShopPage.css";

import Table from "./Table";
import InventoryForm from "./InventoryForm";
function ShopPage(props) {
    const Status = ({ value }) => {
        // Loop through the array and create a badge-like component instead of a comma-separated string
        return (
                <span key={value} className="badge">
                </span>
      
        );
      };
      function handleChange(e) {
        console.log(e.target.value);
      }

      const NumericalInput = props => {
        console.log("NumericalInput", props);
        const { column, row, cell, updateData } = props;
        const onChange = e => updateData(row.index, column.id, e.target.value);
        return <input type="number" value={cell.value} onChange={handleChange} />;
      };
 

      const StringInput = props => {
        console.log("StringInput", props);
        const { column, row, cell, updateData } = props;
        const onChange = e => updateData(row.index, column.id, e.target.value);
        return <input type="string" value={cell.value} onChange={handleChange} />;
      };

      const columns = useMemo(
        () => [
    
          {
            // first group - TV Show
            Header: "Inventory",
            // First group columns
            columns: [
              {
                Header: "Item",
                accessor: "item.name",
                Cell: StringInput
              },
              {
                Header: "Type",
                accessor: "item.type",
                Cell: StringInput
              },
              {
                Header: "QTY",
                accessor: "item.quantity",
                Cell: NumericalInput
              },
              {
                Header:"Unit Price",
                accessor:"item.price",
                Cell: StringInput
              }
            ]
          },
          {
            // Second group - Details
            Header: "Order Details",
            // Second group columns
            columns: [
              {
                Header: "Order(s)",
                accessor: "item.orders",
                Cell: NumericalInput
                // Cell: ({ cell: { value } }) => <Orders values={value} />
              },
              {
                Header: "Status",
                accessor: "item.status",
                Cell: StringInput
              //   Cell: row => {
              //     row.styles["backgroundColor"] = row.value == "In Progress" ? "red" : "green";
              //     return row.value.toUpperCase();
              // }
              },
              {
                Header: "Last Updated",
                accessor: "item.update",
                Cell: StringInput
              }
    
            ]
          }
        ],
        []
      );
    
      const initialData = [
        {
          "item": {
            "id": 44813,
            "name": "Granny Smith Apple",
            "type": "Produce",
            "quantity": 20,
            "orders": 5,
            "status": "Complete",
            "update": "4/9/2021",
            "price": "$1.00",
            }
        },
        {
          "item": {
            "id": 44814,
            "name": "Red Anjou Pears",
            "type": "Produce",
            "quantity": 150,
            "orders": 14,
            "status": "In Progress",
            "update": "4/9/2021",
            "price": "$1.50",
            }
        },
        {
          "item": {
            "id": 448135,
            "name": "Nature's Valley Granola Bars",
            "type": "Snacks",
            "quantity": 100,
            "orders": 38,
            "status": "In Progress",
            "update": "4/9/2021",
            "price": "$2.50",
            },
        },
        {
          "item": {
            "id": 44816,
            "name": "Smartfood White Cheddar Popcorn",
            "type": "Snacks",
            "quantity": 50,
            "orders": 10,
            "status": "Complete",
            "update": "4/7/2021",
            "price": "$5.50",
            }
        },
        {
          "item": {
            "id": 44817,
            "name": "Monterey Jack Cheese",
            "type": "Dairy",
            "quantity": 12,
            "orders": 0,
            "status": "Not Applicable",
            "update": "4/9/2021",
            "price": "$4.50",
            }
        }
      ]
      const [data, setData] = React.useState(initialData);
      const resetData = () => setData(initialData);
      const addRow = () => setData(old => [...old, { id: 33555, name: "Madagascar Vanilla Extract", type: "Pantry", quantity: 10, orders: 0, status: "Not Applicable", update: "5/6/2021", price:"$8.40"}]);
      const updateData = (rowIndex, columnID, value) => {
        setData(oldData =>
          oldData.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...oldData[rowIndex],
                [columnID]: value
              };
            }
            return row;
          })
        );
      };
      const table = useTable({ columns, data, updateData });
      const { getTableProps, headerGroups, rows, prepareRow } = table;
    //   const tableSum = rows.reduce((sum, row) => sum + row.values.total, 0);
    //   console.log("setAmountDue", tableSum);
    //   setAmountDue(tableSum);


      return(
        <div className="Shop">
        <img src={logo} width="150" height="100"/>
     
        <center> <h1>Welcome Back </h1> <h1color> Restoration Farms </h1color> </center>
        <table> 
        <Table columns={columns} data={data} />
        {/* <InventoryForm />, */}

        <tbody>
          <tr>
            <td colSpan={3}>
              <button type="button" onClick={addRow}>
                Add Row
              </button>
              <button type="button" onClick={resetData}>
                Revert To Last Save
              </button>
            </td>
          </tr>
        </tbody>
        </table>
        
        <br></br>
  
        <br></br>
        <br></br>      
        <br></br>
        <br></br>
       <p> Brought to you by </p><img src={us} width="100" style={{float : 'bottom'}} />
      </div>
    );

}
export default ShopPage;