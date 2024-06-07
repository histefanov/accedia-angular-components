/* Bar chart */

export interface ComponentDetails {
  value: number,
  color?: string,
  description?: string
}

/* Paginator */

export interface PageChangeEvent {
  pageIndex: number,
  pageSize: number,
  itemsLength: number
};