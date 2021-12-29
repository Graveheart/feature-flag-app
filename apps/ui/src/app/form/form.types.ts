export interface Form {
  sections: Section[];
}

export interface Section {
  type: string;
  title: string;
  toggles: Toggle[];
}

export interface Toggle {
  label: string;
  id: string;
  childToggles?: Toggle[];
  hasDropdown?: boolean;
}
