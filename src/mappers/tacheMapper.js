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
        <a>{record.resolved}</a>
        <Tag color={record.resolved ? 'green' : 'red'} key={'value'}>
          {record.resolved ? 'resolved' : 'unresolved'}
        </Tag>
      </span>
    ),
  },
  //  render: text => <a>{text==='value'}</a>,},
];

export default tacheMapper;
