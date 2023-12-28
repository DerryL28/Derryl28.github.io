import {Link} from 'react-router-dom';

import "./App.css";

function Cv() {
  return (
    <div className="App">  
		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am <br /> Derryl <span>.</span>   </h2>
							<p>ui/ux designer and web developer</p>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="about" className="about">
			<div className="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
									I am a Professional UI/UX Designer and Web developer.
								</h3>
								<p>
								Sarjana Teknik Informatika dengan pengalaman professional pada bidangnya.

Memiliki kemampuan dalam mengembangkan dan front end developer, mengatur jadwal pertemuan, mengimplementasikan berbagai format surat menyurat dan laporan kas kecil perusahaan, dan memastikan kepatuhan jadwal rapat divisi tepat waktu.

Saat ini memiliki keinginan untuk mengembangkan kemampuan di React js.
								</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>0812-9241-6218</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>1187050021@student.uinsgd.ac.id</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>website</h3>
											<p>www.abogabogoh.my.id</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src="assets/images/about/profile_image.jpg" alt="profile_image" />
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		
		<section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container" >
				<div className="education-horizontal-timeline">
					<div className="row">
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2012 - 2015</h2>
									<h3>Al-furqon <span> </span> Singaparna</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>

							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>20015 - 2018</h2>
									<h3>MAN <span>2 </span> Bandung</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2018 - Now</h2>
									<h3>Islamic university Sunan Gunung Djati Bandung</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	
		


    <footer id="footer-copyright" className="footer-copyright">
			<div className="container">
				<div className="hm-footer-copyright text-center">
					<p>
						&copy; copyright <i>Derryl Muhamad Afuza Ramadhan</i>. design and developed by <i>derryl</i>
					</p>
				</div>
			</div>

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>
			
    </footer>
		
    </div> 
  );
}

export default Cv;

