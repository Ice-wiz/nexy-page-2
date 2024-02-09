import axios from "axios";
import React from "react";
import { ExportCSV } from "./Excel/ExportToCSV";
// import "./styles.css";

const App: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((r) => setData(r.data));
    };
    fetchData();
  }, []);


  const renderTable = () => {
    return (
      <table className='data-table'>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post: { userId: number, id: number; title: string; body: string }) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'flex-end', paddingTop:'10px' , paddingRight:'10px'}}>
      <ExportCSV csvData={data} fileName="text-excel-doc" />
      </div>
    <div>
      {renderTable()}
      <style>{`
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .data-table, .data-table th, .data-table td {
          border: 1px solid #ddd;
        }
        .data-table th, .data-table td {
          text-align: left;
          padding: 8px;
        }
        .data-table th {
          background-color: #f2f2f2;
        }
        .data-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .export-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
        }
        .export-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
      
      {/* <button onClick={exportDataToCSV}>export to csv</button> */}
    </div>
  );
};











export default App;
