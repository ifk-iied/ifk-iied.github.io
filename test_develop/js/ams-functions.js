function header_top() {
	document.write(`<!-- header-top -->
	<div class="header-top">
		<!-- container -->
		<div class="container">
			<div class="social w3-agileitsicons">
				<ul>
					<li>
						<a href="#">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a class="twt" href="#">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="w3layouts-details">
				<ul>
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
							iforkashmir@gmail.com
                              			</a>
					</li>
					<li>
						<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1) 000 123 456789</li>
				</ul>
			</div>
			<div class="clearfix"> </div>
		</div>
		<!-- //container -->
	</div>
	<!-- //header-top -->`);
}


function navbar(page_id) {
	if (page_id == "index")
		var active_index = 'class="active"';
	else if (page_id == "about")
		var active_about = 'class="active"';
	else if (page_id == "gallery")
		var active_gallery = 'class="active"';
	else if (page_id == "contact")
		var active_contact = 'class="active"';
	else if (page_id == "register")
		var active_register = 'class="active"';

	document.write(`
	<li class="home-icon"> <a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
	<li> <a href="index.html"` + active_index + `>Home</a></li>
    <li> <a href="about.html"` + active_about + `>About</a></li>
    <li> <a href="gallery.html"` + active_gallery + `>Gallery</a></li>
	<li> <a href="contact.html"` + active_contact + `>Contact</a></li>
	<li><a href="register.html"` + active_register + `>Register</a></li>
	`)
}

function footer() {
	document.write(`<div class="footer">
		<div class="container">
			<div class="footer-agileinfo">
				<div class="col-md-12 footer">
					<div class="w3-agileitsicons">
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a class="twt" href="#">
									<i class="fa fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>

					<div class="copyright">
						<p> &copy; ` +
		new Date().getFullYear() +
		` IFK. All Rights Reserved. | Designed by <a href="https://www.alphamstudios.com" target="_blank">Alpha Magnus Studios</a>
					</p>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>`)
}