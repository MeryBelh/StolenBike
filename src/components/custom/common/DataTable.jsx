import React, { PureComponent } from 'react';
import { Table } from 'antd';

export default class DataTable extends PureComponent {

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) onChange(pagination);
  };

  render() {
    const {
      dataSource: { metadata, data, pagination },
      actionColumns,
    } = this.props;

    const indexedData = data.map((item, index) => ({ ...item, key: index}))
    debugger;
    const columns = metadata.map((column, key) => {
      return {
        ...column,
        title: column.label,
        dataIndex: column.name,
        key,
        sorter: (a, b) => (a.statut > b.statut ? 1 : -1),
      };
    });
    if (actionColumns)
      actionColumns.forEach(actionColumn => {
        columns.push(actionColumn);
      });

    return (
      <Table
        dataSource={indexedData}
        columns={columns}
        onChange={this.handleTableChange}
        pagination={pagination}
      />
    );
  }


}
