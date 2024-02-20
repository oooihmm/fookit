import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Community } from '../../pages/community/hooks';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F8E7C8',
    fontSize: 20,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CommunityTable = ({ communityData }: { communityData: Community[] }) => {
  const navigate = useNavigate();
  const tableCells = ['Title', 'Author', 'Created Date', 'Views'];

  return (
    <TableContainer>
      <Table
        sx={{ width: '100%', boxShadow: 0 }}
        aria-label='customized table'>
        <TableHead sx={{ height: '80px' }}>
          <TableRow>
            {tableCells.map((cell, index) => {
              return (
                <StyledTableCell align={index ? 'right' : 'left'}>
                  {cell}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {communityData.map((row) => (
            <StyledTableRow
              key={row.boardId}
              onClick={() => navigate(`/community/${row.boardId}/detail`)}>
              <StyledTableCell
                component='th'
                scope='row'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.author}</StyledTableCell>
              <StyledTableCell align='right'>{row.createdDate}</StyledTableCell>
              <StyledTableCell align='right'>{row.views}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommunityTable;
