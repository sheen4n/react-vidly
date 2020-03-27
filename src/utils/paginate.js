export const paginate = (data, currentPage, pageSize) =>
  data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
