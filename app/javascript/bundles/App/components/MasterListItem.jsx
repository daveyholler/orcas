import React, { dangerouslySetInnerHTML } from 'react';
import {
  ThemeProvider,
  Box,
  CSSReset,
  Heading,
  Stack,
  Text
} from '@chakra-ui/core';
import {orcaTheme} from '../core/orca_theme';

import Truncate from './Truncate';

export default class MasterListItem extends React.Component {
  render() {
    const { title, subtitle, body, url } = this.props;
    return (
      <ThemeProvider theme={orcaTheme}>
        <CSSReset />
        <Box className="navigation__sideNavItem" as="a" href={url}>
          <Stack p={4}>
            <Heading as="h3" size="sm">{title}</Heading>
            <Text fontSize="sm">
              <b>{subtitle}</b><br/>
              {<span dangerouslySetInnerHTML={{__html: Truncate(body, 80, '...')}} />}
            </Text>
          </Stack>
        </Box>
      </ThemeProvider>
    )
  }
}
