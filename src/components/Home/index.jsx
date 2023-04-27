import {
   EuiBasicTable,
   EuiLink,
} from '@elastic/eui';
import testLogs from '../../../testLogs';
import { Theming } from './barChart';
   const users = testLogs;
   const columns = [
     {
       field: 'ip',
       name: 'IP address',
       sortable: true,
       truncateText: true,
       header: false,
       enlarge: true,
       footer: ({ items }) => <span>{items.length} Ip</span>,
         render: (user) => {
            return (
             `${user}`
         )},
     },
     {
       field: 'user',
       name: 'User',
       truncateText: true,
       footer: ({ items }) => <span>{items.length} users</span>,
       mobileOptions: {
         show: false,
       },
     },
     {
       field: 'method',
       name: 'Method',
       render: (username) => (
         <EuiLink href="#" target="_blank">
           {username}
         </EuiLink>
       ),
     },
     {
       field: 'protocol',
       name: 'Protocol',
       render: (dateOfBirth) =>
         {return `${dateOfBirth}`}
     },
     {
       field: 'userAgent',
       name: 'userAgent',
       truncateText: true,
       textOnly: true,
       render: (location) => {
         console.log('location', location)
         return `${location}`;
       },
     },
     {
       field: 'status',
       name: 'Status',
       dataType: 'boolean',
       render: (online) => {
         return  `${online}`;
       },
     },
   ];
 
   const getRowProps = (user) => {
     const { ip } = user;
     return {
       'data-test-subj': `row-${ip}`,
       className: 'customRowClass',
       onClick: () => {},
     };
   };
 
   const getCellProps = (
     user,
     column
   ) => {
     const { id } = user;
     const { field } = column;
     return {
       className: 'customCellClass',
       'data-test-subj': `cell-${id}-${String(field)}`,
       textOnly: true,
     };
   };
 

function Home() {
    return (
     <div>
     <EuiBasicTable
       tableCaption="Basic Table"
       items={users}
       columns={columns}
       rowProps={getRowProps}
       cellProps={getCellProps}
     />
     <Theming />
     </div>
    );
  }
  
  export default Home;