<template>
	<div class="home">
		<section id="personal-intro">
			<h2>个人简介 | Biography</h2>
			<div class="intro-content">
				<div class="photo">
					<img src="../imgs/photos/Freddy.jpg" alt="个人照片">
				</div>
				<div class="text">
					<p>冯永攀，博士，深圳信息职业技术学院助理教授，于2014年在中国南京的南京信息工程大学(NUIST)获得电气工程硕士学位。随后,于2018年在韩国釜山的釜山大学(PNU)获得电气工程博士学位。2018年5月至8月,在澳大利亚维多利亚州墨尔本大学做访问学者。2018年11月至2021年在深圳大学信息工程学院做博士后。自2021年,深圳信息职业技术学院的助理教授。他的研究兴趣涵盖毫米波通信、信号处理、压缩感知、数学优化和机器学习。</p>
					<p> Dr. Freddy Y.P. Feng received his M.A.Sc degree in Electrical Engineering from Nanjing University of Information Science and Technology (NUIST) in Nanjing, China in 2014. He went on to earn his Ph.D in Electrical Engineering from Pusan National University (PNU) in Busan, South Korea in 2018. From May to August 2018, he was a visiting scholar at the University of Melbourne in Victoria, Australia. Following his Ph.D, he worked as a postdoctoral fellow in the College of Information Engineering at Shenzhen University from November 2018 to 2021. Since 2021, he has been an Assistant Professor at the Shenzhen Institute of Information Technology. His research interests span millimeter wave communications, signal processing, compressive sensing, mathematical optimization, and machine learning.</p>
				</div>
			</div>
		</section>
		<section id="research-intro">
			<h2>科研兴趣 | Research Interests</h2>
			<ul class="research-list">
				<li>
					<h3>5G/6G通信理论 | 5G/6G Communication Theory</h3>
					<div class="research-item">
						<img src="../imgs/researches/5G.png" alt="5G/6G">
					</div>
					<p>研究下一代无线通信系统的关键技术和理论,如大规模MIMO、毫米波通信、超可靠低时延通信(URLLC)等,旨在提高无线通信的速率、可靠性和效率,满足未来智能社会的需求。</p>
					<p>This research explores the integration of wireless communication and radar sensing functions into
						a single system. By sharing spectrum, hardware, and signal processing algorithms, it aims to
						achieve collaborative optimization of communication and sensing, improving the utilization
						efficiency of spectrum and hardware resources.</p>
				</li>
				<li>
					<h3>感知通信一体化 | Integrated Sensing and Communication</h3>
					<div class="research-item">
						<img src="../imgs/researches/isac.png" alt="ISAC">
					</div>
					<p>研究如何将无线通信与雷达感知功能集成在同一个系统中,通过共享频谱、硬件和信号处理算法,实现通信和感知的协同优化,提高频谱和硬件资源的利用效率。</p>
					<p>This research focuses on the key technologies and theories of next-generation wireless
						communication systems, such as massive MIMO, millimeter-wave communication, and ultra-reliable
						low-latency communication (URLLC). The aim is to improve the speed, reliability, and efficiency
						of wireless communication to meet the demands of future intelligent societies.</p>
				</li>
				<li>
					<h3>统计信号处理 | Statistical Signal Processing</h3>
					<div class="research-item">
						<img src="../imgs/researches/dsp.png" alt="Statistical Signal Processing">
					</div>
					<p>研究如何利用统计学和概率论的方法来分析和处理各种信号,如语音、图像、通信信号等,以提取有用的信息并抑制噪声和干扰,广泛应用于通信、雷达、生物医学等领域。</p>
					<p>This research focuses on applying statistical and probabilistic methods to analyze and process
						various signals, such as speech, images, and communication signals. The goal is to extract
						useful information and suppress noise and interference, with wide applications in fields such as
						communications, radar, and biomedicine.</p>
				</li>
				<li>
					<h3>优化理论 | Optimization Theory</h3>
					<div class="research-item">
						<img src="../imgs/researches/opt.png" alt="Optimization Theory">
					</div>
					<p>研究如何在给定约束条件下,寻找优化问题的最优解或近似最优解,涉及凸优化、非凸优化、组合优化等分支,在通信、信号处理、机器学习等领域有广泛应用。</p>
					<p>This research aims to find the optimal or near-optimal solutions to optimization problems under
						given constraints. It involves branches such as convex optimization, non-convex optimization,
						and combinatorial optimization, with extensive applications in communications, signal
						processing, machine learning, and other fields.</p>
				</li>
				<li>
					<h3>人工智能 | Artificial Intelligence</h3>
					<div class="research-item">
						<img src="../imgs/researches/ai.png" alt="Artificial Intelligence">
					</div>
					<p>研究如何让计算机和机器具备类似人类的感知、学习、推理和决策能力,涉及机器学习、深度学习、自然语言处理、计算机视觉等子领域,在通信、信号处理、自动控制等领域有广泛应用。</p>
					<p>This research focuses on enabling computers and machines to possess human-like capabilities in
						perception, learning, reasoning, and decision-making. It involves sub-fields such as machine
						learning, deep learning, natural language processing, and computer vision, with extensive
						applications in communications, signal processing, automatic control, and other areas.</p>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'Home',
	};
</script>
<style scoped>
	.home {
		max-width: 60%;
		margin: 0 auto;
		padding: 2rem;
	}

	section {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 2rem;
		color: #333;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2rpx solid #ccc;
	}

	#personal-intro {
		background-color: #f8f8f8;
		padding: 1.5rem;
		border-radius: 5rpx;
	}

	.intro-content {
		display: flex;
	}

	.photo {
		flex: 0 0 120px;
		margin-right: 1.5rem;
	}

	.photo img {
		width: 100%;
		height: auto;
		border-radius: 0%;
	}

	.research-item {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 10px;
	}

	.research-item img {
		width: 50%;
	}

	.text {
		flex: 1;
	}

	#research-intro {
		background-color: #e8f5e9;
		padding: 1.5rem;
		border-radius: 5rpx;
	}

	.research-list li {
		margin-bottom: 1.5rem;
	}

	.research-list img {
		max-width: 100%;
		height: auto;
		margin-top: 0.5rem;
	}
</style>
