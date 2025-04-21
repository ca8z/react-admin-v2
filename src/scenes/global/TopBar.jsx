import React, { useContext } from "react";
import { Box, IconButton, InputBase, Typography, useTheme } from "@mui/material";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
  TranslateOutlined as TranslateOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { tokens, ColorModeContext } from "../../theme";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const toggleLang = () => {
    const next = isRtl ? "en" : "ar";
    i18n.changeLanguage(next);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase
          sx={{
            ml: isRtl ? 0 : 2,
            mr: isRtl ? 2 : 0,
            flex: 1,
          }}
          placeholder={t("search") || "Search"}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={toggleLang} sx={{ ml: isRtl ? 0 : 1, mr: isRtl ? 1 : 0 }}>
          <TranslateOutlinedIcon />
          <Typography variant="body2" sx={{ ml: isRtl ? 0 : 0.5, mr: isRtl ? 0.5 : 0 }}>
            {isRtl ? "EN" : "AR"}
          </Typography>
        </IconButton>

        <IconButton onClick={colorMode.toggleColorMode} sx={{ ml: isRtl ? 0 : 1, mr: isRtl ? 1 : 0 }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton sx={{ ml: isRtl ? 0 : 1, mr: isRtl ? 1 : 0 }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ml: isRtl ? 0 : 1, mr: isRtl ? 1 : 0 }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ml: isRtl ? 0 : 1, mr: isRtl ? 1 : 0 }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
