/**
 * returns a unique id of type string
 */
function uniqueid() {
    var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);

    return (idstr);
}

export const masterClassesData = [
    {
        id: "Rx5uqc0XoiA",
        title: "BEADWORK",
        instructor: "Agnes Maina",
        description: "Agnes Maina is a seasoned bead worker who has mastered the art of beadwork over the years. She has transcended from the traditional beads to the current beads and still holds on to the value of traditional beads that were used in trade to create masterpieces sold locally and internationally. In this Masterclass  Agnes takes you through the different styles of creating jewellery and the different materials used in creating jewellery.",
        youtubeEmbedID: "Rx5uqc0XoiA",
        poster: "/agnesMaina.png",
        category: "organisation",
        new: true
    },
    {
        id: "S17BFdmKNAY",
        title: "FINDING YOUR MUSE",
        instructor: "MAGGIE OTIENO",
        description: "Maggie Otieno is an amazing sculptor who makes sculptures from mostly wood and metal parts. She believes that the wood she uses, which are over 100 years old and were used in the meter gauge railway, are grained with stories of the travelers.  In this masterclass Maggie Otieno takes you through a masterclass on finding your muse to unleashing your creative inspiration for your masterpieces. She delves on the following key components; How do you define a muse and draw inspiration to it? How can you translate your inspiration to art?  What are the measures to take when you think you are losing your muse?",
        youtubeEmbedID: "S17BFdmKNAY",
        poster: "/maggieOtieno.png",
        category: "organisation",
        new: true
    },
    {
        id: "L95EX4M8pBE",
        title: "Voice over acting.",
        instructor: "Keith Kihiu",
        description: "Keith Kihiu is a voice artist who has mastered the art over the years with works done with Buni media among others. In this masterclass, Keith Kihiu takes you through voice-over acting giving insights on the do's and don'ts while giving you tips on being the best Voice-Over artist in the country. Did you know that Voice artists use their vocal abilities to record audio for different purposes across many industries? I thought you should know.",
        youtubeEmbedID: "L95EX4M8pBE",
        poster: "/keithKihiu.png",
        category: "organisation",
        new: true
    },
    {
        id: "fGxN_rhZS1Q",
        title: "The Litungu",
        instructor: "Peter Lusweti Wamalwa",
        description: "Peter Lusweti Wamalwa is a renowned musician and musical instrument trainer. He has mastered the art of training people who would like to learn the skills of how to play some traditional musical instruments. He is also a traditional musician who has performed on gigs at the Bomas of Kenya and other places. In this Master Minds, he takes you through the Litungu a musical instrument that originates with the Luhya community. The Litungu is a traditional lyre played by the Luhya community The instrument was originally played by only men among the bukusu and it accompanies  most of ceremonial dances of the Bukusu.",
        youtubeEmbedID: "fGxN_rhZS1Q",
        poster: "/theLitungu.png",
        category: "music",
        new: true
    },
    {
        id: "Teej3RpiiXc",
        title: "Safe Spaces for Vulnerability and Conversation, Curating an intimate & unique networking experience and Reverse Brainstorming",
        instructor: "Jonas Nyacomba and Lindsay Obath",
        description: "In this Masterclass Jonas Nyacomba and Lindsay Obath who are founders of free mind session will take you through various topics that include genesis of free Mind Sessions, how to take the first step in curating a session and breaking down the walls we put ourselves in as humans.",
        youtubeEmbedID: "Teej3RpiiXc",
        poster: "/safeSpaces.png",
        category: "organisation",
    },
    {
        id: "HfgwJQD7tAk",
        title: "Accentuating body features through art",
        instructor: "Lindsay Obath",
        description: "In this masterclass Lindsay Obath takes you through body art while focusing on, hygiene and preserving products, navigating different skin tones, highlighting natural features, creating illusions, colour choices and line work.",
        youtubeEmbedID: "HfgwJQD7tAk",
        poster: "/bodyArt.png",
        category: ""
    },
    {
        id: "bvf9Rf6XAt0",
        title: "Film Directing",
        instructor: "Ochieng Oneko",
        description: "In this Episode of the Masterminds Ochieng Oneko takes you through an introductory lesson in directing film by Kenyan film maker. Ochieng is a filmmaker who trained in EICAR, the international film school in Paris, during which he worked on about 3 to 4 dozen sets in various positions: Writer, Director, 1st Assistant Director, 2nd Assistant Director, Grip, Electric, Editor, etc.",
        youtubeEmbedID: "bvf9Rf6XAt0",
        poster: "/filmDirecting.png",
        category: "video-production"
    },
    {
        id: "srJ06K-m6d8",
        title: "Organising an organisation",
        instructor: "Wambui Kinyua",
        description: "Meet Wambui Kinyua, a social scientist with a major interest in the creative sector. She works as the project/ community manager at Acacia collective, as well as working as the curator at Santuri. She has over the years gathered a wealth of experience in project management and best practices and in this masterclass, she shares a thorough analysis on what it takes to create a community. What does successful organising entail?",
        youtubeEmbedID: "srJ06K-m6d8",
        poster: "/organisingAnOrganisation.png",
        category: "organisation",
    },
    {
        id: "1rT6x7CTKXU",
        title: "Creating Colour Palettes with Styling",
        instructor: "Mohammed Ayieko",
        description: "Mohammed Ayieko is a Kenyan cinema director, whose creative agency lies in Pedagogy Drawing in his personal experiences to promote inclusive and diverse narratives. In this masterclass Ayieko takes you through the aspects of colour pelleting for a set and how best to match different outfits in a film production of or a picture shoot.",
        youtubeEmbedID: "1rT6x7CTKXU",
        poster: "/colorPalettes.png",
        category: ""
    },
    {
        id: "5Hsjk1w3YgI",
        title: "Writing",
        instructor: "Abigael Akello Arunga",
        description: " Abigael Arunga is a writer and editor in the Kenyan and East Africa region for the past decade, and more recently, she has transitioned to a more global outlook and reach in writing with organizations such as INEND, Girls Globe, and the bill and Melinda gates Foundation. In this masterclass she takes the creatives into the basics of a good writer.",
        youtubeEmbedID: "5Hsjk1w3YgI",
        poster: "/writing.png",
        category: ""
    },
    {
        id: "AuwYGk6Jqbw",
        title: "INTRODUCTION TO NFTs AND CREATION OF NFTs",
        instructor: "Paola Melissa",
        description: "Welcome to the world of NFT (Non Fungible Tokens) which is taking the creative economy by storm. In this Masterclass, Paola Mellissa, a renowned NFT enthusiast who has mastered the art of creating NFTs, takes you through the introduction of NFTs and its uptake in Kenya. She highlights on how important the NFT growth is important in the creative economy while giving you hints on how to create them.",
        youtubeEmbedID: "AuwYGk6Jqbw",
        poster: "/nfts.png",
        category: "digital-art"
    },
    {
        id: "xax6dJ6eWNE",
        title: "Photography",
        instructor: "Joe Peppih Kiragu",
        description: "Joe Peppih Kiragu has experience of over 15 years in photography and video. Joe in this masterclass introduces fundamental principles in professional photography. He also takes you through components of photography that are not directed to photography but are a note to everyone who wants to become a photographer. The topics he covers are understanding the human perception of vision, understanding light, camera basics and techniques to shape perception.",
        youtubeEmbedID: "xax6dJ6eWNE",
        poster: "/photography.png",
        category: ""
    },
    {
        id: "CV2MKE_jVX4",
        title: "Thriving in the Dance Profession",
        instructor: "Edu Ooro",
        description: "Edu Ooro is the Creatives Programs Manager and head choreographer at e Sarakasi Dome. Edwin “Edu'' to take dance lessons from a background of a parent who did not want him to pursue his dreams of becoming a dancer. He currently leaves and eats from the dance choreographies that he does and trains at the Sarakasi Dome. In this Master Mind, he takes you through the fundamentals to achieving the best in the dance profession.",
        youtubeEmbedID: "CV2MKE_jVX4",
        poster: "/thrivingInDance.png",
        category: "music"
    },
    {
        id: "yM7mGhGbw04",
        title: "Podcasting",
        instructor: "Kevin Mwachiro",
        description: "Kevin describes himself as a storyteller.  He loves words and sounds and creating images in people’s minds. He is also a writer, a journalist and a podcaster.  For Kevin, podcasting is a way of bringing the love for words and sound together. Hence, Nipe Story. A storytelling podcast that features fictional short stories from Africa. During his session, Kevin will talk about his journey into podcasting, share tips on how to start a podcast and the lessons and challenges that he has gone through over the last three years.",
        youtubeEmbedID: "yM7mGhGbw04",
        poster: "/podcasting.png",
        category: "video-production"
    },
    {
        id: "1zkyvOjoPmg",
        title: "Casting",
        instructor: "Lorella Jowi",
        description: "Casting is one of the most fundamental parts of film production. A film that has mis-cast roles would often be doomed from before filming even begins. During casting, the casting director looks to fill the roles for characters in the script with actors based on how they fit the description of the character being cast; the look, personality, believability, likeability and the actors talent. Teaching the casting Master Class is Lorella Jowi, an East Africa based filmmaker, producer, casting director and voiceover artist. Based in Nairobi, work has taken her to Ethiopia, Rwanda, Uganda, Malawi, South Africa, France and Germany. ‘The Sea Turtles of Lamu’ (2015) ,a documentary produced by LoJ, was awarded at the Wildlife Conservation Film Festival.",
        youtubeEmbedID: "1zkyvOjoPmg",
        poster: "/casting.png",
        category: "video-production"
    },
    {
        id: "lCIUQFzarnw",
        title: "Brand Strategy",
        instructor: "Antonia Kihara",
        description: "In this masterclass Antonia Kihara who is a consultant takes you through understanding the basics in brand strategy. Brand Strategy is a long term plan to achieve a series of long term goals that ultimately result in the identification and preference of your brand to the consumers. A brand strategy helps you cultivate a strong business brand and helps define who you are and helps to focus your long term goals.",
        youtubeEmbedID: "lCIUQFzarnw",
        poster: "/brandStrategy.png",
        category: "organisation"
    },
    {
        id: "CTP1hVwSE6U",
        title: "Music Masters - Drumming",
        instructor: "Oronjey",
        description: "Ronjey is a drummer who takes us through his career in the music and education industries. He shares insights on how to maintain the traditional African drums.",
        youtubeEmbedID: "CTP1hVwSE6U",
        poster: "/drumming.png",
        category: "music"
    },
    {
        id: "BuR6MqWJAag",
        title: "Music Masters - Playing the Nyatiti",
        instructor: "Makadem",
        description: "Makadem is a prolific musician who has over the years mastered the art of playing the traditional Luo Nyatiti. In this Music Master he takes you through his instrument’s features, how to build and maintained it with brief insights on how to play one.",
        youtubeEmbedID: "BuR6MqWJAag",
        poster: "/musicMaster.png",
        category: "music"
    },
    {
        id: "inf73acocgs",
        title: "L.E.D Lighting",
        instructor: "Tom Shea",
        description: "Tom Shea is an amateur custom lighting engineering enthusiast, computer geek and hacker who happens to have been lucky enough to build large-scale stages and installations at a multitude of festivals and events across three different continents. He learned almost everything he knows from Googling stuff and then trying it. ",
        youtubeEmbedID: "inf73acocgs",
        poster: "/ledLighting.png",
        category: "video-production"
    },
    {
        id: "0_Awn46Ad1g",
        title: "Gig Economy",
        instructor: "Kip Ketter",
        description: "Kip Ketter is a creative producer who has scaled the heights in the creative sector through pushing onto his dreams. He studied in South Africa and after coming back to Kenya he has grown to be a strategist, a brand developer and a creative content producer. In this masterclass Kip Ketter takes you through the dynamics of the gig economy and networking within it.",
        youtubeEmbedID: "0_Awn46Ad1g",
        poster: "/gigEconomy.png",
        category: "organisation",
    },
    {
        id: "HaDO6ySV7rc",
        title: "How to make VR projects",
        instructor: "Ingrid Klopp, Darren Emmerson , Dylan and Yasmin Elliot",
        description: "The masterclass is a unique one offered by four panelists talking about the various aspects of Virtual Reality projects. The panelist are Ingrid Klopp from Electric south based in Cape town South Africa, Darren Emmerson from the UK who works in VR and Augmented Reality, Dylan based in South Africa and is a documentary film maker and a lecturer at the university of Cape town and Yasmin Elliot an immersive content production director and a co-founder of a company called Bokker based in New York. The panelist takes you through a nearly one hour long of sharing of concepts and ideas on the Virtual reality technology that includes the gadgets and to the production concepts.",
        youtubeEmbedID: "HaDO6ySV7rc",
        poster: "/vrProjects.png",
        category: "digital-art",
        new: true
    },
    {
        id: "1YB3-jztJ1M",
        title: "MARKETING AND BRANDING A BAND",
        instructor: "Kenn Njoroge",
        description: "Kenn Njoroge AKA Biggie is a band manager at Shamsi Music and plays drum. He is in charge of branding and marketing the band with an experience of over 8 years. In this part of the masterclass he shares the Shamsi success in branding and marketing that has made the band scale the far they reached.",
        youtubeEmbedID: "1YB3-jztJ1M",
        poster: "/marketingABrand.png",
        category: "organisation",
        new: true
    },
    {
        id: "mqQrpFyijJY",
        title: "Starting and naming a band",
        instructor: "Samuel Waithaka",
        description: "Samuel Waithaka Nyaga AKA Laka is a saxophonist at Shamsi music. Just as  most other people in bands Laka started his music career in a church band. He has been with Shamsi band for twenty years. In this masterclass Laka takes you through how to start a band and naming a band.",
        youtubeEmbedID: "mqQrpFyijJY",
        poster: "/makingABand.png",
        category: "organisation",
        new: true
    },
    {
        id: "mqQrpFyijJY",
        title: "Location Scouting",
        instructor: "MATRID NYAGA",
        description: "In film production, location scouting is finding places to shoot commercials, television shows, or movies. In this master class Matrid Nyaga goes through best practices when searching for interior or exterior venues to serve as the setting for scenes depicted in a script.",
        youtubeEmbedID: "mqQrpFyijJY",
        poster: "/locationScouting.png",
        category: "video-production",
        new: true
    },
    {
        id: "0iWCW6XELdk",
        title: "Directing",
        instructor: "Alan Oyugi",
        description: "Alan Oyugi is a Kenyan film actor and director who has worked on several projects mainly in the are of local TV dramas and soap operas and comedies such as Jane and Abel which was aired on Maisha Magic, Mama Digital and Mjinga na Mshenzi a kiswahili comedy both for Ebru Tv. He has also produced and directed several documentaries on environmental issues, an area he is very passionate about. He released the film Plastics are For ever just as Kenya was implementing a ban on single use plastic. They have shown this film around the world as a showcase of what efforts are being made to eradicate ocean plastic on the east African coast. He is a father of two adult children",
        youtubeEmbedID: "0iWCW6XELdk",
        poster: "/directing.png",
        category: "video-production",
        new: true
    },
    {
        id: "pxmP_Q3HQnY",
        title: "Directing",
        instructor: "Robert Munuku",
        description: "In this masterclass Robert Munuku who is a visual artists, filmmaker and writer, takes you through writing for film or creative writing for film looking at important aspects in the writing for film. He talks about how to develop a story idea to come up with something that is original, the storytelling process, story boarding and genres in storytelling for film and screen plays.",
        youtubeEmbedID: "pxmP_Q3HQnY",
        poster: "/independentFilmMaking.png",
        category: "video-production",
        new: true
    },
    {
        id: "lWpg87cHWW4",
        title: "Directing",
        instructor: "Shishi",
        description: "Shishi is a prolific vibe curator in the Nairobi scene, setting fire across many dance floors and stages alike. Never remaining predictable, you can find her playing anything from R&B/Soul to Afro beats, Electro-Funk to Future Beats, Afro House to Hip-Hop, Reggaeton to Dancehall, but most importantly known for pioneering Kenyan talent across the globe. She has opened for Burna Boy, IAMDDB, Karun, Tay Iwar, among others and performed at major events such as Africa Nouveau Festival, Kilifi New Year Festival and The Nest Collectives 'Strictly Silk' all more than twice! In this class, Shishi talks about her DJ process before the pre, during and post-performance. This includes but isn't limited to topics such as playlisting, reading a crowd, show flow and DJ styles. Further, she dives into her journey to becoming one of the top female DJs in East Africa. Its a practical and engaging session with demonstrations where needed, keeping it lively and fun",
        youtubeEmbedID: "lWpg87cHWW4",
        poster: "/badDj.png",
        category: "music",
        new: true
    },
]
