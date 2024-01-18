export type MatterTableData = {
  id: number;
  name: string;
  date: string;
  holds: number;
  custodians: number;
  sources: string;
  status: string;
  release: string;
  acknowledgement: string;
  lead: string;
  type: string
};

export interface MatterTableRowCustomize {
  rownum: number;
  component: React.FC<TableCustomizeCellProps>;
};

export interface TableCustomizeCellProps {
  data: unknown
}
