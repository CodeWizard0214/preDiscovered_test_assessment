import React from "react";
import CoustomPagination from "@/components/common/CoustomPagination";
import CustomDataTable from "@/components/common/CustomDataTable";
// import CustomPagination from "@/components/common/CustomPagination";
import { MATTERS_DATA } from "@/mock/mock";
import { MATTERS_HEADER } from "@/utils/constants";
import TableStatusCell from "@/components/matters/TableStatusCell";
import FilterDropdown from "@/components/common/FilterDropdown/FilterDropdown";
import IconButton from "@/components/common/IconButton";

const Matter: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black-light-50 gap-7.5 py-10 px-7.5 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          <h4 className="text-white font-medium text-2xl font-poppins">
            Matters
          </h4>
          <FilterDropdown
            title="Filter"
            iconURL="/assets/img/Filter.svg"
            filterItems={["Matter", "Hold", "Custodian", "Source"]}
          />
          <FilterDropdown
            title="Public"
            iconURL="/assets/img/expand_more.svg"
            filterItems={["Public"]}
          />
        </div>
        <button className="bg-primary-base p-2.5 rounded-sm">
          <span className="text-md font-sans font-medium text-black-light-base leading-5">
            + Create New Hold
          </span>
        </button>
      </div>
      <CustomDataTable
        columns={MATTERS_HEADER}
        data={MATTERS_DATA}
        rowCustomize={[{ rownum: 4, component: TableStatusCell }]}
        isLoading={false}
      />
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between items-center">
        <div className="flex">
          <IconButton icon="/assets/img/export.svg" title="Export" />
        </div>
        <CoustomPagination />
      </div>
    </div>
  );
};

export default Matter;
