import { useEffect, useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Pagination, useTheme } from "@mui/material";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import {muiPaginationCSS, tokens} from "../../theme";

const videos = [
	{ title: "Counter-Strike 2: Leveling Up The World", id: 'ExZtISgOxEQ' },
	{ title: "Counter-Strike 2: Responsive Smokes", id: "_y9MpNcAitQ" },
	{ title: "Counter-Strike 2: Moving Beyond Tick Rate", id: "GqhhFl5zgA0" },
	{ title: "GRAND FINAL! - FaZe vs Cloud9 - HIGHLIGHTS - ESL Pro League l CSGO", id: "-9jjCF7cRew" },
	{ title: "NaVi vs. FaZe - Map 1 [Inferno] - IEM Cologne 2022 - Grand final", id: "G1qhsp-HS80" },
	{ title: "FINAL GAME!! - NaVi vs G2 - HIGHLIGHTS - IEM Katowice 2023 | CSGO", id: "Yhrlaj6fL1Q" },
	{ title: "MOST EPIC MATCH IN THE HISTORY OF CSGO! - FaZe vs Cloud9 - GRAND FINAL ELEAGUE MAJOR - HIGHLIGHTS", id: "O4Ym3FpB9kw" },
	{ title: "WINNER QUALIFIES FOR MAJOR! - NaVi vs FaZe - HIGHLIGHTS - BLAST.tv Paris Major 2023 l CSGO", id: "k-s8lLt4P7s" },
	{ title: "SEMI FINAL! - NaVi vs FaZe - HIGHLIGHTS - ESL Pro League l CSGO", id: "avwRC3exgFA" },
	{ title: "NaVi vs Liquid - IEM Finals - Mirage - FULL MATCH CS GO", id: "y_ALsSOM7Yk" },
	{ title: "BEST OF s1mple! (2020 Highlights)", id: "Fm3P7WpQR3Y" },
	{ title: "Counter-Strike 2 | RTX 4090 24GB ( 4K Maximum Settings )", id: "-mvL_3j8Pkw" }
];

const VideoPlatform = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [page, setPage] = useState(1);
	const videosPerPage = 6;
	const totalVideos = Math.ceil(videos.flat().length / videosPerPage);

	const handleChange = (event, value) => {
		setPage(value);
	};

	const opts = {
		height: "300px",
		width: "100%",
		playerVars: {
			autoplay: 0,
		}
	};

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				margin: "1.5vh"
			}}>
			<Header title="CS:GO Videos" subtitle="Explore latest videos"/>
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center"
			}}>
				<Grid container spacing={3} sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "75vh",
					overflowY: "auto"
				}}>
					{videos?.slice((page - 1) * videosPerPage, page * videosPerPage).map((video) => (
						<Grid key={video.id} xs={12} sm={6} md={4} lg={3} sx={{ margin: "2vh" }}>
							<Card>
								<YouTube videoId={video.id} opts={opts}/>
								<Box sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<CardContent sx={{ width: "70%" }}>
										<Typography
											align="center"
											sx={{
												fontSize: "1.1vh",
												fontFamily: "Montserrat",
												fontWeight: "600",
												color: "#00FF00FF"
											}}
										>
											{video.title}
										</Typography>
									</CardContent>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
				<Pagination
					count={totalVideos}
					page={page}
					onChange={handleChange}
					sx={muiPaginationCSS}
				/>
			</Box>
			</Box>
		</motion.div>
	);
};

export default VideoPlatform;