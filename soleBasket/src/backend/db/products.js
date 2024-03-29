import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  
  {
    _id: uuid(),
    name: "JORDAN BREAK SLIDE 'UNIVERSITY RED/METALLIC SILVER'",
    brand: "JORDAN",
    description: "Featuring a fixed strap over the top of the foot, the Jordan Break Slide features durable synthetic leather and lightweight foam cushioning for underfoot comfort.",
    producthighlights:["A fixed strap provides a secure fit.", "A synthetic-leather upper delivers comfortable durability.", "Phylon foam has a lightweight, soft feel underfoot."],
    price: "1995",
    gender: "MEN",
    category: "FLIP FLOPS",
    rating: "3",
    collection: "SUMMER",
    size: ["UK7", "UK8", "UK9"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686442/ecomm/jordan-break-slide-university-redmetallic-silver-5fe2db6337b1a_dstjuh.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "JORDAN BREAK SLIDE 'BLACK/UNIVERSITY RED-WHITE'",
    brand: "JORDAN",
    description: "Featuring a fixed strap over the top of the foot, the Jordan Break Slide features durable synthetic leather and lightweight foam cushioning for underfoot comfort.",
    producthighlights:["A fixed strap provides a secure fit.", "A synthetic-leather upper delivers comfortable durability.", "Phylon foam has a lightweight, soft feel underfoot."],
    price: "1995",
    gender: "WOMEN",
    category: "FLIP FLOPS",
    rating: "3.1",
    collection: "SUMMER",
    size: ["UK4", "UK5", "UK9"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686441/ecomm/jordan-break-slide-blackuniversity-red-white-605334e9ecd79_l2n6wa.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "WAFFLE TRAINER 2 SE 'SAIL/MED GREY/ALPHA ORANGE'",
    brand: "NIKE",
    description: "Staying true to the timeless track style you love, the Nike Waffle Trainer 2 brings you the original look of heritage Nike running shoes. Equipped with the iconic Waffle outsole, throwback Swoosh logo and old-school suede accents, it's a true blast from the past.",
    producthighlights:["Swapping rubber for batter on an old waffle iron, Nike founder Bill Bowerman created the Waffle outsole. It not only delivers traction, durability and heritage styleâ€”it proves greatness is in the everyday.", "Suede and durable textile combine for a design that's lightweight and durable.", "Exposed foam on the tongue gives a DIY aesthetic combined with a soft feel.", "Soft foam underfoot gives you lightweight cushioning.", "Lining around the collar brings a smooth feel that's extra durable."],
    price: "8695",
    gender: "UNISEX",
    category: "SPORTS SHOES",
    rating: "4.2",
    collection: "TIMELESS",
    size: ["UK4","UK5", "UK9", "UK10"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686443/ecomm/nike-waffle-trainer-2-se-sailmed-grey-alpha-orange-626a5aa461f5e_b0fxkb.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "WMNS AIR JORDAN 11 RETRO LOW 'WHITE/PURE VIOLET/WHITE'",
    brand: "JORDAN",
    description: "The legendary design of the Air Jordan 11 Retro Low redefines the look of basketball. A full-length cushioning unit outfits the iconic model with plush comfort.",
    producthighlights:["Genuine leather, synthetic leather and/or textile in the upper give you an iconic look.", "A full-length Air-Sole unit provides plush cushioning.", "The composite shank enhances midfoot support.", "A rubber outsole with multidirectional pattern for traction and durability."],
    price: "15995",
    gender: "WOMEN",
    category: "SPORTS SHOES",
    rating: "3",
    collection: "SUMMER",
    size: ["UK4", "UK5", "UK6", "UK7","UK8"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686448/ecomm/wmns-air-jordan-11-retro-low-whitepure-violet-white-626643f4e11a1_slsdyd.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "LEBRON XIX 'WHITE/UNIVERSITY RED/BLACK'",
    brand: "NIKE",
    description: "LeBron thrives when stakes are high and the pressureâ€™s on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Cushioned pods around the collar and tongue add comfort while reducing weight, giving players the secure feel and confidence to go all out when the game is on the line.",
    producthighlights:["The retooled cushioning system combines 360Âº visible Max Air unit with a thick, responsive Zoom Air unit under the forefoot. The Max Air helps to dissipate impact forces, while the Zoom Air helps drive you down the court. The bottom of the shoe is designed to look like valves and tubes that form its inner workings.", "A full inner sleeve conforms to the foot for a snug, secure feel. The thin, transparent exterior layer is highly durable and lightweight to help reduce in-shoe movement.", "Inspired by LeBron's crown logo, a micro-engineered blade pattern on the rubber outsole adds multidirectional traction.", "Pods embedded in the tongue and collar provide lightweight cushioning around the ankle and over the top of the foot.", "Flywire cables work with the laces to provide more support as you tighten them."],
    price: "17595",
    gender: "MEN",
    category: "SPORTS SHOES",
    rating: "5",
    collection: "SUMMER",
    size: ["UK7", "UK8", "UK10", "UK12","UK13"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686443/ecomm/lebron-xix-whiteuniversity-red-black-624a87850da2b_xmzdpg.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "327 'NATURAL PINK'",
    brand: "NEW BALANCE",
    description: "As recreational running established widespread popularity in the 1970s, the benchmark for running footwear shifted from mere existence to performance. While the eraâ€™s designs would be considered simple by todayâ€™s standards, the decade stands out as the moment when running shoes truly came into their own. The 327 sheds new light on the 70s as a time of innovation by boldly reshaping classic design elements with a thoroughly contemporary outlook. With an angular reworking of the tried-and-true wedge silhouette, outsize, asymmetrically applied NB branding, and wraparound, trail-inspired lug outsole, the 327 provides nothing less than a complete reimagination of our running heritage.",
    producthighlights:[],
    price: "11000",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "4.3",
    collection: "WINTER",
    size: ["UK3", "UK4", "UK6",],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686441/ecomm/327-natural-pink-625d2336ad7c5_fp5r4h.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "327 'DEEP VIOLET'",
    brand: "NEW BALANCE",
    description: "As recreational running established widespread popularity in the 1970s, the benchmark for running footwear shifted from mere existence to performance. While the eraâ€™s designs would be considered simple by todayâ€™s standards, the decade stands out as the moment when running shoes truly came into their own. The 327 sheds new light on the 70s as a time of innovation by boldly reshaping classic design elements with a thoroughly contemporary outlook. With an angular reworking of the tried-and-true wedge silhouette, outsize, asymmetrically applied NB branding, and wraparound, trail-inspired lug outsole, the 327 provides nothing less than a complete reimagination of our running heritage.",
    producthighlights:[],
    price: "11000",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "3.8",
    collection: "WINTER",
    size: ["UK4", "UK5",],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686439/ecomm/327-deep-violet-625d24282d54a_zwys1q.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "OZELIA W 'MAGIC MAUVE/MAGIC MAUVE/ALMOST PINK'",
    brand: "ADIDAS ORIGINALS",
    description: "ULTRA-CUSHIONED, SUPER '90S TRAINERS MADE IN PART WITH RECYCLED CONTENT. The '90s served up some serious looks, and we've infused some of the best of them into these adidas Ozelia Shoes. We've also added modern comforts, like Adiprene cushioning that makes sure every step you take is greeted with plush goodness, and a snug fit that hugs the foot.",
    producthighlights:["Snug fit", "Lace closure", "Textile and leather upper", "Adiprene cushioning", "25% of the components used to make the upper are made with a minimum of 50% recycled content"],
    price: "10999",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "2.5",
    collection: "SUMMER",
    size: ["UK5", "UK6", "UK7"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686446/ecomm/ozelia-w-magic-mauvemagic-mauvealmost-pink-6254013fabfba_vqrbmq.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "SUPERSTAR PARLEY 'FTWR WHITE/OFF WHITE/WHITE TINT'",
    brand: "ADIDAS ORIGINALS",
    description: "IN COLLABORATION WITH PARLEY FOR THE OCEANS, THESE ADIDAS SUPERSTAR SHOES ARE MADE IN PART WITH RECYCLED MATERIALS. A trainer alone won't save the planet. But these adidas Superstar shoes are a really good start. Part of our effort to help end plastic waste, we collaborated with Parley for the Oceans to create a heel strap and tongue webbing using yarn from ocean plastic collected on the beach. Even with all that game-changing attitude, their look and vibe are just the same as that first shoe that stepped out on the hardwood back in the '70s. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    producthighlights:["Synthetic upper", "BOOST drop-in midsole", "Upper contains a minimum of 50% recycled content"],
    price: "13999",
    gender: "UNISEX",
    category: "CASUAL SHOES",
    rating: "4.8",
    collection: "TIMELESS",
    size: ["UK3", "UK5", "UK7", "UK8", "UK9", "UK10"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686447/ecomm/superstar-parley-ftwr-whiteoff-whitewhite-tint-621dfafd63d8b_c6ogcj.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "STAPLE DESIGNS 'GREY'",
    brand: "CROCS",
    description: "The Classic Clog gets an NYC update with a Pigeon-stained sidewalk motif. The lightweight, water-friendly and buoyant clog is designed with a custom Pigeon logo rivet, ventilation ports to add breathability and help shed water and debris, pivoting heal strap for a more secure fit, and multiple custom Jibbitz including: Pigeon feet, a book of matches, sewer alligator with pizza, a coffee cup, a cockroach, chewing gum, a rat, and the Pigeon mascot.",
    producthighlights:[],
    price: "6495",
    gender: "UNISEX",
    category: "CLOGS",
    rating: "1",
    collection: "NEW",
    size: ["UK4", "UK5", "UK10"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686445/ecomm/staple-designs-grey-6260eb57775c4_mqdwhz.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "W AF1 PLT.AF.ORM 'BLACK/ANTHRACITE-WHITE-BLACK'",
    brand: "NIKE",
    description: "WHAT'S YOUR PLATFORM? Let classic, easy-to-wear AF1 style rise to the occasion with the Nike Air Force 1 PLT.AF.ORM. Its elegantly shaped and lifted midsole delivers a proud, new voice to the hoops franchise. The leather on the upper breaks in easily and ages to soft perfection while the sculpted collar and pillowy heel keep it comfy. Captivate your audience.",
    producthighlights:["Rise Up; The lifted midsole brings a new dimension to the AF1 franchise, elevating your look while remaining easy to style. The soft foam underfoot adds to the comfort.", "Performance Comfort; Originally designed for performance hoops, Air cushioning in the heel delivers lasting comfort. Fresh details like new dubrae and supersoft liner refine the look and feel of the shoe that has captured the eyes of the streets for 40 years.", "Rubber outsole with classic pivot circle pattern adds traction and durability.", "Padded, low-cut collar looks sleek and feels great."],
    price: "8695",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "4.3",
    collection: "TIMELESS",
    size: ["UK3", "UK4", "UK5"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686448/ecomm/w-af1-pltaform-blackanthracite-white-black-6241b072898b1_rotjyu.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "SHOCK THE GAME 5.0 'WHITE/BLACK'",
    brand: "ANTA",
    description: "The Anta Shock The Game basketball shoes, use A-SHOCK stablizer and A-Flashedge tech to improve comfort, rebound and cushioning. Highlights:",
    producthighlights:["New Anta A-Flashedge cushioning tech, with 25% PE material - Comfort, Rebound and Fatigue resistance are enhanced", "Midsole uses Carbon Fiber plate that greatly enhances torsion resistance", "High-performance rubber outsole, anti-slip and wear-resistant", "The front portion uses A-SHOCK stablizer that enhances side sole support and improves anti-rollover performance"],
    price: "8999",
    gender: "UNISEX",
    category: "SPORTS SHOES",
    rating: "4.1",
    collection: "NEW",
    size: ["UK5", "UK8"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686446/ecomm/stg-50-whiteblack-625eb4c5ce2be_ui5xhi.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "ANTA",
    brand: "SHOCK THE GAME 5.0 'GREEN'",
    description: "The Anta Shock The Game basketball shoes, use A-SHOCK stablizer and A-Flashedge tech to improve comfort, rebound and cushioning. Highlights:",
    producthighlights:["New Anta A-Flashedge cushioning tech, with 25% PE material - Comfort, Rebound and Fatigue resistance are enhanced", "Midsole uses a Carbon Fiber plate that greatly enhances torsion resistance", "High-performance rubber outsole, anti-slip and wear-resistant, specially designed for outdoor hoops.", "A-SHOCK stablizer that enhances side sole support and improves anti-rollover performance"],
    price: "8999",
    gender: "MEN",
    category: "SPORTS SHOES",
    rating: "2.8",
    collection: "NEW",
    size: ["UK11"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686446/ecomm/stg-50-green-625fd5823704e_rulye4.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "LEBRON XIX 'BLACK/GREEN GLOW-ANTHRACITE'",
    brand: "NIKE",
    description: "LeBron thrives when stakes are high and the pressure's on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Cushioned pods around the collar and tongue add comfort while reducing weight, giving players the secure feel and confidence to go all out when the game is on the line.",
    producthighlights:["The retooled cushioning system combines 360Âº visible Max Air unit with a thick, responsive Zoom Air unit under the forefoot. The Max Air helps to dissipate impact forces, while the Zoom Air helps drive you down the court. The bottom of the shoe is designed to look like valves and tubes that form its inner workings.", "A full inner sleeve conforms to the foot for a snug, secure feel. The thin, transparent exterior layer is highly durable and lightweight to help reduce in-shoe movement.", "Inspired by LeBron's crown logo, a micro-engineered blade pattern on the rubber outsole adds multidirectional traction."],
    price: "17595",
    gender: "MEN",
    category: "SPORTS SHOES",
    rating: "4.8",
    collection: "NEW",
    size: ["UK7", "UK11", "UK12"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686442/ecomm/lebron-xix-blackgreen-glow-anthracite-6259076ac19df_zzgw0a.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "ZOOM GT JUMP 'SUMMIT WHITE/WHITE/SAIL/BLACK'",
    brand: "NIKE",
    description: "Feel like defying gravity? Meet one of Nike Basketball's most responsive cushioning systems ever devised for game shoes. The double-stacked Zoom Air works in unison with an external jump frame made from PEBAXÂ® that's lightweight, springy and strong. The woven exoskeleton-like upper helps you feel fully connected, so you can move with confidence and power and defeat the force that holds you down.",
    producthighlights:["This cushioning system is through the roof! The full-length, Air Zoom Strobel unit (right up under your foot) is double-stacked with Zoom Air in the heel and forefoot. Add to that an external jump frame that is super-lightweight and springy, and you've got yourself 1 gravity-busting sensation.", "The leno-weave upper uses a grid of twisted strands of composite fibers, making it extra strong but incredibly light. Together with the sculpted, slightly lowered midsole and jump plate, it's designed to help you feel stable and fully connected to your power.", "The thin-web rubber outsole uses a zigzag herringbone pattern that is tried-and-true on the basketball court. A cutout under the arch and perforations throughout help reduce weight and keep it flexible.", "Flywire cables up the sides loop around the laces to anchor you down when you lace up."],
    price: "16595",
    gender: "UNISEX",
    category: "SPORTS SHOES",
    rating: "3.9",
    collection: "SUMMER",
    size: ["UK5", "UK6", "UK7", "UK9"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686450/ecomm/zoom-gt-jump-summit-whitewhitesailblack-6232e91f800bb_ffqdrj.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "AIR PRESTO 'PHOTO BLUE/HABANERO RED/BLACK'",
    brand: "NIKE",
    description: "With a sleek design that's more comfortable than your favorite t-shirt, the Nike Air Presto is made to feel good and look fast. Its stretchy sleeve creates a cozy, sock-like fit while the super-soft foam adds spring to your step. Put them on and you'll never want to take them off.",
    producthighlights:["The stretchy mesh upper creates a cozy, sock-like fit while adding breathability.", "The iconic mid-foot TPU cage adds contrast to the stretchy synthetic upper while helping support your foot.", "Nike Air cushioning adds comfort that lasts.", "The 5 dots on the midsole reference the innovation-focused Nike Alpha Project, which produced the OG Air Presto.", "Rubber details on the sole add traction and durability"],
    price: "11495",
    gender: "WOMEN",
    category: "SPORTS SHOES",
    rating: "4.6",
    collection: "TIMELESS",
    size: ["UK5", "UK6"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686443/ecomm/nike-air-presto-photo-bluehabanero-red-black-62147c7ec11b4_tnu3kt.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "X SALEHE BEMBURY POLLEX CLOG 'CROC GREEN'",
    brand: "CROCS",
    description: "The Crocs Pollex Clog by Salehe Bembury is an exploration of form and function that balances heritage with the most innovative mold in the shoe business. This is an entirely new direction for our Classic Clog, reworked by renowned footwear designer Salehe Bembury. The Crocs Pollex is composed of 3 of his signature fingerprints merged together, with dramatic concave ridges allowing for multi-directional traction. Holes found on the upper of the Crocs Pollex are designed to align with the high-heat areas of the foot for increased breathability.",
    producthighlights:[],
    price: "7495",
    gender: "UNISEX",
    category: "CLOGS",
    rating: "4.5",
    collection: "SUMMER",
    size: ["UK3", "UK5", "UK6", "UK7"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686444/ecomm/salehe-drop-2-croc-green-628c938cc2c11_kqkugk.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "TRAE YOUNG 1 'CWHITE/MINRUS/TURBO'",
    brand: "ADIDAS",
    description: "TRAE YOUNG SIGNATURE SHOES MADE IN PART WITH RECYCLED MATERIALS. The future of the game looks like Trae Young: unconventional, fearless and with a flair for the dramatic. The newest signature shoes from adidas Basketball and Trae Young support that moves that scramble a defender's mind and leave them in a haze of disbelief. An ultra-lightweight Lightstrike midsole with an energy-returning BOOST drop-in and a superior internal lockdown system provides comfort that matches your agility.",
    producthighlights:["Lightstrike cushioning", "BOOST midsole", "Rubber outsole", "25% of the components used to make the upper contain a minimum of 50% recycled content"],
    price: "12999",
    gender: "MEN",
    category: "SPORTS SHOES",
    rating: "3.2",
    collection: "NEW",
    size: ["UK7", "UK8", "UK9", "UK10"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686447/ecomm/trae-young-1-cwhiteminrusturbo-627b8f455fa9f_hqlvfe.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "REPTOSSAGE SLIDES 'FTWR WHITE/HI-RES GREEN/CORE BLACK'",
    brand: "ADIDAS ORIGINALS",
    description: "As '90s as Y2K and dial-up internet. These adidas Reptossage Slides bring back an obscure style from 1999. Edgy and bold, the PVC footbed stands out in bright neon colour. An EVA midsole and synthetic bandage keep your look rooted in archival style. Slide in and celebrate never having to hear that dial-up sound.",
    producthighlights:["Hook-and-loop strap closure", "Synthetic upper", "EVA outsole", "A '90s-era slide with an eye-catching footbed."],
    price: "4999",
    gender: "UNISEX",
    category: "FLIP FLOPS",
    rating: "3.9",
    collection: "SUMMER",
    size: ["UK4", "UK11"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686445/ecomm/reptossage-ftwr-whitehi-res-greencore-black-627b8e4729f10_lhfyow.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "JORDAN SUPER PLAY SLIDE 'UNIV RED/BLACK/WHITE/POMEGRANATE'",
    brand: "JORDAN",
    description: "Your feet deserve nothing but the best. These slides offer lightweight foam and plush underfoot cushioning—premium comfort you'll look forward to after your next big game.",
    producthighlights:["Hook-and-loop strap provides an adjustable, secure fit.", "Synthetic leather in the upper delivers comfortable durability.", "Foam sole with a textured footbed gives you supportive cushioning.", "Herringbone pattern on the outsole provides traction."],
    price: "4195",
    gender: "UNISEX",
    category: "FLIP FLOPS",
    rating: "2.8",
    collection: "NEW",
    size: ["UK5", "UK6", "UK9"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686441/ecomm/jordan-super-play-slide-univ-redblack-white-pomegranate-6297555d08414_zrlxkh.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "SUEDE CREPE EMBROIDERY 'SPRING MOSS'",
    brand: "PUMA",
    description: "From Tommie Smith's protest on the victory stand during the 1968 Olympic games to b-boy crews in NYC adopting the shoe in the 1980s, the Suede is constantly evolving since its birth in 1968. Today, PUMA is bringing an update to the icon by keeping the same upper design of the original but swapping its well-known cupsole with a real crepe sole, a natural material known for its comfort and sustainable obtaining. A finely crafted shoe which continues to stand the test of time and extends the legacy of the Suede. The Suede Crepe Embroidery comes with a fully embroidery paisley pattern on the upper.",
    producthighlights:["Suede Upper",
      "Embroidery pattern on upper",
      "Synthetic lining",
      "Suede tongue with Sportstyle woven label",
      "Foil print + deboss Puma branding on quarter",
      "Embroidery Puma branding on FOT"],
    price: "10999",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "2.7",
    collection: "NEW",
    size: ["UK5", "UK6"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686446/ecomm/suede-crepe-embroidery-spring-moss-6297577494be3_vyckqx.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "CLASSIC LEATHER CARDI V2 'ULTRABERRY/ULTRABERRY/AUBERGINE'",
    brand: "REEBOK",
    description: "BOLD LEATHER SHOES MADE IN COLLABORATION WITH CARDI B Pushing proportions and design, these women's Classic Leather Cardi B V2 shoes incorporate iconic DNA with modernity, boldness and flare. The moulded Vector and oversized outsole lugs pay homage to Reebok while representing Cardi B's explosive, high-energy and exaggerated lifestyle.",
    producthighlights:["Textile upper with suede overlays",
      "Lace closure",
      "Textile lining",
     " Rubber outsole"],
    price: "8999",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "1.6",
    collection: "WINTER",
    size: ["UK3","UK4"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686440/ecomm/classic-leather-cardi-v2-ultraberryultraberryaubergine-62a9880d8df7d_km9f8p.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "WMNS JORDAN SOPHIA SLIDE 'SESAME/WHITE-SESAME'",
    brand: "JORDAN",
    description: "Warm weather, casual cool. These luxe slides have pillowy, criss-cross straps lined with plush fabric that feels soft against your skin. The tonal colorway and slight platform silhouette combine for a hint of boldness, and Air-Sole cushioning in the heel means you'll be walking on clouds all summer long.",
    producthighlights:["Padded, criss-cross strap with lined underside feels soft and comfortable.", "Footbed with raised edge cradles your foot to help reduce slipping.",
    "Foam in the midsole with Air-Sole unit in heel cushions every step.",
    "Durable rubber tread gives you excellent traction."],
    price: "7095",
    gender: "WOMEN",
    category: "FLIP FLOPS",
    rating: "4.0",
    collection: "SUMMER",
    size: ["UK5"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686449/ecomm/wmns-jordan-sophia-slide-sesamewhite-sesame-62b0113f05daa_pwqpmg.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "WALES BONNER SAMBA 'COLLEGIATE ORANGE/ECRUTINT/COLLEGIATE ORANGE'",
    brand: "ADIDAS ORIGINALS",
    description: "The Spring Summer 2022 collection from adidas Originals and Wales Bonner reimagines football apparel and shoes from the 1970s and 1980s. The collection offers elevated, luxury sportswear with a romantic connection to the past. The adidas Samba shoes are a classic staple, deeply rooted in our culture and history. Wales Bonner gives them a new look, with a nylon upper complemented by suede details and thick contrast topstitching. They're lined with satin and come with supplementary laces in crochet — a signature of the Wales Bonner house.",
    producthighlights:["Lace closure",
     "Nylon and suede upper",
     "Satin lining",
      "Synthetic leather sockliner",
     " Gum rubber outsole"],
    price: "15999",
    gender: "UNISEX",
    category: "CASUAL SHOES",
    rating: "3.8",
    collection: "SUMMER",
    size: ["UK6", "UK7","UK11"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686448/ecomm/wb-samba-collegiate-orangeecrutintcollegiate-orange-62b302b8868aa_k9fjvm.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "WALES BONNER SAMBA 'CREAM WHITE/BOLD GREEN/EASY YELLOW'",
    brand: "ADIDAS ORIGINALS",
    description: "The Spring Summer 2022 collection from adidas Originals and Wales Bonner reimagines football apparel and shoes from the 1970s and 1980s. The collection offers elevated, luxury sportswear with a romantic connection to the past. The adidas Samba shoes are a classic staple, deeply rooted in our culture and history. Wales Bonner gives them a new look, with a nylon upper complemented by suede details and thick contrast topstitching. They're lined with satin and come with supplementary laces in crochet — a signature of the Wales Bonner house.",
    producthighlights:["Lace closure",
     "Nylon and suede upper",
     "Satin lining",
      "Synthetic leather sockliner",
     " Gum rubber outsole"],
    price: "15999",
    gender: "UNISEX",
    category: "CASUAL SHOES",
    rating: "3.9",
    collection: "SUMMER",
    size: ["UK5","UK6", "UK7","UK10"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686449/ecomm/wb-samba-cream-whitebold-greeneasy-yellow-62b300b1250b1_igvclo.jpg",
    outofstock: false
  },
  {
    _id: uuid(),
    name: "X GARFIELD SUEDE 'DARK CHEDDAR/CELANDINE/VALLARTA BLUE'",
    brand: "PUMA",
    description: "Introducing our first ever collaboration with one of the most legendary comic characters of all time: Garfield Ã¢â‚¬â€œ a fun, vibrant collection featuring bright colours and playful graphics. These trainers include a colourful contrast PUMA Formstrip and a cheeky collab graphic at the tongue showing a hungry Garfield, finished with a chunky bonus hangtag. Perfect for lovers of the Jim Davis classic.",
    producthighlights:["Low boot",
      "Hairy suede upper with narrow suede tooling",
      "Lace closure with second set of laces in separate mini bag",
      "Special graphic hangtag on one shoe",
      "PUMA Formstrip at lateral side",
      "PUMA x GARFIELD graphic at tongue"],
    price: "7999",
    gender: "WOMEN",
    category: "CASUAL SHOES",
    rating: "3.8",
    collection: "SUMMER",
    size: ["UK5", "UK6"],
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686447/ecomm/suede-garfield-dark-cheddar-celandine-vallarta-blue-6267ec2fdf843_rlreog.jpg",
    outofstock: false
  },
  
];
