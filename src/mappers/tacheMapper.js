import { applyPolicy } from '../utils/utils';
import { Tag } from 'antd';

const tacheMapper = [
  { label: 'Frame Number', name: 'frameNumber' },
  { label: 'Model', name: 'model' },
  { label: 'Color', name: 'color' },
  { label: 'City', name: 'city' },
  { label: 'StolenDate', name: 'stolenDate' },
  { label: 'Description', name: 'description' },
  {
    label: 'Status',
    dataIndex: 'resolved',
    render: (text, record) => (
        <span>
        <Tag color={record.resolved === 1 ? 'green' : (record.resolved === 0 ? 'blue' : 'red')} key={'value'}>
        {record.resolved === 1 ? 'Resolved' : (record.resolved === 0 ? 'In progress' : 'Unresolved')}
        </Tag>
      </span>
    ),
  },
];

export default tacheMapper;
