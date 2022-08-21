import { Heading, Box, Grid } from 'grommet';

const Home = (props) => {
  return (
    <Grid>
      <Box animation="fadeIn" direction="column" alignContent="center">
        <Heading
          align={'center'}
          level="1"
          responsive={'true'}
          size={'xxlarge'}
        >
          {props.title}
        </Heading>
      </Box>
    </Grid>
  );
};

export default Home;
