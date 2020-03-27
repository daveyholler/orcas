import React, { dangerouslySetInnerHTML } from 'react';
import moment from 'moment';
import {
  ThemeProvider,
  Badge,
  Box,
  CSSReset,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/core';
import { orcaTheme } from '../core/orca_theme';
// import Map from './Map';


export default class EncounterDetail extends React.Component {
  render() {
    const { encounter } = this.props;
    return (
      <ThemeProvider theme={orcaTheme}>
        <CSSReset />
        <Box width="calc(100vw - 20rem)" ml="20rem" p={8}>
          <Flex wrap="wrap" justify="space-between" row>
            <Flex direction="row" w="100%">
              <Box rounded="lg" borderWidth="1px">
                {
                  //<Map lat={encounter.start_lat} lng={encounter.start_long} height="400px" />
                }
                <Box p={8}>
                  <Badge>{moment(encounter.encounter_date).format('MMM Do \'YY')}</Badge>
                  <Badge ml="1rem">From {encounter.start_time} &rarr; {encounter.end_time}</Badge>
                  <Heading as="h2" mb={4} size="xl" style={{fontWeight: 'bold'}}>
                    { encounter.staff ? `Captain ${encounter.staff} on the ` : null }
                    {encounter.vessel}
                  </Heading>
                  <Heading as="h1" mb={4} size="l" style={{fontWeight: 'bold'}}>Encounter No. {encounter.encounter_number}</Heading>
                  <Text dangerouslySetInnerHTML={{__html: encounter.summary}} />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </ThemeProvider>
    )
  }
}
