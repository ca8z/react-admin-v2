import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useTranslation } from "react-i18next";

const Bar = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
  
    return (
        <Box m="20px">
            <Header title="bar.title" subtitle="bar.subtitle" 
                  dir={isRtl ? 'rtl' : 'ltr'}
                  sx={{ textAlign: isRtl ? 'right' : 'left' }}/>
            <Box height="70vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;