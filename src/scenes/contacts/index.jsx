import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme as useMuiTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const muiTheme = useMuiTheme();
  const colors = tokens(muiTheme.palette.mode);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const columns = [
    { field: "id", headerName: t("contacts.id"), flex: 0.5, headerAlign: "center", align: "center" },
    { field: "registrarId", headerName: t("contacts.registrarId"), headerAlign: "center", align: "center" },
    {
      field: "name",
      headerName: t("contacts.name"),
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: t("contacts.age"),
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: t("contacts.phone"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: t("contacts.email"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "address",
      headerName: t("contacts.address"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "city",
      headerName: t("contacts.city"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "zipCode",
      headerName: t("contacts.zipCode"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Box m="20px" dir={isRtl ? 'rtl' : 'ltr'} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <Header
        title={t("contacts.title")}
        subtitle={t("contacts.subtitle")}
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
