import { Typography, Box, useTheme } from "@mui/material"
import { tokens } from "../theme"
import { useTranslation } from "react-i18next"

const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'

  return (
    <Box
      mb="30px"
      dir={isRtl ? 'rtl' : 'ltr'}
      sx={{ textAlign: isRtl ? 'right' : 'left' }}
    >
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {t(title)}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {t(subtitle)}
      </Typography>
    </Box>
  )
}

export default Header
