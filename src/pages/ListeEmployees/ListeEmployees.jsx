import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import '../../pages/ListeEmployees/ListeEmployees.css';

const ListEmployees = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  const employees = useSelector((state) => state.employees?.employees || []);

  // Configuration des colonnes
  const columns = useMemo(() => [
    { accessorKey: 'firstName', header: 'Prénom' },
    { accessorKey: 'lastName', header: 'Nom' },
    { accessorKey: 'startDate', header: 'Date de début' },
    { accessorKey: 'department', header: 'Département' },
    { accessorKey: 'dateOfBirth', header: 'Date de naissance' },
    { accessorKey: 'street', header: 'Rue' },
    { accessorKey: 'city', header: 'Ville' },
    { accessorKey: 'state', header: 'État' },
    { accessorKey: 'zipCode', header: 'Code postal' },
  ], []);

  // Configuration React Table
  const table = useReactTable({
    data: employees,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 10 }
    },
  });
  

  return (

    
    <main className="container">
      <Header />
      <h1>Liste des Employés</h1>
      
      {employees.length === 0 ? (
        <div className="no-employees">
          <p>Aucun employé trouvé.</p>
        </div>
      ) : (
        <div className="employees-table-container">
          
          {/* Barre de recherche */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Rechercher..."
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              style={{ padding: '8px', width: '300px', marginRight: '10px' }}
            />
            <Button
              text="Effacer"
              primary={true}
              onClick={() => setGlobalFilter('')}
            />
          </div>

          {/* Tableau */}
          <table className="employees-table">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{ cursor: 'pointer' }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === 'asc' && ' ↑'}
                      {header.column.getIsSorted() === 'desc' && ' ↓'}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext()) || 'Non renseigné'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination simple */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button
              text="Précedent"
              primary={true}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
            <span>
              Page {table.getState().pagination.pageIndex + 1} sur {table.getPageCount()}
            </span>
            <Button
              text="Suivant"
              primary={true}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
              {[5, 10, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize} par page
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </main>
  );
};

export default ListEmployees;