import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from "../components/Button";
import List from '@mui/material/List';
import {ListItem} from "@mui/material";
import { useMatomo } from '@datapunt/matomo-tracker-react'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  const { trackEvent, trackPageView } = useMatomo()
  trackPageView({
    documentTitle: 'Home', // optional
    href: 'https://www.ekhn2030.de', // optional
  });
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
{
              <Box
                component="img"
                src="/static/themes/onepirate/church-3204.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
}
              <Typography variant="h6" sx={{ my: 5 }}>
                {new Intl.NumberFormat('de-DE').format(Math.round(1446971/1103))} Mitglieder
              </Typography>
              <Typography variant="h5" paragraph={true}>
                {
                  'Hat die durchschnittliche Gemeinde auf dem Kirchengebiet der EKHN.'
                }
              </Typography>
              <Typography variant="h5" paragraph={true}>
                {
                  'Egal ob in der Stadt oder auf dem Land: Die Struktur aller Kirchengemeinden wird sich mit der sinkenden Mitgliederzahl ändern müssen.'
                }
              </Typography>
                <Typography variant="h5" paragraph={true}>
                {
                  'Dabei sinken nicht nur die Anzahl der Mitglieder, sondern auch die durch die Kirchenmitglieder gezahlte Kirchensteuer. Diese Veränderung wird die Kirchengemeinden schon Mittelfristig signifikant beeinträchtigen.'
                }
              </Typography>
              <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: '100%', my: 5}}
                  href="https://www.ekhn.de/ueber-uns/daten-fakten.html"
                  target="_blank"
                  onClick={() => {trackEvent({ category: 'daten-fakten', action: 'click-event' })}}
              >
                Kleine Statistik der EKHN
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/themes/onepirate/show-chart.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Was zeigt diese Seite an?
              </Typography>
              <Typography variant="h5" paragraph={true}>
                {
                  'Laut Hochrechnungen der Freiburger Studie wird die EKHN im Jahr 2035 noch 1,2 Millionen Mitglieder haben, im Jahr 2060 sollen es nur noch 800.000 sein. '
                }
                </Typography>
              <Typography variant="h5" paragraph={true}>
              {
                  'Der Mitgliederzähler weiter oben zeigt den aktuellen Mitgliederstand mit den Prognosen in 2035 an.  '
                }
              </Typography>
              <Typography variant="h5" paragraph={true}>

              {
                  'Einen Großteil der schwindenden Mitglieder macht der demographische Wandel aus. Aber auch Kirchenaustritte führen zu sinkenden Mitgliederzahlen. Die Gründe dafür sind oft vielfältig.'
                }
              </Typography>
              <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: '100%', my: 5}}
                  href="https://www.ekhn.de/aktuell/detailmagazin/news/mitgliederstudie-zahlen-zum-nachdenken.html"
                  target="_blank"
                  onClick={() => {trackEvent({ category: 'studie-infos', action: 'click-event' })}}
              >
                Zur Studie
              </Button>

            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/themes/onepirate/question-mark.svg"
                alt="question-mark"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Was bedeutet das?
              </Typography>
              <Typography variant="h5" paragraph={true}>
                {'Kirchliches Handeln muss sich auf neue Strukturen einstellen. Das gilt nicht nur für die EKHN sondern für alle Gliedkirchen der Evangelischen Kirche in Deutschland.'
                }
              </Typography>
                <Typography variant="h5" paragraph={true}>
                  {
                    'Dabei bleiben Zentrale Fragen noch ungeklärt:'
                  }
                </Typography>

                <List>
                  <ListItem>
                    <Typography variant="h5" paragraph={true}>
                    Wie soll zukünftig mit den vielen Gebäuden umgegangen werden?
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5" paragraph={true}>
                    Wie wird sich das Selbstverständniss der Gemeinden wandeln?
                    </Typography>
                  </ListItem>
                </List>
                <Typography variant="h5" paragraph={true}>
                  Als Zielbild für den aktuell laufenden Prozess wurde die Kirche in 20 Jahren gewählt. In Anlehnung wurde der Prozess, mit allen notwendigen Entscheidungen, EKHN2030 genannt.
              </Typography>

              <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: '100%', my: 5}}
                  href="https://unsere.ekhn.de/themen/ekhn2030.html"
                  target="_blank"
                  onClick={() => {trackEvent({ category: 'ekhn2030-infos', action: 'click-event' })}}

              >
                Infos zu EKHN2030
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
