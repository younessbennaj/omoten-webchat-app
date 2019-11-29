import styled from 'styled-components';
import { GRID } from '../utils/constants';
import Box from '../Box';

const Grid = styled(Box)`
  ${GRID};
`

Grid.defaultProps = {
  display: 'grid'
}

export default Grid;
