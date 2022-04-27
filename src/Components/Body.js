import React from "react";
import "./Body.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MyAvatar from "../Images/perfil.jpg";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blueGrey } from "@mui/material/colors";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function Body() {
  return (
    <Grid className="site-body" container spacing={2}>
      <Grid className="panel" item xs={3} md={3}>
        <Stack spacing={2} alignItems="center">
          <Avatar
            className="my-avatar"
            alt="Jose Orlando"
            src={MyAvatar}
            sx={{ width: 150, height: 150 }}
          />
          <h3>Ing. Jose Orlando Perez Villegas</h3>
          <p>
            I am a software developer, graduated from UCi, Cuba. Since 2017 I
            have been linked to the sector.
          </p>
        </Stack>
        <Stack
          className="social-network"
          direction="row"
          alignItems="center"
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <label htmlFor="icon-button-file">
            <LightTooltip TransitionComponent={Zoom} title="GitHub">
              <Link
                sx={{ color: blueGrey[50] }}
                aria-label="upload picture"
                href="https://github.com/jopvcc"
                underline="none"
                target="_blank"
              >
                <GitHubIcon />
              </Link>
            </LightTooltip>
          </label>
          <label htmlFor="icon-button-file">
            <LightTooltip TransitionComponent={Zoom} title="LinkedIn">
              <Link
                sx={{ color: blueGrey[50] }}
                aria-label="upload picture"
                href="https://www.linkedin.com/in/joperezcf"
                underline="none"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
            </LightTooltip>
          </label>
          <label htmlFor="icon-button-file">
            <LightTooltip TransitionComponent={Zoom} title="Telegram">
              <Link
                sx={{ color: blueGrey[50] }}
                aria-label="upload picture"
                href="https://t.me/jopvcc"
                underline="none"
                target="_blank"
              >
                <TelegramIcon />
              </Link>
            </LightTooltip>
          </label>
          <label htmlFor="icon-button-file">
            <LightTooltip TransitionComponent={Zoom} title="Email">
              <Link
                sx={{ color: blueGrey[50] }}
                aria-label="upload picture"
                href="mailto:jopvcc@gmail.com"
                underline="none"
                target="_blank"
              >
                <EmailIcon />
              </Link>
            </LightTooltip>
          </label>
        </Stack>
      </Grid>
      <Grid className="body" item xs={9} md={9}>
        <div>
          <h1>Principal education</h1>
        </div>
      </Grid>
    </Grid>
  );
}

export default Body;
