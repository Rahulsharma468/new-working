import React from 'react';

import { Box, Divider } from '@material-ui/core';
import './Footer.scss';

export const Footer: React.FC = () => (
  <div className="footer-container">
    <Divider />
    <Box color="primary.contrastText" padding={2} className="box">
      Use For All
    </Box>
  </div>
);
