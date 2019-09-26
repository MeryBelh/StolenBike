import React from 'react';

import SearchBox from '@/components/custom/common/SearchBox';

const SearchForm = props => {
  const { onSearchSubmit, pecSearchMapper } = props;

  return <SearchBox layout="horizontal" onSearch={onSearchSubmit} searchMapper={pecSearchMapper} />;
};

export default SearchForm;
