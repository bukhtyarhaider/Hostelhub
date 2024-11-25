/**
 * Interface for Filters component props.
 */
export interface FiltersProps {
  /**
   * Callback function to handle filter changes.
   * @param filters - An object containing the current filter values.
   * @param filters.name - The name of the hostel.
   * @param filters.location - The location of the hostel.
   * @param filters.type - The type of the hostel.
   */
  onFilterChange: (filters: {
    name: string;
    location: string;
    type: string;
    gender: string;
  }) => void;
}
