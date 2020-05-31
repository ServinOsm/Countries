// Vendor imports
import React from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
// Imports
import BackButton from "../../../components/BackButton/BackButton";
// Style imports
import styles from "./CountriesArea.module.scss";
// Type imports
import { Country } from "../../../types";

interface Props {
  countries: Country[];
  regionName: string;
}

function CountriesArea({ countries, regionName }: Props) {
  const history = useHistory();
  return (
  <div className={styles.countriesArea}>
  <BackButton pathUrl={"/regions"} />
  <div className={styles.table}>
    <MaterialTable
      options={{
        draggable: false,
        search: false,
        headerStyle: {
          backgroundColor: "#007eda",
          color: "#FFF",
        },
      }}
      columns={[
        {
          title: "Name",
          field: "name",
        },
        {
          title: "Population",
          field: "population",
        },
        {
          title: "Flag",
          field: "flag",
          sorting: false,
          cellStyle: {
            backgroundColor: "rgba(0, 126, 219, 0.08)",
            textAlign: "center",
          },
          render: ({ flag, name }) => (
            <img
              src={flag}
              style={{ width: 50, height: 40, borderRadius: "50%" }}
              alt={name}
            />
          ),
        },
      ]}
      onRowClick={(event, rowData) => {
        if (rowData) {
          history.push(`/regions/${regionName}/${rowData.name}`);
        }
      }}
      data={countries}
      title="Countries"
    />
  </div>
</div>
);
}

export default CountriesArea;