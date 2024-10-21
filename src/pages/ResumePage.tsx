import React, { useEffect } from 'react';

import { Box, Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { theme } from 'styles/BasicTheme';
import styled from '@emotion/styled';

const ResumeCard = styled(Box)({
  borderRadius: '5px',
  padding: '3ch 4ch',
  maxWidth: '75ch',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  '& p': {
    fontFamily: 'inherit',
  },
  [theme.breakpoints.up('lg')]: {
    'li': {
      listStyleType: 'none'
    }
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '90vw',
  }
});

const InfoHolder = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  [theme.breakpoints.up('lg')]: {
    'span': {
      display: 'flex',
      gap: '1ch',
      alignItems: 'center',
    },
  },

  'p': {
    fontFamily: 'inherit'
  },

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'start',
    alignItems: 'baseline',
    'span': {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '1ch'
    }
  }
})

const StyledResumePage = styled(Box)({
  [theme.breakpoints.up('lg')]: {
    paddingTop: '1rem',
    paddingBottom: '5rem'
  },
  [theme.breakpoints.down('lg')]: {
    'h2': {
      textAlign: 'center',
    },
    width: '90vw',
    paddingBottom: '2rem'
  },
})

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themeUser = useTheme();

  const resumeCardBackground = themeUser.palette.secondary.main;

  return(
    <StyledResumePage>
      <h1>Resume</h1>
      <h2>Skills</h2>
      <ResumeCard sx={{backgroundColor: resumeCardBackground}}>
          <Typography color='contrastText'fontWeight={600}>Languages</Typography>
          <Typography>JavaScript, JQuery, HTML, CSS, Bash, React, Typescript, SQL, Java, C++, C, PHP</Typography>
          <br/>
          <Typography fontWeight={600}>Tools and Frameworks</Typography>
          <Typography>Visual Studio Code, GitHub, Lucid Chart, Linux, MariaDB, Docker, MUI, Jenkins CI/CD</Typography>
          <br/>
          <Typography fontWeight={600}>Other Skills</Typography>
          <Typography>Languages (non coding): English, Mandarin Chinese 中文</Typography>
          <Typography>Soft: Communication, leadership, collaboration</Typography>
      </ResumeCard>
      <br/>
      <h2>Education</h2>
      <ResumeCard sx={{backgroundColor: resumeCardBackground}}>
        <InfoHolder>
            <Typography sx={{fontWeight: '800', fontSize: '18px'}}>University of Washington</Typography>
            <Typography sx={{fontWeight: '600', fontSize: '14px', textAlign: 'right'}}>Sep 2021 - Jun 2024</Typography>
      </InfoHolder>
      <br/>
      <Typography>BS in Computer Science & Software Engineering</Typography>
      <Typography>GPA: 3.5; Deans List</Typography>
      <br/>
      <Typography fontWeight={700}>Relevant Coursework</Typography>
      <Grid container spacing={2} columns={{md: 18, sm: 12}} >
        <Grid size={6}><Typography fontSize={14}>Data Structures & Algorithms I & II</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Usability & User-Centered Design</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Human-Computer Interaction</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Analysis & Design</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Operating Systems</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Technical Writing</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Software Engineering</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Cloud Computing</Typography></Grid>
        <Grid size={6}><Typography fontSize={14}>Hardware Organization</Typography></Grid>
      </Grid>
      </ResumeCard>

      <br/>
      <h2>Experience</h2>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '3ch'}}>
        <ResumeCard sx={{backgroundColor: resumeCardBackground}}>
          <InfoHolder>
            <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>CommandLink</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Software Engineer</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px', textAlign: 'right'}}>Apr 2023 - Present</Typography>
          </InfoHolder>
          <br/>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Worked with React, PHP, JavaScript, JQuery, CSS, and HTML</Typography>
            <h4>Projects</h4>
            <Typography><li>Contributed to the front-end development of new software products and internal tools using React and MUI</li></Typography>
            <Typography><li>Developed custom React components and comprehensive testing suites</li></Typography>
            <Typography><li>Played a key role in creating new React codebase, transitioning legacy PHP code to modern React designs</li></Typography>

            <h4>Responsibilities</h4>
            <Typography><li>Followed Agile methodologies, managing both self-assigned and team-assigned tickets</li></Typography>
            <Typography><li>Actively participated in daily standups, story estimations, design meetings, team retros, and sprint demos</li></Typography>
            <Typography><li>Provided detailed code reviews, with constructive feedback to peers</li></Typography>
          </Box>
        </ResumeCard>

        <ResumeCard sx={{backgroundColor: resumeCardBackground}}>
          <InfoHolder>
            <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>University of Washington</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Teaching Assistant</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px', textAlign: 'right'}}>Mar 2022 - Jun 2022</Typography>

          </InfoHolder>
          <br/>

          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography><li>Tutored over 30 students, answer questions & explain OOP concepts</li></Typography>
            <Typography><li>Graded student homework assignments and exams, as well as providing 1-on-1 support for students</li></Typography>
          </Box>
        </ResumeCard>

        <ResumeCard sx={{backgroundColor: resumeCardBackground}}>
          <InfoHolder>
           <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>Kennelly Keys</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Instrument Processing</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px', textAlign: 'right'}}>Jun 2020 - Mar 2023</Typography>

          </InfoHolder>
          <br/>

          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography><li>Cleaned and processed instruments for sale</li></Typography>
            <Typography><li>Work with others to maintain quality control of instruments being processed</li></Typography>
          </Box>
        </ResumeCard>
      </Box>
    </StyledResumePage>
  );
};

export default ResumePage;