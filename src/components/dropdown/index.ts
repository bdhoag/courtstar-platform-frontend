import Dropdown from "./dropdown";

export interface Item {
  key: any;
  label: string;
}

export interface DropdownItemProps {
  item: {
    key: any;
    label: string;
  };
  isSelected: boolean;
  onSelect: (item: { key: any; label: string  }) => void;
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
