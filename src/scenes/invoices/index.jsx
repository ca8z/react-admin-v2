import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const columns = [
    { field: "id", headerName: t("invoices.id"), headerAlign: "center", align: "center" },
    {
      field: "name",
      headerName: t("invoices.name"),
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: t("invoices.phone"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: t("invoices.email"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cost",
      headerName: t("invoices.cost"),
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Typography
          color={colors.greenAccent[500]}
          sx={{ width: '100%', textAlign: 'center' }}
        >
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: t("invoices.date"),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Box
      m="20px"
      dir={isRtl ? "rtl" : "ltr"}
      sx={{ textAlign: isRtl ? "right" : "left" }}
    >
      <Header title="invoices.title" subtitle="invoices.subtitle" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
