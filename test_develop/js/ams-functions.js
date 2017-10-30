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
					<li>
						<a class="drbl" href="#">
							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a class="be" href="#">
							<i class="fa fa-dribbble" aria-hidden="true"></i>
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

function footer() {
     document.write('&copy; ' + new Date().getFullYear() + ' IFK. All Rights Reserved. | Designed by <a href="https://www.alphamstudios.com" target="_blank">Alpha Magnus Studios</a>') ;
}
