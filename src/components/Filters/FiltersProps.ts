/**
 * Interface for Filters component props.
 */
export interface FiltersProps {
  /**
   * Callback function to handle filter changes.
   * @param filters - An object containing the current filter values.
   * @param filters.hostelName - The name of the hostel.
   * @param filters.location - The location of the hostel.
   * @param filters.type - The type of the hostel.
   */
  onFilterChange: (filters: {
    hostelName: string;
    location: string;
    type: string;
  }) => void;
}
