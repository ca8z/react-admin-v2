import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useTranslation } from "react-i18next";

const Line = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  return (
    <Box m="20px">
      <Header title="line.title" subtitle="line.subtitle" 
                  dir={isRtl ? 'rtl' : 'ltr'}
                  sx={{ textAlign: isRtl ? 'right' : 'left' }}/>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;