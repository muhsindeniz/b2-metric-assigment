import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

type DataColumn = {
  label: string;
  accessor: string;
  render?: (row: any) => JSX.Element;
};

type DataTableProps = {
  columns: DataColumn[];
  data: any[];
};

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {columns &&
              columns.map((col, idx) => (
                <th className="border-b px-8 border-gray text-darkGray text-left py-3" key={idx}>
                  {col.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData &&
            paginatedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray cursor-pointer">
                {columns.map((col, colIndex) => (
                  <td className="border-b border-gray py-6 px-8" key={colIndex}>
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-7 items-center px-8 pb-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="cursor-pointer disabled:opacity-50 bg-gray px-3 py-1 border rounded-full hover:bg-green transition-all"
        >
          <FiArrowLeft />
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          className="cursor-pointer bg-gray disabled:opacity-50 px-3 py-1 border rounded-full hover:bg-green transition-all"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DataTable;
