export default class DataSource {
  set setData(value) {
    value = value || [];
    this.data = value.content || value;
    this.pagination = value
      ? { pageSize: value.size, current: value.page + 1, total: value.totalElements }
      : {};
  }

  metadata = null;

  pagination = {};

  constructor(metadata, pagination = {}) {
    this.metadata = metadata;
    this.pagination = pagination;
    this.data = [];
  }

  getPaginationQueryString = () => {
    const page = this.pagination && this.pagination.current ? this.pagination.current - 1 : 0;
    const size = this.pagination && this.pagination.pageSize ? this.pagination.pageSize : 10;
    return `?page=${page}&size=${size}`;
  };

  getBackendPagination = () => {
    return {
      size: this.pagination ? this.pagination.pageSize : 10,
      page: this.pagination ? this.pagination.current - 1 : 0,
    };
  };
}
