import React from 'react';

import { Box, Typography } from '@mui/material';
import { theme } from 'styles/BasicTheme';
import styled from '@emotion/styled';

const ResumeCard = styled(Box)({
  borderRadius: '5px',
  padding: '2ch 4ch',
  paddingBottom: '4ch',
  maxWidth: '75ch',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

  [theme.breakpoints.down('md')]: {

  }
});

const InfoHolder = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    'span': {
      display: 'flex',
      gap: '1ch',
      alignItems: 'center',
      paddingBottom: '1ch'
    }
  },

  'p': {
    fontFamily: 'inherit'
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    'span': {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '1ch'
    }
  }
})


const ResumePage = () => {
  return(
    <div>
      <h1>Resume</h1>
      <h2>Skills</h2>
      <p><i>Languages:</i> JavaScript, JQuery, HTML, CSS, Bash, React, Typescript, SQL, Java, C++, C, PHP</p>
      <p><i>Tools:</i> Visual Studio Code, GitHub, Lucid Chart, Linux, MariaDB, Docker</p>

      <h2>Education</h2>
      <p>University of Washington, Bothell</p>
      <p>Sep 2021 - Jun 2024</p>
      <p>BS in Computer Science & Software Engineering</p>
      <p>GPA: 3.5; Deans List</p>

      <h2>Experience</h2>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '3ch'}}>
        <ResumeCard>
          <InfoHolder>
            <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>CommandLink</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Software Engineer</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px'}}>Apr 2023 - Present</Typography>
          </InfoHolder>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Worked with React, PHP, JavaScript, JQuery, CSS, and HTML</Typography>
            <h4>Projects</h4>
            <Typography>Helped build front end for new alerting/escalation system and knowledgebase.<br/>
            Built custom React components and robust testing suites <br/> 
            Performed visual site cleanup, design, and several Quality-of-Life updates</Typography>
            <h4>Other Responsibilities</h4>
            <Typography>Followed Agile Process and worked on both self-assigned and assigned software tickets</Typography>
            <Typography>Implemented a new system to format international telephone numbers</Typography>
            <Typography>Participated in daily standups, story estimation, design meetings, team retros, and sprint demos</Typography>
          </Box>
        </ResumeCard>

        <ResumeCard>
          <InfoHolder>
            <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>University of Washington</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Teaching Assistant</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px'}}>Mar 2022 - Jun 2022</Typography>

          </InfoHolder>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Help tutor over 30 students and answer questions & explain OOP concepts</Typography>
            <Typography>Grade student homework assignments and exams, as well as providing 1-on-1 support for students</Typography>
          </Box>
        </ResumeCard>

        <ResumeCard>
          <InfoHolder>
           <span>
              <Typography sx={{fontWeight: '800', fontSize: '18px'}}>Kennelly Keys</Typography>
              <Typography sx={{fontSize: '16px', fontWeight: '400'}}>Instrument Processing</Typography>
            </span>
            <Typography sx={{fontWeight: '600', fontSize: '14px'}}>Jun 2020 - Mar 2023</Typography>

          </InfoHolder>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Cleaned and processed instruments for sale</Typography>
            <Typography>Work with others to maintain quality control of instruments being processed</Typography>
          </Box>
        </ResumeCard>
      </Box>
    </div>
  );
};

export default ResumePage;