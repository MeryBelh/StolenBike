import React, { Component } from 'react';
import { Button, Select, Table } from 'antd';
import { fetchBaremeById } from '@/services/pec';

const { Option } = Select;

class EstimationInput extends Component {
  columns = [
    {
      title: 'Analyses',
      dataIndex: 'libelleSousActe',
      key: 'libelleSousActe',
    },
    {
      title: 'Cotation',
      dataIndex: 'cotation',
      key: 'cotation',
    },
    {
      title: 'Estimation des couts',
      dataIndex: 'estimation',
      key: 'estimation',
    },
    {
      title: 'Action',
      dataIndex: 'codeBareme',
      key: 'x',
      render: (id, obj) => (
        <Button type="danger" onClick={() => this.removeBareme(obj)}>
          Delete
        </Button>
      ),
    },
  ];

  constructor(props) {
    super(props);
    const value  = props.value || { total: 0, baremes: [] };

    this.state = { value};
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || { total: 0, baremes: [] }),
      };
    }
    return null;
  }

  addBareme = () => {
    const { currentCodeBareme } = this.state;

    fetchBaremeById(currentCodeBareme).then(bareme => {
      const baremes = this.state.value.baremes.slice(0);
      let {
        value: { total },
      } = this.state;
      // TODO: 
      baremes.push(bareme);
      total = bareme.estimation + total;

      const value = { baremes, total };
      const { onChange } = this.props;
      if (onChange) onChange(value);
      this.setState({ value, currentCodeBareme: null });
    });
  };

  removeBareme = bareme => {
    const baremes = this.state.value.baremes.filter(
      estimation => estimation.codeBareme !== bareme.codeBareme,
    );
    let {
      value: { total },
    } = this.state;
    total -= bareme.estimation;
    const value = { baremes, total };
    const { onChange } = this.props;
    if (onChange) onChange(value);
    this.setState({ value });
  };

  setCurrentCodeBareme = codeBareme => {
    this.setState({ currentCodeBareme: codeBareme });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) onChange(value);
  };

  render() {
    const {
      value: { total, baremes: baremesFromState },
      currentCodeBareme,
    } = this.state;
    const { baremes: baremesFromProps } = this.props;

    const estimations = baremesFromState.map(estimation => ({
      ...estimation,
      key: estimation.codeBareme,
    }));
    const baremes = baremesFromProps.filter(
      bareme =>
        !estimations.filter(estimation => estimation.codeBareme === bareme.codeBareme).length > 0,
    );

    return (
      <>
        <div className="estimationHeader">
          <Select style={{ width: '50%' }} onChange={this.setCurrentCodeBareme}>
            {baremes.map(bareme => (
              <Option key={bareme.codeBareme} value={bareme.codeBareme}>
                {bareme.libelleSousActe}
              </Option>
            ))}
          </Select>
          <Button type="primary" disabled={!currentCodeBareme} onClick={this.addBareme}>
            Ajouter
          </Button>
        </div>

        <Table columns={this.columns} dataSource={estimations} />
        <p className="textRight">
          Total Estimation: <b>{total} somme totale (Dhs)</b>
        </p>
      </>
    );
  }
}

export default EstimationInput;
