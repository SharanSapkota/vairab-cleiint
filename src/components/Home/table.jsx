import {
  EuiBasicTable,
  EuiLink,
} from '@elastic/eui';
import { useEffect, useState } from 'react';
import testLogs from '../../../testLogs';
import { getLogs } from '../../services';

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
         'fdsfsdf'
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
    {
     field: 'timestamp',
     name: 'timestamp',
     dataType: 'string',
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


function Table({aggregatedLogs, logs}) {
const getCommonIp = (mostActiveIp) => {
  const maxCount = mostActiveIp?.reduce((max, obj) => {
    return obj.count > max ? obj.count : max;
  }, 0);
  return mostActiveIp?.find(d => d.count === maxCount)
}

const getHttpMethod = (mostCommonProtocol) => {
  const maxCount = mostCommonProtocol?.reduce((max, obj) => {
    return obj.count > max ? obj.count : max;
  }, 0);
  return mostCommonProtocol?.find(d => d.count === maxCount)
}

const getTotalData = (log) => {
  let totalCount = 0
  for (let i = 0; i < log.length; i++) {
    totalCount += log[i].count;
  }
  return totalCount
  }
   return (
    <div >
      total data {aggregatedLogs.length > 0 && getTotalData(aggregatedLogs[0]?.mostActiveIp)} <br></br>
      most common Ip address : {`${aggregatedLogs.length > 0 && getCommonIp(aggregatedLogs[0]?.mostActiveIp)?._id} used ${getCommonIp(aggregatedLogs[0]?.mostActiveIp)?.count} times`} <br></br>
      most commonly used HTTP method:{`${aggregatedLogs.length > 0 && getHttpMethod(aggregatedLogs[1]?.mostCommonProtocol)?._id} used ${getHttpMethod(aggregatedLogs[1]?.mostCommonProtocol)?.count} times`}<br></br> 
    <EuiBasicTable
      className="eu-table"
      tableCaption="Basic Table"
      items={logs}
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
    </div>
   );
 }
 
 export default Table;