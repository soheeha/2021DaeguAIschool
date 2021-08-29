/*
gsap.to('.masthead-heading', 10, {
	left: 50,
	backgroundColor: "blue",
	borderColor: "pink",
	borderRadius: "50%"
})
*/

/*
gsap.to('.masthead .btn', 5, {
	x: 300,
	rotation: 360,
	scale: 0.5
})
*/

/*
var $btn = $('.masthead .btn');
$btn.click(function(e) {
	e.preventDefault();

	gsap.from('.masthead .btn', 5, {
		opacity: 0,
		scale: 0,
		y: -50,
		delay: 1
	})
})
*/


/*
gsap.fromTo('.masthead .btn', 5, 
	{backgroundColor: "blue"}, 
	{backgroundColor: "red"}
)
*/

/*
var $faStack = $('#services .fa-stack');

gsap.from($faStack, 1, {
	x: -200,
	ease: "slow"
})
*/

var $portfolioHeading = $('#portfolio .section-heading'),
	$portfolioSubHeading = $('#portfolio .section-subheading'),
	$portfolioImg = $('#portfolio img'),
	$portfolioTitle = $('#portfolio .portfolio-caption-heading'),
	$portfolioText = $('#portfolio .portfolio-caption-subheading');

/*
gsap.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2});
gsap.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.4});
gsap.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, delay: 0.6});
gsap.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, delay: 0.8});
gsap.from($portfolioText, 0.3, {y: -15, autoAlpha: 0, delay: 1});
*/

var tl = new TimelineLite();

/*
tl
	.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
	.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
	.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
	.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
	.from($portfolioText, 0.3, {y: -15, autoAlpha: 0, delay: 0.2});
*/

/*
tl
	.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0})
	.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0}, '-=0.15')
	.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0}, '-=0.15')
	.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0}, '-=0.15')
	.from($portfolioText, 0.3, {y: -15, autoAlpha: 0}, '-=0.15');
*/


/*
tl
	.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0})
	.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0}, '+=1')
	.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0}, 3)
	.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0}, 2)
	.from($portfolioText, 0.3, {y: -15, autoAlpha: 0}, 2.5);
*/


tl
	.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0})
	.add('$portfolioSubHeading')
	.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0})
	.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0}, '$portfolioSubHeading')
	.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0}, '$portfolioSubHeading+=3')
	.from($portfolioText, 0.3, {y: -15, autoAlpha: 0}, '$portfolioSubHeading');














