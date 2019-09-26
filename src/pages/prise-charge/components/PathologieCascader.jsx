import React, { Component } from 'react';
import { Cascader } from 'antd';
import _ from 'underscore';

class PathologieCascader extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { value };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) return { value: nextProps.value };
    return null;
  }

  handleChange = value => {
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) onChange(value);
  };

  displayRender = label => {
    return label[label.length - 1];
  };

  buildOptions = () => {
    const { pathologies } = this.props;
    const pathologiesFamilies = _.groupBy(pathologies, 'codeFamille');
    const pathologiesAdapted = [];
    Object.keys(pathologiesFamilies).forEach(codeFamille => {
      let libelleFamille = '';
      const children = pathologiesFamilies[codeFamille].map(pathologie => {
        libelleFamille = pathologie.libelleFamille;
        return {
          label: pathologie.libellePathologie,
          value: pathologie.codePathologie,
        };
      });
      pathologiesAdapted.push({ label: libelleFamille, value: codeFamille, children });
    });
    return pathologiesAdapted;
  };

  render() {
    const { value } = this.state;

    return (
      <Cascader
        defaultValue={value}
        options={this.buildOptions()}
        expandTrigger="hover"
        displayRender={this.displayRender}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default PathologieCascader;
