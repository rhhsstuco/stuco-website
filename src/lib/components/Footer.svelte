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
	@use "../../styles/exports.scss" as exports;

	.footer {
		--footer-heading-font-size: 1.75rem;
		--footer-text-font-size: 1.25rem;


		width: clamp(20rem, 60%, 56rem);
		margin: 2rem auto 3rem auto;
	}


	.footer__content {
		color: var(--color-dark);
		font-family: 'Poppins', sans-serif;

		display: flex;
		flex-direction: row;
		gap: 1rem;

		margin: 0 auto;

		h2 {
			font-size: var(--footer-heading-font-size);
			font-weight: bold;
			color: var(--color-darker-1);
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			color: var(--color-darker-2);

			li {
				font-size: var(--footer-text-font-size);
			}
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
			font-size: var(--footer-text-font-size);
		}
	}

	@include exports.media-small {
		.footer {
			--footer-heading-font-size: 1.25rem;
			--footer-text-font-size: 0.9rem;
		}

		.footer__content {
			flex-direction: column;
			align-items: center;
			max-width: 20rem;

			gap: 2rem;

			> div {
				align-self: stretch;
			}
		}
	}
</style>