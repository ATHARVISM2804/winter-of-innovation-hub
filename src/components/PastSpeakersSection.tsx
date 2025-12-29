import { useEffect, useRef, useState } from 'react';
import { Mic2, Quote, Sparkles, ExternalLink } from 'lucide-react';

const speakers = [
	{
		name: 'Mr. Vivek Bhatia',
		title: 'IAS Officer',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747913/vivek_bhatia_jvcgh0.jpg',
		year: '',
	},
	{
		name: 'Mr. Rutwiz Dasadiya',
		title: 'Founder, Booz Mobility',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747913/Rutvij_Dasadiya_iahbaq.jpg',
		year: '',
	},
	{
		name: 'Mr. Gaurav Gupta',
		title: 'Associate Head, Tata Strive',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747913/gaurav_gutpta_f1l59g.jpg',
		year: '',
	},
	{
		name: 'Dr. Shikha Dhawan',
		title: 'Strategic Consulting',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747912/shikha_dhawan_lprfkz.jpg',
		year: '',
	},
	{
		name: 'Dr. Girish Sapra',
		title: 'Founder & CEO, Green Brigade Ltd.',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747912/Girish_sapra_zzsnpj.jpg',
		year: '',
	},
	{
		name: 'Dr. Rahul Dhiman',
		title: 'Visiting Faculty at the University of Madrid, Spain & Netherlands',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747913/dr_Rahul_dhiman_nsszhe.jpg',
		year: '',
	},
	{
		name: 'Dr. Tushar Bhatnagar',
		title: 'Co-founder & CTO, vidBoard.ai; CEO & Co-founder, Alpha AI',
		topic: '',
		image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766747912/tushar_bhatnagar_etiwas.jpg',
		year: '',
	},
];

const PastSpeakersSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="speakers"
			ref={sectionRef}
			className="relative py-32 md:py-40 overflow-hidden"
		>
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-20">
					{/* Microphone Icon */}
					<div
						className={`flex justify-center mb-6 transition-all duration-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
						}`}
					>
						<div className="relative">
							<div className="absolute inset-0 bg-winter-cyan/20 rounded-full blur-xl animate-pulse" />
							<div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-winter-cyan/20 to-purple-500/20 border border-winter-cyan/30 flex items-center justify-center">
								<Mic2 className="w-8 h-8 text-winter-cyan animate-glow-pulse" />
							</div>
						</div>
					</div>

					{/* Decorative Line */}
					<div
						className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
						<Sparkles className="w-5 h-5 text-winter-cyan animate-pulse" />
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
					</div>

					<h2
						className={`font-cinzel-decorative text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
					>
						<span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-purple-400 bg-clip-text text-transparent">
							Our Past Speakers
						</span>
					</h2>
					<p
						className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
					>
						Visionaries who have graced our stage and inspired thousands
					</p>
				</div>

				{/* Speakers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{speakers.map((speaker, index) => (
					<div
						key={index}
						className={`group relative transition-all duration-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
						}`}
						style={{ transitionDelay: `${200 + index * 100}ms` }}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{/* Card */}
						<div className="relative h-full frosted-glass mystic-card rounded-2xl px-6 py-8 border-2 border-winter-cyan/20 hover:border-winter-cyan/40 transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_25px_70px_-15px_rgba(0,200,255,0.25)] flex flex-col items-center max-w-xs mx-auto overflow-hidden">
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-winter-cyan/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
							
							{/* Animated Glow Background */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<div className="absolute inset-0 bg-gradient-to-br from-winter-cyan/10 via-purple-500/10 to-transparent blur-2xl" />
							</div>

							{/* Year Badge */}
							{speaker.year && (
								<div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 backdrop-blur-sm group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300 z-10">
									<span className="font-rajdhani text-xs text-winter-cyan font-semibold">
										{speaker.year}
									</span>
								</div>
							)}

							{/* Speaker Image with Enhanced Styling */}
							<div className="relative w-40 h-40 mb-6 z-10">
								{/* Pulsing Background Glow */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-winter-cyan/30 to-purple-500/30 animate-pulse blur-md" />
								
								{/* Image Container */}
								<div className="relative w-full h-full rounded-full bg-gradient-to-br from-winter-dark/90 to-winter-deep/90 border-4 border-winter-cyan/40 flex items-center justify-center overflow-hidden group-hover:border-winter-cyan/70 group-hover:scale-105 transition-all duration-500 shadow-xl">
									{speaker.image ? (
										<>
											<img
												src={speaker.image}
												alt={speaker.name}
												className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											{/* Image Overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-winter-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										</>
									) : (
										<span className="font-cinzel text-6xl font-bold text-winter-cyan/60 group-hover:text-winter-cyan transition-colors">
											{speaker.name.charAt(0)}
										</span>
									)}
								</div>
								
								{/* Enhanced Hover Glow */}
								<div
									className={`absolute inset-0 rounded-full bg-winter-cyan/30 blur-2xl transition-all duration-500 ${
										hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
									}`}
								/>
							</div>

							{/* Speaker Info */}
							<div className="text-center w-full relative z-10">
								{/* Name with Glow Effect */}
								<h3 className="font-cinzel text-xl font-bold text-winter-frost mb-2 group-hover:text-glow transition-all duration-300">
									{speaker.name}
								</h3>
								
								{/* Title with Enhanced Styling */}
								<div className="px-3 py-1.5 rounded-lg bg-winter-cyan/5 border border-winter-cyan/20 mb-4 group-hover:bg-winter-cyan/10 group-hover:border-winter-cyan/30 transition-all duration-300">
									<p className="font-rajdhani text-sm text-winter-cyan/90 whitespace-normal break-words leading-relaxed">
										{speaker.title}
									</p>
								</div>
								
								{/* Topic */}
								{speaker.topic && (
									<div className="relative mt-4 p-4 rounded-xl bg-winter-deep/50 border border-winter-cyan/10 group-hover:border-winter-cyan/30 transition-all duration-300 backdrop-blur-sm">
										<Quote className="absolute -top-2 -left-2 w-4 h-4 text-winter-cyan/50" />
										<p className="font-cormorant text-base text-winter-silver/80 italic">
											"{speaker.topic}"
										</p>
										<Quote className="absolute -bottom-2 -right-2 w-4 h-4 text-winter-cyan/50 rotate-180" />
									</div>
								)}
							</div>

							{/* Enhanced Decorative Corner Accents */}
						<div className="absolute top-3 left-3 w-10 h-10 border-l-2 border-t-2 border-winter-cyan/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
						<div className="absolute bottom-3 right-3 w-10 h-10 border-r-2 border-b-2 border-winter-cyan/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
						
						{/* Decorative Stars */}
						<div className="absolute top-4 right-4 text-winter-cyan/30 group-hover:text-winter-cyan/60 transition-all duration-500">
							<span className="text-2xl animate-pulse" style={{ textShadow: '0 0 10px rgba(100, 255, 255, 0.3)' }}>✦</span>
						</div>
						<div className="absolute bottom-4 left-4 text-purple-400/30 group-hover:text-purple-400/60 transition-all duration-500 animation-delay-200">
							<span className="text-xl animate-pulse" style={{ textShadow: '0 0 10px rgba(192, 132, 252, 0.3)' }}>✦</span>
						</div>
						
						{/* Bottom Glow Line */}
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
					</div>
					</div>
				))}
				</div>

				{/* Bottom CTA */}
				<div
					className={`mt-16 text-center transition-all duration-1000 delay-500 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				>
					<p className="font-cormorant text-lg text-winter-silver/60 italic mb-4">
						Want to be a speaker at E-Summit 2026?
					</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300 font-rajdhani group"
					>
						Get in Touch
						<ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default PastSpeakersSection;
