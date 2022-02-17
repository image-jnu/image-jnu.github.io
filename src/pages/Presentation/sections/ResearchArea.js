// @mui material components

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { textAlign } from "@mui/system";
// import Icon from "@mui/material/Icon";
// import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ResearchArea() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container item xs={12} sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}>
          <Grid item xs={12} alignItems="center" justifyContent="center">
            <MKTypography variant="h2" mb={6} textTransform="capitalize">
              Research area
            </MKTypography>
          </Grid>
          <Grid item xs={6} p={2}>
            <MKTypography variant="h3" textTransform="capitalize" mb={5}>
              computer vision / interface
            </MKTypography>
            <MKTypography p={2}>
              {" "}
              Interdisciplinary scientific field that deals with how computers can gain high-level
              understanding from digital images or videos.
            </MKTypography>
          </Grid>
          <Grid item xs={6} p={2}>
            <MKTypography variant="h3" textTransform="capitalize" mb={5}>
              Intelligent Human interface
            </MKTypography>
            <MKTypography p={2}>
              {" "}
              Interdisciplinary scientific field that deals with how computers can gain high-level
              understanding from digital images or videos.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ResearchArea;
