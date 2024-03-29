import React from 'react';
import './Body.css';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MyAvatar from '../Images/perfil.jpg';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blueGrey } from '@mui/material/colors';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip
		{...props}
		classes={{ popper: className }}
	/>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11
	}
}));

function Body() {
	return (
		<Grid
			className='site-body'
			container
			spacing={2}>
			<Grid
				className='panel'
				item
				sx={{ display: { xs: 'block', sm: 'block', md: 'block' } }}
				xs={12}
				sm={4}
				md={3}>
				<Stack alignItems='center'>
					<Avatar
						className='my-avatar'
						alt='Jose Orlando'
						src={MyAvatar}
						sx={{ width: 150, height: 150 }}
					/>
					<h3>Eng. Jose Orlando</h3>
					<p>
						A software developer from UCI, Cuba. Passionate about programming, experienced in
						various tech areas. Excited to learn new tech and grow professionally.
					</p>
				</Stack>
				<Stack
					className='social-network'
					direction='row'
					alignItems='center'
					justifyContent='center'
					divider={
						<Divider
							orientation='vertical'
							flexItem
						/>
					}
					spacing={2}>
					<label htmlFor='icon-button-file'>
						<LightTooltip
							TransitionComponent={Zoom}
							title='GitHub'>
							<Link
								sx={{ color: blueGrey[50] }}
								aria-label='upload picture'
								href='https://github.com/joperezcf'
								underline='none'
								target='_blank'>
								<GitHubIcon />
							</Link>
						</LightTooltip>
					</label>
					<label htmlFor='icon-button-file'>
						<LightTooltip
							TransitionComponent={Zoom}
							title='LinkedIn'>
							<Link
								sx={{ color: blueGrey[50] }}
								aria-label='upload picture'
								href='https://www.linkedin.com/in/joperezcf'
								underline='none'
								target='_blank'>
								<LinkedInIcon />
							</Link>
						</LightTooltip>
					</label>
					<label htmlFor='icon-button-file'>
						<LightTooltip
							TransitionComponent={Zoom}
							title='Telegram'>
							<Link
								sx={{ color: blueGrey[50] }}
								aria-label='upload picture'
								href='https://t.me/jopvcc'
								underline='none'
								target='_blank'>
								<TelegramIcon />
							</Link>
						</LightTooltip>
					</label>
					<label htmlFor='icon-button-file'>
						<LightTooltip
							TransitionComponent={Zoom}
							title='Email'>
							<Link
								sx={{ color: blueGrey[50] }}
								aria-label='upload picture'
								href='mailto:emailplus360@gmail.com'
								underline='none'
								target='_blank'>
								<EmailIcon />
							</Link>
						</LightTooltip>
					</label>
				</Stack>
				<Stack
					alignItems='center'
					justifyContent='center'>
					<div className='div-footer'>
						<h5>{new Date().getFullYear()} © JOPVcc</h5>
					</div>
				</Stack>
			</Grid>

			<Grid
				className='body'
				item
				xs={12}
				sm={8}
				md={9}>
				<div className='div-body'>
					<h1>Curriculum Vitae</h1>
					<Grid
						container
						rowSpacing={2}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid
							item
							xs={12}
							sm={6}
							md={6}>
							<div>
								<Divider>
									<Chip label='Principal education' />
								</Divider>
								<p>
									<Link
										aria-label='Informatic Science University'
										href='https://www.uci.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>Informatic Science University</strong>
									</Link>
									<br></br>
									Havana, Cuba
									<br></br>
									09/03/2012 - 06/20/2017
									<br></br>
									Computer Science Engineer
								</p>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={6}>
							<div>
								<Divider>
									<Chip label='Other studies' />
								</Divider>
								<p>
									<Link
										aria-label='National Autonomous University of Mexico and offered through Coursera'
										href='https://www.coursera.org/account/accomplishments/verify/ZWLHPH9Z927Z'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>
											National Autonomous University of Mexico and offered through Coursera
										</strong>
									</Link>
									<br></br>
									06/30/2016
									<br></br>
									Android application development
								</p>
								<p>
									<Link
										aria-label='Informatic Science University'
										href='https://www.uci.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>Informatic Science University</strong>
									</Link>
									<br></br>
									Havana, Cuba
									<br></br>
									03/23/2018
									<br></br>
									Introduction to the semantic web
								</p>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={6}>
							<div>
								<Divider>
									<Chip label='Professional training' />
								</Divider>
								<p>
									<Link
										aria-label='Informatic Science University'
										href='https://www.uci.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>Informatic Science University</strong>
									</Link>
									<br></br>
									Havana, Cuba
									<br></br>
									2015 - 2017
									<br></br>
									Member of the Development and Free Software Communities of the UCi. Leader of the
									Android Development Community and Webmaster of its official website.
								</p>
								<p>
									<Link
										aria-label='Informatic Science University'
										href='https://www.uci.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>Informatic Science University</strong>
									</Link>
									<br></br>
									Geoinformatics and Digital Signals Center (GEYSED in Spanish)
									<br></br>
									Havana, Cuba
									<br></br>
									2015 - 2017
									<br></br>
									Software developer in AGORAV and Video surveillance projects.
								</p>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={6}>
							<div>
								<Divider>
									<Chip label='Work experience' />
								</Divider>
								<p>
									<Link
										aria-label='Territorial Control Office of the Ministry of Communications General Specialist'
										href='https://www.mincom.gob.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>
											Territorial Control Office of the Ministry of Communications General
											Specialist
										</strong>
									</Link>
									<br></br>
									09/01/2017 - 04/30/2019
									<br></br>
									Cienfuegos, Cuba
									<br></br>
									Completed tasks:
									<br></br>- Software support
									<br></br>- Informatic security
								</p>
								<p>
									<Link
										aria-label='CIMEX Audita S.A. Cienfuegos Branch Computer Science Specialist B'
										href='https://audita.cimex.com.cu/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>
											CIMEX Audita S.A. Cienfuegos Branch Computer Science Specialist B
										</strong>
									</Link>
									<br></br>
									01/05/2019 - 30/09/2021
									<br></br>
									Cienfuegos, Cuba
									<br></br>
									Completed tasks:
									<br></br>- Software developer
								</p>
								<p>
									<Link
										aria-label='Payabli Inc.'
										href='https://www.payabli.com/'
										underline='none'
										target='_blank'
										color='inherit'>
										<strong>Payabli Inc.</strong>
									</Link>
									<br></br>
									19/05/2022 - Present
									<br></br>
									Miami Fl, USA
									<br></br>
									Completed tasks:
									<br></br>- Frontend developer
								</p>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={6}>
							<div>
								<Divider>
									<Chip label='Skills' />
								</Divider>
								<p>
									<strong>Programming languages</strong>
									<br></br>● Java
									<br></br>● ASP.NET/C#
									<br></br>● JavaScript
									<br></br>● PHP
								</p>
								<p>
									<strong>Framework</strong>
									<br></br>● Yii Framework PHP
								</p>
								<p>
									<strong>Other development technologies</strong>
									<br></br>● React
									<br></br>● Android applications
									<br></br>● WordPress
								</p>
								<p>
									<strong>Operating system</strong>
									<br></br>● Windows
									<br></br>● Linux
								</p>
							</div>
						</Grid>
					</Grid>
				</div>
			</Grid>
		</Grid>
	);
}

export default Body;
