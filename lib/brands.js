/*
 * Frame brands carried at First Colony Vision. Drives /frames and /frames/[slug].
 * Array order = display order on /frames.
 *
 * Adding images for a brand later:
 *   1. Drop optimized JPEGs (max 1600px long edge, ~75 quality, ideally <300KB) into
 *      public/images/brands/<slug>/, named <slug>-1.jpg, <slug>-2.jpg, ...
 *   2. Set heroImage: '/images/brands/<slug>/<slug>-1.jpg' (plus heroAlt) on the brand below.
 *   3. Optionally set gallery: [{ src, alt, contain? }, ...] for the extra images (contain: true for product shots so they are not cropped). The gallery section
 *      only shows when there is a gallery image or a video.
 * Brands without heroImage get a typographic panel automatically, so nothing breaks.
 *
 * Copy rules: keep it general and true. No "official/authorized dealer" language and
 * no promises that specific models are in stock.
 */

export const BRANDS = [
  {
    slug: 'nike',
    name: 'Nike',
    tagline: 'Athletic eyewear shaped by the world of sport.',
    category: 'Sport & Performance',
    about: [
      'Nike eyewear brings the brand\'s sport heritage to glasses and sunglasses. The frames are designed for people who move, from weekend runners to anyone who wants an active, modern look every day.',
      'Expect clean, sporty lines and lightweight builds. Our opticians can help you find a fit that stays put and pair it with lenses suited to the way you train, play or commute.',
    ],
    highlights: [
      'Sporty, lightweight frames for active days',
      'Sunglass styles for running, training and time outdoors',
      'Everyday optical frames with an athletic edge',
      'Options for kids and teens; ask us about current styles in store',
    ],
    heroImage: '/images/brands/nike/nike-1.jpg',
    heroAlt: 'Runner in Nike sunglasses sprinting across red desert rocks',
    gallery: [
      { src: '/images/brands/nike/nike-2.jpg', alt: 'Smiling man wearing navy Nike sport sunglasses with blue mirrored lenses' },
      { src: '/images/brands/nike/nike-3.jpg', alt: 'Black and clear Nike sport sunglasses with red-violet lenses', contain: true },
    ],
  },
  {
    slug: 'calvin-klein',
    name: 'Calvin Klein',
    tagline: 'Minimal, modern frames with quiet confidence.',
    category: 'Designer',
    about: [
      'Calvin Klein eyewear carries the label\'s minimalist approach into glasses and sunglasses: clean lines, restrained detailing and a modern sense of proportion.',
      'The collection leans toward versatile shapes and understated colors, including soft transparent tones, that work as easily with a suit as with a T-shirt.',
    ],
    highlights: [
      'Clean, minimal shapes with subtle branding',
      'Transparent and muted color options',
      'Optical frames and sunglasses for everyday wear',
      'Versatile styles that suit work and weekend alike',
    ],
    heroImage: '/images/brands/calvin-klein/calvin-klein-1.jpg',
    heroAlt: 'Woman wearing pale green transparent Calvin Klein eyeglasses',
    gallery: [
      { src: '/images/brands/calvin-klein/calvin-klein-2.jpg', alt: 'Man wearing blue-gray Calvin Klein aviator-style eyeglasses' },
      { src: '/images/brands/calvin-klein/calvin-klein-3.jpg', alt: 'Two pairs of transparent Calvin Klein eyeglasses resting side by side' },
    ],
  },
  {
    slug: 'kendra-scott',
    name: 'Kendra Scott',
    tagline: 'Feminine frames with a jewelry designer\'s eye.',
    category: 'Designer',
    about: [
      'Kendra Scott is best known for jewelry, and its eyewear carries the same eye for color and detail into glasses and sunglasses.',
      'Look for feminine shapes, warm tones and thoughtful accents that make a frame feel like an accessory rather than an afterthought.',
    ],
    highlights: [
      'Feminine shapes, including cat-eye and soft rounds',
      'Color and accent details inspired by the jewelry line',
      'Optical frames and sunglasses',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/kendra-scott/kendra-scott-1.jpg',
    heroAlt: 'Woman in a yellow coat wearing tortoise Kendra Scott cat-eye sunglasses with a turquoise stone accent',
    gallery: [
      { src: '/images/brands/kendra-scott/kendra-scott-2.jpg', alt: 'Woman in a camel trench coat wearing tortoise Kendra Scott eyeglasses with a purple stone accent' },
      { src: '/images/brands/kendra-scott/kendra-scott-3.jpg', alt: 'Blue and brown patterned Kendra Scott eyeglasses with gold temples', contain: true },
    ],
  },
  {
    slug: 'wiley-x',
    name: 'Wiley X',
    tagline: 'Protective eyewear built for demanding conditions.',
    category: 'Safety',
    about: [
      'Wiley X makes protective eyewear: safety-rated glasses and sunglasses designed for work, shooting sports, riding and other settings where your eyes need real protection.',
      'Many styles can be made with your prescription. Our opticians can help you choose a frame and lens combination that suits your job or activity and fits securely.',
    ],
    highlights: [
      'Safety-rated protective frames and sunglasses',
      'Wraparound and sealed styles for wind, dust and debris',
      'Prescription-ready options for many frames',
      'Ask us which styles meet your workplace requirements',
    ],
    heroImage: '/images/brands/wiley-x/wiley-x-1.jpg',
    heroAlt: 'Smiling man in a ball cap and mirrored Wiley X sunglasses leaning on a ranch fence',
    gallery: [
      { src: '/images/brands/wiley-x/wiley-x-2.jpg', alt: 'Man in a cap wearing dark Wiley X protective sunglasses while speaking into a radio' },
    ],
  },
  {
    slug: 'lacoste',
    name: 'Lacoste',
    tagline: 'French sporting elegance, from the court to the city.',
    category: 'Lifestyle',
    about: [
      'Lacoste eyewear reflects the brand\'s tennis roots and relaxed French style. Frames are polished but easygoing, often with a nod to the familiar crocodile.',
      'The range covers classic optical shapes, sunglasses and colorful frames for kids and teens, so the whole family can find something they like.',
    ],
    highlights: [
      'Classic shapes with sporty, preppy details',
      'Optical frames and sunglasses for adults',
      'Colorful frames sized for kids and teens',
      'Easy everyday styles that pair with most wardrobes',
    ],
    heroImage: '/images/brands/lacoste/lacoste-1.jpg',
    heroAlt: 'Woman in a black blazer wearing taupe transparent Lacoste eyeglasses',
    gallery: [
      { src: '/images/brands/lacoste/lacoste-2.jpg', alt: 'Man in a dark green polo wearing tortoise Lacoste eyeglasses' },
      { src: '/images/brands/lacoste/lacoste-3.jpg', alt: 'Two teens laughing, both wearing Lacoste eyeglasses, against a red backdrop' },
      { src: '/images/brands/lacoste/lacoste-4.jpg', alt: 'Two children wearing pink and red Lacoste kids’ eyeglasses' },
    ],
  },
  {
    slug: 'ray-ban',
    name: 'Ray-Ban',
    tagline: 'Iconic shapes that never go out of style.',
    category: 'Lifestyle',
    about: [
      'Ray-Ban is one of the most recognizable names in eyewear, known for classic sunglass shapes like the aviator and the wayfarer that have stayed popular for generations.',
      'Beyond sunglasses, Ray-Ban offers optical frames in many of the same familiar silhouettes, so you can wear a classic shape with your everyday prescription.',
    ],
    highlights: [
      'Classic aviator, square and round silhouettes',
      'Optical versions of familiar sunglass shapes',
      'Prescription sunglass options',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/ray-ban/ray-ban-1.jpg',
    heroAlt: 'Woman in a striped blue shirt wearing black and gold Ray-Ban Clubmaster sunglasses',
    gallery: [
      { src: '/images/brands/ray-ban/ray-ban-2.jpg', alt: 'Black Ray-Ban wayfarer-style sunglasses', contain: true },
      { src: '/images/brands/ray-ban/ray-ban-3.jpg', alt: 'Gold Ray-Ban aviator sunglasses with dark polarized lenses', contain: true },
      { src: '/images/brands/ray-ban/ray-ban-4.jpg', alt: 'Gold Ray-Ban aviator sunglasses with brown gradient lenses', contain: true },
    ],
  },
  {
    slug: 'oakley',
    name: 'Oakley',
    tagline: 'Performance eyewear for sport and active life.',
    category: 'Sport & Performance',
    about: [
      'Oakley is a performance eyewear brand with deep roots in action sports. Its sunglasses and frames are designed to stay secure and comfortable while you move.',
      'Alongside sport sunglasses, Oakley makes optical frames for everyday wear. We can help you pick lenses that suit your sport, your prescription and the light you play in.',
    ],
    highlights: [
      'Sport sunglasses designed to stay put while you move',
      'Wraparound shapes for wider coverage',
      'Everyday optical frames with a sporty build',
      'Prescription sport lens options; ask us what fits your activity',
    ],
    heroImage: '/images/brands/oakley/oakley-1.jpg',
    heroAlt: 'Man wearing white Oakley shield sunglasses with orange mirrored lenses',
    gallery: [
      { src: '/images/brands/oakley/oakley-2.jpg', alt: 'Black Oakley rectangular optical frame, side view', contain: true },
      { src: '/images/brands/oakley/oakley-3.jpg', alt: 'Black Oakley square optical frame, front view', contain: true },
      { src: '/images/brands/oakley/oakley-4.jpg', alt: 'Cyclist in an Oakley jersey and helmet wearing blue Oakley sport sunglasses' },
    ],
  },
  {
    slug: 'columbia',
    name: 'Columbia',
    tagline: 'Outdoor-ready frames for trail days and everyday.',
    category: 'Sport & Performance',
    about: [
      'Columbia brings its outdoor heritage to eyewear, with frames designed for people who spend their free time on trails, by the water or simply outside.',
      'The look is practical and relaxed: sturdy, comfortable frames in natural tones that are just as at home in the office as on a weekend hike.',
    ],
    highlights: [
      'Comfortable frames made for active, outdoor days',
      'Earthy, natural color palettes',
      'Optical frames and sunglasses',
      'Relaxed styles that work on and off the trail',
    ],
    heroImage: '/images/brands/columbia/columbia-1.jpg',
    heroAlt: 'Smiling hiker wearing clear Columbia eyeglasses on a forest trail',
    gallery: [
      { src: '/images/brands/columbia/columbia-2.jpg', alt: 'Group of hikers on a wooded trail, the man in front wearing Columbia eyeglasses' },
      { src: '/images/brands/columbia/columbia-3.jpg', alt: 'Bearded hiker in an orange Columbia jacket wearing tortoiseshell eyeglasses in the rain' },
    ],
  },
  {
    slug: 'marchon-nyc',
    name: 'Marchon NYC',
    tagline: 'Timeless, city-minded frames for every day.',
    category: 'Designer',
    about: [
      'Marchon NYC is a frame collection from Marchon, one of the larger eyewear companies, with a focus on wearable, well-made styles for everyday life.',
      'The collection favors classic, versatile shapes and dependable comfort, making it a solid choice whether this is your first pair or your fifth.',
    ],
    highlights: [
      'Classic, versatile shapes for men and women',
      'Metal and acetate options',
      'Comfortable everyday wear',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/marchon-nyc/marchon-nyc-1.jpg',
    heroAlt: 'Man and woman by a factory window, both wearing Marchon NYC eyeglasses',
    gallery: [
      { src: '/images/brands/marchon-nyc/marchon-nyc-2.jpg', alt: 'Woman in a cream off-shoulder top wearing tortoise Marchon NYC eyeglasses' },
      { src: '/images/brands/marchon-nyc/marchon-nyc-3.jpg', alt: 'Burgundy Marchon NYC cat-eye eyeglasses with tortoise temples', contain: true },
    ],
  },
  {
    slug: 'ferragamo',
    name: 'Ferragamo',
    tagline: 'Italian craftsmanship with refined, elegant detail.',
    category: 'Luxury',
    about: [
      'Ferragamo is an Italian luxury house, and its eyewear reflects the same attention to craftsmanship and elegant detail found across the brand.',
      'Frames tend toward polished, sophisticated shapes with rich colors and signature hardware: an easy way to make your glasses feel like a considered accessory.',
    ],
    highlights: [
      'Refined, sophisticated silhouettes',
      'Rich colors and signature metal details',
      'Optical frames and sunglasses',
      'A good fit for anyone who wants a polished, luxury look',
    ],
    heroImage: '/images/brands/ferragamo/ferragamo-1.jpg',
    heroAlt: 'Man in a dark suit wearing burgundy Ferragamo eyeglasses',
    gallery: [
      { src: '/images/brands/ferragamo/ferragamo-2.jpg', alt: 'Woman in a gold turtleneck wearing gold Ferragamo aviator sunglasses' },
      { src: '/images/brands/ferragamo/ferragamo-3.jpg', alt: 'Man in a navy jacket wearing brown Ferragamo sunglasses with amber lenses' },
    ],
  },
  {
    slug: 'armourx',
    name: 'ArmouRx',
    tagline: 'Prescription safety eyewear for the job.',
    category: 'Safety',
    about: [
      'ArmouRx makes safety eyewear: protective frames designed to be worn with your prescription in workplaces and settings where impact protection matters.',
      'Our opticians can help you choose a frame and lenses that suit your work environment, add side protection where needed, and fit comfortably through a full shift.',
    ],
    highlights: [
      'Safety-rated frames built for prescription lenses',
      'Side shield options for added protection',
      'Comfortable fits for all-day wear',
      'Ask us which styles meet your workplace requirements',
    ],
    heroImage: '/images/brands/armourx/armourx-1.jpg',
    heroAlt: 'Black ArmouRx prescription safety glasses with orange accents and side shields',
    gallery: [
      { src: '/images/brands/armourx/armourx-2.jpg', alt: 'ArmouRx safety glasses with integrated side shields, angled view', contain: true },
      { src: '/images/brands/armourx/armourx-3.jpg', alt: 'ArmouRx wraparound safety frame with orange inner lining', contain: true },
    ],
  },
  {
    slug: 'versace',
    name: 'Versace',
    tagline: 'Bold Italian glamour with signature detail.',
    category: 'Luxury',
    about: [
      'Versace is an Italian fashion house known for bold, glamorous design, and its eyewear is no exception. Frames often carry the signature Medusa and gold Greca details.',
      'Expect confident shapes, from statement cat-eyes to strong squares, in optical frames and sunglasses that are made to be noticed.',
    ],
    highlights: [
      'Statement silhouettes, including cat-eye and bold square shapes',
      'Signature Medusa and Greca hardware',
      'Optical frames and sunglasses',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/versace/versace-optical-poster.jpg',
    heroAlt: 'Model wearing dark tortoise Versace cat-eye eyeglasses against a turquoise backdrop',
    videos: [
      { src: '/images/brands/versace/versace-optical.mp4', poster: '/images/brands/versace/versace-optical-poster.jpg', label: 'Versace optical campaign film' },
      { src: '/images/brands/versace/versace-sun.mp4', poster: '/images/brands/versace/versace-sun-poster.jpg', label: 'Versace sunglasses campaign film' },
    ],
  },
  {
    slug: 'coach',
    name: 'Coach',
    tagline: 'Classic American style with polished details.',
    category: 'Designer',
    about: [
      'Coach is an American fashion brand rooted in leather goods, and its eyewear brings that same classic, polished feel to glasses and sunglasses.',
      'Look for wearable shapes with refined touches, such as signature hardware and rich colors, that feel elevated without being loud.',
    ],
    highlights: [
      'Polished, wearable shapes',
      'Signature hardware and refined details',
      'Optical frames and sunglasses',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/coach/coach-1.jpg',
    heroAlt: 'Woman in a blue leather jacket wearing black Coach cat-eye eyeglasses',
    gallery: [
      { src: '/images/brands/coach/coach-2.jpg', alt: 'Black Coach cat-eye sunglasses with signature C hardware', contain: true },
      { src: '/images/brands/coach/coach-3.jpg', alt: 'Dark green Coach square optical frame', contain: true },
    ],
  },
  {
    slug: 'michael-kors',
    name: 'Michael Kors',
    tagline: 'Jet-set glamour for everyday wear.',
    category: 'Designer',
    about: [
      'Michael Kors eyewear reflects the brand\'s polished, jet-set style: glamorous shapes made easy enough to wear every day.',
      'The collection includes oversized sunglasses, feminine optical frames and metallic accents, with plenty of options for adding a little shine to your look.',
    ],
    highlights: [
      'Glamorous, feminine shapes',
      'Metallic accents and warm tones',
      'Optical frames and sunglasses',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/michael-kors/michael-kors-1.jpg',
    heroAlt: 'Woman wearing tortoise Michael Kors cat-eye eyeglasses with gold MK logo temples',
    gallery: [
      { src: '/images/brands/michael-kors/michael-kors-2.jpg', alt: 'Transparent tan Michael Kors square optical frame', contain: true },
      { src: '/images/brands/michael-kors/michael-kors-3.jpg', alt: 'Tortoise Michael Kors square optical frame with crystal accents', contain: true },
    ],
  },
  {
    slug: 'etnia-barcelona',
    name: 'Etnia Barcelona',
    tagline: 'Bold color and art-inspired design from Barcelona.',
    category: 'Designer',
    about: [
      'Etnia Barcelona is an eyewear brand from Barcelona, known for its bold use of color and an artistic, creative point of view.',
      'If you want frames that show some personality, this is a good place to start: expressive colors and patterns alongside more classic shapes.',
    ],
    highlights: [
      'Bold, distinctive color combinations',
      'Art-inspired, expressive designs',
      'Optical frames and sunglasses',
      'Great for anyone who wants their glasses to stand out',
    ],
    heroImage: '/images/brands/etnia-barcelona/etnia-barcelona-1.jpg',
    heroAlt: 'Woman in a white tulle outfit wearing white oval Etnia Barcelona sunglasses against a blue backdrop',
    gallery: [
      { src: '/images/brands/etnia-barcelona/etnia-barcelona-2.jpg', alt: 'Man in a teal jacket wearing clear Etnia Barcelona eyeglasses against a pink backdrop' },
      { src: '/images/brands/etnia-barcelona/etnia-barcelona-3.jpg', alt: 'Clear Etnia Barcelona sunglasses with multicolor striped temples', contain: true },
    ],
  },
  {
    slug: 'lool',
    name: 'LOOL',
    tagline: 'Ultralight, screwless-hinge frames built in Barcelona.',
    category: 'Designer',
    about: [
      'LOOL is a multidisciplinary design studio based in Barcelona. The brand started with one goal, building a better screwless hinge, and grew into a collection of lightweight, functional frames.',
      'The studio takes its cues from Barcelona\'s architecture and design tradition, and builds its frames to be thin and light enough for all-day comfort. Stop by and our opticians can show you what we have from the collection right now.',
    ],
    highlights: [
      'Signature screwless hinge design',
      'Very lightweight, slim frames made for all-day wear',
      'Optical frames and sunglasses, plus magnetic clip-on options',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/lool/lool-1.jpg',
    heroAlt: 'Woman with platinum hair wearing thin rose-tinted LOOL eyeglasses in front of a white turbine',
    gallery: [
      { src: '/images/brands/lool/lool-2.jpg', alt: 'Woman wearing round black LOOL eyeglasses with a matching magnetic sun clip-on floating above' },
      { src: '/images/brands/lool/lool-3.jpg', alt: 'Clear rectangular LOOL eyeglasses with slim gold temples', contain: true },
    ],
  },
  {
    slug: 'flexon',
    name: 'Flexon',
    tagline: 'Flexible memory-metal frames that bounce back.',
    category: 'Lifestyle',
    about: [
      'Flexon is known for flexible frames made from memory metal, a titanium-based alloy that can bend and then return to its original shape.',
      'That flexibility makes Flexon a practical choice for anyone who is hard on their glasses, and the frames are lightweight enough to forget you are wearing them.',
    ],
    highlights: [
      'Memory-metal frames that flex and return to shape',
      'Lightweight titanium-alloy construction',
      'Classic metal shapes for men and women, plus options for kids',
      'A practical pick if your glasses take a beating',
    ],
    heroImage: '/images/brands/flexon/flexon-1.jpg',
    heroAlt: 'Flexon metal eyeglasses squeezed in a clamp, showing their flexibility',
    gallery: [
      { src: '/images/brands/flexon/flexon-2.jpg', alt: 'Silver Flexon eyeglasses draped over a hammer' },
      { src: '/images/brands/flexon/flexon-3.jpg', alt: 'Flexon aviator-style frame with a sport strap on an orange background' },
      { src: '/images/brands/flexon/flexon-4.jpg', alt: 'Hands holding plum-colored Flexon eyeglasses with twisted temples' },
      { src: '/images/brands/flexon/flexon-5.jpg', alt: 'Black and tortoise Flexon half-rim eyeglasses on a tan surface' },
      { src: '/images/brands/flexon/flexon-6.jpg', alt: 'Dark blue Flexon kids’ eyeglasses on an illustrated space background' },
    ],
  },
  {
    slug: 'converse',
    name: 'Converse',
    tagline: 'Street-style frames with a youthful attitude.',
    category: 'Lifestyle',
    about: [
      'Converse eyewear takes its cue from the brand\'s sneaker and street-style roots: casual, creative frames with an easy, youthful attitude.',
      'Expect fun colors, transparent finishes and familiar everyday shapes for teens and adults who want glasses that feel like part of their personal style.',
    ],
    highlights: [
      'Casual, street-inspired shapes',
      'Bold and transparent color options',
      'Styles for teens and adults',
      'Ask us about current styles in store',
    ],
    heroImage: '/images/brands/converse/converse-1.jpg',
    heroAlt: 'Woman in a red top wearing pink transparent Converse eyeglasses',
    gallery: [
      { src: '/images/brands/converse/converse-2.jpg', alt: 'Person in a leopard-print cardigan wearing navy Converse eyeglasses' },
    ],
  },
  {
    slug: 'nautica',
    name: 'Nautica',
    tagline: 'Relaxed, classic style with a nautical spirit.',
    category: 'Lifestyle',
    about: [
      'Nautica eyewear draws on the brand\'s nautical inspiration for a relaxed, classic look that feels at home on the coast or around town.',
      'The frames favor timeless shapes, comfortable fits and easy, sea-inspired colors, with sunglasses for bright Texas days alongside everyday optical styles.',
    ],
    highlights: [
      'Relaxed, classic shapes',
      'Sea-inspired colors, including navy and tortoise tones',
      'Optical frames and sunglasses',
      'Comfortable, easygoing everyday wear',
    ],
    heroImage: '/images/brands/nautica/nautica-1.jpg',
    heroAlt: 'Man by the sea wearing dark navy Nautica eyeglasses',
    gallery: [
      { src: '/images/brands/nautica/nautica-2.jpg', alt: 'Man in the ocean wearing dark Nautica sunglasses' },
      { src: '/images/brands/nautica/nautica-3.jpg', alt: 'Gray transparent Nautica sunglasses with blue temple accents', contain: true },
    ],
  },
]

export function getBrand(slug) {
  return BRANDS.find((b) => b.slug === slug)
}
