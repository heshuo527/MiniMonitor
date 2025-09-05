// components/AppTable.tsx
import { Table, type TableProps, type PaginationProps } from "antd";
import React, { useState } from "react";

type AppTableProps<T> = TableProps<T> & {
  pageSize?: number;
};

export function AppTable<T extends { key: React.Key }>({ pageSize = 10, ...props }: AppTableProps<T>) {
  const [current, setCurrent] = useState(1);

  const pagination: PaginationProps = {
    current,
    pageSize,
    total: props.dataSource?.length,
    onChange: (page) => setCurrent(page),
    showSizeChanger: true,
  };

  return <Table<T> {...props} pagination={pagination} />;
}
