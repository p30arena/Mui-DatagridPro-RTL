import * as React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'firstName1',
    headerName: 'First name 1',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName1',
    headerName: 'Last name 1',
    width: 150,
    editable: true,
  },
  {
    field: 'age1',
    headerName: 'Age 1',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName1',
    headerName: 'Full name 1',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName1 || ''} ${params.row.lastName1 || ''}`,
  },
];

const rows = [
  {
    id: 1,
    lastName: 'اشتهاری پور',
    firstName: 'علی',
    age: 31,
    lastName1: 'Snow',
    firstName1: 'Jon',
    age1: 35,
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    lastName1: 'Lannister',
    firstName1: 'Cersei',
    age1: 42,
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    lastName1: 'Lannister',
    firstName1: 'Jaime',
    age1: 45,
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16,
    lastName1: 'Stark',
    firstName1: 'Arya',
    age1: 16,
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    lastName1: 'Targaryen',
    firstName1: 'Daenerys',
    age1: null,
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    lastName1: 'Melisandre',
    firstName1: null,
    age1: 150,
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    lastName1: 'Clifford',
    firstName1: 'Ferrara',
    age1: 44,
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    lastName1: 'Frances',
    firstName1: 'Rossini',
    age1: 36,
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    lastName1: 'Roxie',
    firstName1: 'Harvey',
    age1: 65,
  },
];

export default function DataGridProDemo() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box dir="rtl" sx={{ height: 400, width: '100%' }}>
          <DataGridPro
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
