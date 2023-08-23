<footer class="footer">
	<section class="footer__content">
		<div class="footer__content__info">
			<h2>
				School Info
			</h2>
			<ul>
				<li>Richmond Hill - Ontario - Canada</li>
				<li>201 Yorkland Street - L4S 1A2</li>
				<li>(905) 884-2131</li>
			</ul>
		</div>
		<div class="footer__content__links">
			<h2>
				Follow Us
			</h2>
			<ul>
				<li>
					<a href="https://www.instagram.com/rhhs_stuco/">
						<i class="ri-instagram-line"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/RHHS_StuCo/">
						<i class="ri-twitter-line"></i>
					</a>
				</li>
			</ul>
		</div>
	</section>
</footer>

<style lang="scss">
	.footer {
		width: clamp(32rem, 60%, 56rem);
		margin: 2rem auto 3rem auto;
	}


	.footer__content {
		color: var(--color-dark);
		font-family: 'Poppins', sans-serif;

		display: flex;
		flex-direction: row;
		gap: 1rem;

		h2 {
			font-size: 1.75rem;
			font-weight: bold;
			color: var(--color-darker-1);
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			color: var(--color-darker-2);
		}
	
	}

	.footer__content > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;	

		flex-grow: 1;
		flex-basis: 50%;
	}

	.footer__content__links {

		ul > li > a {
			color: var(--color-dark);
			text-decoration: none;
			font-size: 1.25rem;
		}
	}
</style>