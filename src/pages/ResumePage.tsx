import React from 'react';

import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const ResumeCard = styled(Box)({
  borderRadius: '5px',
  padding: '2ch 4ch',
  paddingBottom: '4ch',
  maxWidth: '75ch',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
});


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
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{display: 'flex', gap: '1ch'}}>
              <h3 style={{fontWeight: '800'}}>CommandLink</h3>
              <h4 style={{fontWeight: '400'}}>Software Engineer</h4>
            </Typography>
            <h5>Apr 2023 - Present</h5>
          </Box>
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
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{display: 'flex', gap: '1ch'}}>
              <h3 style={{fontWeight: '800'}}>University of Washington</h3>
              <h4 style={{fontWeight: '400'}}>Teacher&apos;s Assistant</h4>
            </Typography>
            <h5>Mar 2022 - Jun 2022</h5>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Help tutor over 30 students and answer questions & explain OOP concepts</Typography>
            <Typography>Grade student homework assignments and exams, as well as providing 1-on-1 support for students</Typography>
          </Box>
        </ResumeCard>

        <ResumeCard>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{display: 'flex', gap: '1ch'}}>
              <h3 style={{fontWeight: '800'}}>Kennelly Keys</h3>
              <h4 style={{fontWeight: '400'}}>Instrument Processing</h4>
            </Typography>
            <h5>Jun 2020 - Mar 2023</h5>
          </Box>
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