import React from "react";
import Button from "react-bootstrap/Button";
import FileSaver from "file-saver"
import * as XLSX from "xlsx";

type Props = {
  csvData: Object[];
  fileName: string;
};

export const ExportCSV: React.FC<Props> = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData: Object[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver(data, fileName + fileExtension);
    
  };

  return (
    <Button style={{color:'green'}}onClick={() => exportToCSV(csvData, fileName)}>
      Export data
    </Button>
  );
};
