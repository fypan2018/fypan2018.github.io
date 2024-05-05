<template>
	<div class="teaching">
			<section class="info-courses">
				<h2>信息类课程 | Information-related Courses</h2>
				<ul class="course-list">
					<li>
						<h3>数字信号处理 | Digital Signal Processing</h3>
						<p>本课程主要介绍数字信号处理的基本概念、理论和方法,包括离散时间信号与系统、Z变换、离散傅里叶变换、数字滤波器设计等内容。</p>
						<p>This course introduces the basic concepts, theories, and methods of digital signal processing,
							including discrete-time signals and systems, Z-transform, discrete Fourier transform, and digital
							filter design.</p>
					</li>
					<li>
						<h3>信息论与编码 | Information Theory and Coding</h3>
						<p>本课程主要介绍信息论的基本概念和编码理论,包括信息量度、信源编码、信道容量、信道编码等内容,旨在培养学生解决通信系统中的信息传输问题的能力。</p>
						<p>This course introduces the fundamental concepts of information theory and coding theory, including
							information measures, source coding, channel capacity, and channel coding. It aims to develop
							students' ability to solve information transmission problems in communication systems.</p>
					</li>
				</ul>
			</section>

			<section class="software-courses">
				<h2>软件类课程 | Software-related Courses</h2>
				<ul class="course-list">
					<li>
						<h3>HMS及鸿蒙移动应用开发 | HMS and HarmonyOS Mobile Application Development</h3>
						<p>本课程主要介绍华为移动服务(HMS)和鸿蒙操作系统的移动应用开发,包括开发环境搭建、HMS核心服务、鸿蒙OS应用开发等内容,旨在培养学生开发HMS和鸿蒙移动应用的能力。</p>
						<p>This course introduces mobile application development for Huawei Mobile Services (HMS) and HarmonyOS,
							including development environment setup, HMS core services, and HarmonyOS application development.
							It aims to develop students' ability to create mobile applications for HMS and HarmonyOS.</p>
					</li>
					<li>
						<h3>Python程序设计 | Python Programming</h3>
						<p>本课程主要介绍Python编程语言的基本语法、数据类型、控制结构、函数、模块和面向对象编程等内容,通过实例教学,使学生掌握Python编程的基础知识和技能。</p>
						<p>This course introduces the basic syntax, data types, control structures, functions, modules, and
							object-oriented programming concepts of the Python programming language. Through practical examples,
							students will grasp the fundamental knowledge and skills of Python programming.</p>
					</li>
					<li>
						<h3>Java程序设计 | Java Programming</h3>
						<p>本课程主要介绍Java编程语言的基本语法、数据类型、控制结构、类和对象、继承和多态等内容,通过实践项目,使学生掌握Java编程的基础知识和技能。</p>
						<p>This course introduces the basic syntax, data types, control structures, classes and objects,
							inheritance, and polymorphism of the Java programming language. Through practical projects, students
							will master the fundamental knowledge and skills of Java programming.</p>
					</li>
					<li>
						<h3>微信小程序开发 | WeChat Mini-Program Development</h3>
						<p>本课程主要介绍微信小程序的开发流程、组件、API、开发工具等内容,通过实战项目,使学生掌握微信小程序开发的基础知识和技能。</p>
						<p>This course introduces the development process, components, APIs, and development tools of WeChat
							mini-programs. Through hands-on projects, students will grasp the fundamental knowledge and skills
							of WeChat mini-program development.</p>
					</li>
					<li>
						<h3>零代码微信小游戏开发 | No-Code WeChat Mini-Game Development</h3>
						<p>本课程主要介绍如何使用零代码平台开发微信小游戏,包括游戏设计、资源管理、事件编程等内容,使学生无需编程基础也能快速开发微信小游戏。</p>
						<p>This course introduces how to use no-code platforms to develop WeChat mini-games, including game
							design, resource management, and event programming. Students can quickly develop WeChat mini-games
							without prior programming experience.</p>
					</li>
				</ul>
			</section>

			<section class="hardware-courses">
				<h2>硬件类课程 | Hardware-related Courses</h2>
				<ul class="course-list">
					<li>
						<h3>C语言程序设计 | C Programming</h3>
						<p>本课程主要介绍C语言的基本语法、数据类型、控制结构、函数、指针、数组和结构体等内容,通过实践项目,使学生掌握C语言编程的基础知识和技能。</p>
						<p>This course introduces the basic syntax, data types, control structures, functions, pointers, arrays,
							and structures of the C programming language. Through practical projects, students will master the
							fundamental knowledge and skills of C programming.</p>
					</li>
					<li>
						<h3>单片机应用技术 | Microcontroller Application Technology</h3>
						<p>本课程主要介绍单片机的基本结构、工作原理、指令系统和接口技术等内容,通过实践项目,使学生掌握单片机应用系统的设计和开发方法。</p>
						<p>This course introduces the basic structure, working principles, instruction systems, and interface
							technologies of microcontrollers. Through practical projects, students will grasp the design and
							development methods of microcontroller application systems.</p>
					</li>
				</ul>
			</section>
	</div>
</template>

<script>
</script>

<style>
	.teaching {
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

	.info-courses {
		background-color: #e3f2fd;
		padding: 1rem;
		border-radius: 5rpx;
	}

	.software-courses {
		background-color: #e8f5e9;
		padding: 1rem;
		border-radius: 5rpx;
	}

	.hardware-courses {
		background-color: #fff3e0;
		padding: 1rem;
		border-radius: 5rpx;
	}

	.course-list li {
		margin-bottom: 1.5rem;
	}

	.course-list img {
		max-width: 100%;
		height: auto;
		margin-top: 0.5rem;
	}
</style>