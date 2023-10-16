import {
    Button,
    ButtonProps,
    createTheme,
    Grid,
    ThemeProvider,
    Typography,
    useTheme
} from "@mui/material";
import {BLACK, BLUE_DARK, BLUE_LIGHT, PURPLE_LIGHT, WHITE} from "../colors";
import styled from '@emotion/styled'

const FullScreen = styled.div({
    width: '100vw',
    height: '100vh'
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: BLUE_LIGHT,
            contrastText: WHITE
        },
        secondary: {
            main: BLUE_DARK,
            contrastText: PURPLE_LIGHT
        },
        background: {
            default: BLACK,
            paper: BLACK
        }
    },
});

const LargeButton = styled(Button)<ButtonProps>(() => ({
    padding: "10px 60px",
}));

export const LandingMui = () => {
    return <ThemeProvider theme={darkTheme}>
        <FullScreen>
            <Landing />
        </FullScreen>
    </ThemeProvider>
}

function Landing() {
    const theme = useTheme();

    return <Grid container>
        <Grid item lg={7} md={6} sm={12} sx={{backgroundColor: theme.palette.secondary.main, height: "100vh", flexDirection: "column", display: { xs: 'none', sm: 'none', md: "flex" }}}>
            <div>
                <Typography fontWeight={700} variant={"h6"} marginLeft={3} marginTop={2} color={theme.palette.secondary.contrastText}>
                    ChatGPT ●
                </Typography>
            </div>
            <div style={{display: "flex", flex: 1, justifyContent: "center", flexDirection: "column"}}>
                <Typography variant={"h3"} fontWeight={600} marginLeft={3} color={theme.palette.secondary.contrastText}>
                    Brainstorm names
                </Typography>
                <Typography variant={"h4"} fontWeight={400} marginLeft={3}  color={theme.palette.secondary.contrastText}>
                    into three points
                </Typography>
            </div>
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12} style={{backgroundColor: theme.palette.background.default, height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{justifyContent: "center", display: "flex", marginBottom: 20}}>
                <Typography variant={"h4"} fontWeight={600} color={theme.palette.primary.contrastText}>
                    Get Started
                </Typography>
            </div>
            <div style={{justifyContent: "center", display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <LargeButton variant={"contained"} color={"primary"}>
                        Log in
                    </LargeButton>
                </div>
                <LargeButton size={"large"} variant={"contained"} color={"primary"}>
                    Sign up
                </LargeButton>
            </div>
        </Grid>
    </Grid>
}
