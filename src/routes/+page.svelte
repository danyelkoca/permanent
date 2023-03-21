<script>
	import '../styles/main.css';
	import Navbar from '../components/Navbar.svelte';
	import landing2 from '../images/landing2.jpg';
</script>

<!-- <Navbar /> -->

<!-- Welcome Please click <a href="/form">here</a> for the calculator -->

<div class="container">
	<Navbar />
	<div class="content-wrapper">
		<div class="img-container">
			<div class="gradient" />
			<img src={landing2} alt="lala" />
			<div class="message-container yolo">
				<p class="main-message">Accelerate your Japan permanent residency journey.</p>
				<p class="second-message">
					Use our intuitive tool to see whether you are eligible for permanent residency in Japan
					and what it takes to get it.
				</p>
				<a href="form?q=0"> <button class="call-to-action">Try it now </button> </a>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-flow: column;
		height: 100vh;
	}

	.content-wrapper {
		flex: 1; /* 1 and it will fill whole space left if no flex value are set to other children*/
		/* background: gold; */
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: lightseagreen;
        background-image: url("https://images.unsplash.com/photo-1505814360303-5bfcf2a8acb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80");
    */
	}

	/* .content {
		border-radius: 5px;
		width: 100%;
		height: 100%;
		max-width: 700px;
		background-color: aliceblue;
	}
	 */
	.img-container {
		width: 100%;
		overflow: hidden;
		height: 100%;
		position: relative;
	}

	.img-container img {
		width: 100%;
		height: 100%;
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
		object-fit: cover;
		/* filter: opacity(0.5) ; */
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
	}

	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: rgb(15, 23, 42);
		background: linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(255, 255, 255, 0) 100%);
	}

	.message-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.main-message {
		font-size: 3em;
		max-width: 800px;
		text-align: center;
		font-weight: bold;
		line-height: 1.2em;
		color: white;
		margin: 70px 0 20px 0;
	}

	.second-message {
		font-size: 1.5em;
		max-width: 800px;
		text-align: center;
		line-height: 1.2em;
		font-weight: 300;
		color: rgb(148 163 184);
		margin: 20px 0 60px 0;
	}

	.call-to-action {
		font-size: 1.4em;
		text-align: center;
		font-weight: bold;
		color: rgb(15, 23, 42);
		background-color: white;

		padding: 10px 40px 10px 40px;
		border-radius: 100px;
		letter-spacing: 0.05em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.call-to-action:hover {
		color: white;
		background-color: rgb(15, 23, 42);
	}
</style>
