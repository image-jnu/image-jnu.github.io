// @mui material components

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ImgProfessor from "assets/lab-images/professor.jpg";

function Professor() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <MKTypography variant="h1" mb={20} sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}>
        Professor
      </MKTypography>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={5} ml={12} alignItems="center">
            <MKBox
              component="img"
              src={ImgProfessor}
              borderRadius="100px"
              height="50vh"
              width="auto"
              xs={12}
            />
            <MKTypography variant="h4" my={1}>
              Prof. Chill Woo LEE
            </MKTypography>
            <MKTypography color="text" mb={2} pr={5}>
              My life has always been a series of challenges and I am psychologically prepared but
              this is the biggest challenge of my life.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack justifyContent="center">
              <MKBox justifyContent="center">
                <MKTypography variant="h3" textTransform="capitalize" mb={2}>
                  educations
                </MKTypography>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="1rem"
                  height="1rem"
                  variant="gradient"
                  color="black"
                  coloredShadow="info"
                  bgColor="dark"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                />
                <MKTypography color="text" pl={1}>
                  B.D. in electric engineering chung-ang university, Seoul, Korea
                  <br /> - Feb. 1986
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="1rem"
                  height="1rem"
                  variant="gradient"
                  color="black"
                  coloredShadow="info"
                  bgColor="dark"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                />
                <MKTypography color="text" pl={1}>
                  Eng.D in electric engineering Tokyo University, Tokyo, Japan <br />- Mar. 1992
                </MKTypography>
              </MKBox>

              <MKBox justifyContent="center">
                <MKTypography variant="h4" textTransform="capitalize" mb={2} mt={4}>
                  experience
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="1rem"
                  height="1rem"
                  variant="gradient"
                  color="black"
                  coloredShadow="info"
                  bgColor="dark"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                />
                <MKTypography color="text" pl={1}>
                  Head of Information and Communication Research Institute <br /> Apr. 2006 ~ Mar.
                  2008
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="1rem"
                  height="1rem"
                  variant="gradient"
                  color="black"
                  coloredShadow="info"
                  bgColor="dark"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                />
                <MKTypography color="text" pl={1}>
                  Head of Culture Contents Technology Research Institute at Chonnam National
                  University <br /> Mar. 2006 ~
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={1}>
                <MKBox
                  width="1rem"
                  height="1rem"
                  variant="gradient"
                  color="black"
                  coloredShadow="info"
                  bgColor="dark"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                />
                <MKTypography color="text" pl={1}>
                  Professor of Electronic Computer Engineering at Chonnam National University.
                  <br /> Jan. 1996 ~
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Professor;
