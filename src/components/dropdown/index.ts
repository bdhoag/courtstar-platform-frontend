import Dropdown from "./dropdown";

export interface Item {
  label: string;
  value: any;
}

export interface DropdownItemProps {
  item: {
    label: string;
    value: any;
  };
  isSelected: boolean;
  onSelect: (item: { label: string; value: any }) => void;
  className?: string;
}

export interface DropdownProps {
  items: Item[];
  initialValue?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  buttonClassName?: string;
  itemClassName?: string;
  dir?: 'up' | 'down';
  onSelect: (item: Item | null) => void;
}

export interface DropdownRef {
  clearFormDropdown: () => void;
}

export default Dropdown;
