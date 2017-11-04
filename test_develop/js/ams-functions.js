

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


function navbar(){
	document.write(`
	<li class="home-icon"> <a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
    <li> <a href="index.html" class="active">Home</a></li>
    <li> <a href="about.html">About</a></li>
    <li> <a href="gallery.html">Gallery</a></li>
<!-- 
	<li> <a href="#" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages
	<span class="caret"></span></a>
	<ul class="dropdown-menu">
		<li> <a class="hvr-bounce-to-bottom" href="#">Page 1</a> </li>
		<li class="dropdown-submenu">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown-submenu" role="button" aria-haspopup="true" aria-expanded="false">Page 2
				<span class="caret"></span>
			</a>
			<ul class="dropdown-menu">
				<li> <a tabindex="-1" href="#">Sub Page 1</a> </li>
				<li> <a href="#">Sub Page 2</a> </li>
				<li> <a href="#">Sub Page 3</a> </li>
			</ul>
		</li>
	</ul> 
    </li>
-->
	<li> <a href="contact.html">Contact</a></li>
	<li><a href="register.html">Register</a></li>
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
						new Date().getFullYear()
						 + ` IFK. All Rights Reserved. | Designed by <a href="https://www.alphamstudios.com" target="_blank">Alpha Magnus Studios</a>
					</p>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>`)
}