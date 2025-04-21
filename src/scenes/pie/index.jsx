import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { useTranslation } from "react-i18next";

const Pie = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
      
    return (
        <Box m="20px">
            <Header title="pie.title" subtitle="pie.subtitle" 
                  dir={isRtl ? 'rtl' : 'ltr'}
                  sx={{ textAlign: isRtl ? 'right' : 'left' }}/>
            <Box height="70vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;