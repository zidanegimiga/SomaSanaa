/**
 * returns a unique id of type string
 */
function uniqueid(){
    var idstr = String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            // exclude all chars between : (58) and @ (64)
            idstr+=String.fromCharCode(ascicode);    
        }                
    } while (idstr.length<32);

    return (idstr);
}

export const masterClassesData = [
    {
        id: "Teej3RpiiXc",
        title: "Safe Spaces for Vulnerability and Conversation, Curating an intimate & unique networking experience and Reverse Brainstorming",
        instructor: "Jonas Nyacomba and Lindsay Obath",
        description: "In this Masterclass Jonas Nyacomba and Lindsay Obath who are founders of free mind session will take you through various topics that include genesis of free Mind Sessions, how to take the first step in curating a session and breaking down the walls we put ourselves in as humans.",
        youtubeEmbedID: "Teej3RpiiXc",
        poster: "/safeSpaces.png"        
    },
    {
        id: "HfgwJQD7tAk",
        title: "Accentuating body features through art",
        instructor: "Lindsay Obath",
        description: "In this masterclass Lindsay Obath takes you through body art while focusing on, hygiene and preserving products, navigating different skin tones, highlighting natural features, creating illusions, colour choices and line work.",
        youtubeEmbedID: "HfgwJQD7tAk",
        poster: "/bodyArt.png"        
    },
    {
        id: "bvf9Rf6XAt0",
        title: "Film Directing",
        instructor: "Ochieng Oneko",
        description: "In this Episode of the Masterminds Ochieng Oneko takes you through an introductory lesson in directing film by Kenyan film maker. Ochieng is a filmmaker who trained in EICAR, the international film school in Paris, during which he worked on about 3 to 4 dozen sets in various positions: Writer, Director, 1st Assistant Director, 2nd Assistant Director, Grip, Electric, Editor, etc.",
        youtubeEmbedID: "bvf9Rf6XAt0",
        poster: "/filmDirecting.png"        
    },
    {
        id: "srJ06K-m6d8",
        title: "Organising an organisation",
        instructor: "Wambui Kinyua",
        description: "Meet Wambui Kinyua, a social scientist with a major interest in the creative sector. She works as the project/ community manager at Acacia collective, as well as working as the curator at Santuri. She has over the years gathered a wealth of experience in project management and best practices and in this masterclass, she shares a thorough analysis on what it takes to create a community. What does successful organising entail?",
        youtubeEmbedID: "srJ06K-m6d8",
        poster: "/organisingAnOrganisation.png"        
    },
    {
        id: "1rT6x7CTKXU",
        title: "Creating Colour Palettes with Styling",
        instructor: "Mohammed Ayieko",
        description: "Mohammed Ayieko is a Kenyan cinema director, whose creative agency lies in Pedagogy Drawing in his personal experiences to promote inclusive and diverse narratives. In this masterclass Ayieko takes you through the aspects of colour pelleting for a set and how best to match different outfits in a film production of or a picture shoot.",
        youtubeEmbedID: "1rT6x7CTKXU",
        poster: "/colorPalettes.png"        
    },
    {
        id: "5Hsjk1w3YgI",
        title: "Writing",
        instructor: "Abigael Akello Arunga",
        description: " Abigael Arunga is a writer and editor in the Kenyan and East Africa region for the past decade, and more recently, she has transitioned to a more global outlook and reach in writing with organizations such as INEND, Girls Globe, and the bill and Melinda gates Foundation. In this masterclass she takes the creatives into the basics of a good writer.",
        youtubeEmbedID: "5Hsjk1w3YgI",
        poster: "/writing.png"        
    },
    {
        id: "AuwYGk6Jqbw",
        title: "INTRODUCTION TO NFTs AND CREATION OF NFTs",
        instructor: "Paola Melissa",
        description: "Welcome to the world of NFT (Non Fungible Tokens) which is taking the creative economy by storm. In this Masterclass, Paola Mellissa, a renowned NFT enthusiast who has mastered the art of creating NFTs, takes you through the introduction of NFTs and its uptake in Kenya. She highlights on how important the NFT growth is important in the creative economy while giving you hints on how to create them.",
        youtubeEmbedID: "AuwYGk6Jqbw",
        poster: "/nfts.png"        
    },
    {
        id: "xax6dJ6eWNE",
        title: "Photography",
        instructor: "Joe Peppih Kiragu",
        description: "Joe Peppih Kiragu has experience of over 15 years in photography and video. Joe in this masterclass introduces fundamental principles in professional photography. He also takes you through components of photography that are not directed to photography but are a note to everyone who wants to become a photographer. The topics he covers are understanding the human perception of vision, understanding light, camera basics and techniques to shape perception.",
        youtubeEmbedID: "xax6dJ6eWNE",
        poster: "/photography.png"        
    },
    {
        id: "CV2MKE_jVX4",
        title: "Thriving in the Dance Profession",
        instructor: "Edu Ooro",
        description: "Edu Ooro is the Creatives Programs Manager and head choreographer at e Sarakasi Dome. Edwin “Edu'' to take dance lessons from a background of a parent who did not want him to pursue his dreams of becoming a dancer. He currently leaves and eats from the dance choreographies that he does and trains at the Sarakasi Dome. In this Master Mind, he takes you through the fundamentals to achieving the best in the dance profession.",
        youtubeEmbedID: "CV2MKE_jVX4",
        poster: "/thrivingInDance.png"        
    },
    {
        id: "yM7mGhGbw04",
        title: "Podcasting",
        instructor: "Kevin Mwachiro",
        description: "Kevin describes himself as a storyteller.  He loves words and sounds and creating images in people’s minds. He is also a writer, a journalist and a podcaster.  For Kevin, podcasting is a way of bringing the love for words and sound together. Hence, Nipe Story. A storytelling podcast that features fictional short stories from Africa. During his session, Kevin will talk about his journey into podcasting, share tips on how to start a podcast and the lessons and challenges that he has gone through over the last three years.",
        youtubeEmbedID: "yM7mGhGbw04",
        poster: "/podcasting.png"        
    },
    {
        id: "1zkyvOjoPmg",
        title: "Podcasting",
        instructor: "Lorella Jowi",
        description: "Casting is one of the most fundamental parts of film production. A film that has mis-cast roles would often be doomed from before filming even begins. During casting, the casting director looks to fill the roles for characters in the script with actors based on how they fit the description of the character being cast; the look, personality, believability, likeability and the actors talent. Teaching the casting Master Class is Lorella Jowi, an East Africa based filmmaker, producer, casting director and voiceover artist. Based in Nairobi, work has taken her to Ethiopia, Rwanda, Uganda, Malawi, South Africa, France and Germany. ‘The Sea Turtles of Lamu’ (2015) ,a documentary produced by LoJ, was awarded at the Wildlife Conservation Film Festival.",
        youtubeEmbedID: "1zkyvOjoPmg",
        poster: "/casting.png"        
    },
    {
        id: "lCIUQFzarnw",
        title: "Brand Strategy",
        instructor: "Antonia Kihara",
        description: "In this masterclass Antonia Kihara who is a consultant takes you through understanding the basics in brand strategy. Brand Strategy is a long term plan to achieve a series of long term goals that ultimately result in the identification and preference of your brand to the consumers. A brand strategy helps you cultivate a strong business brand and helps define who you are and helps to focus your long term goals.",
        youtubeEmbedID: "lCIUQFzarnw",
        poster: "/brandStrategy.png"        
    },
    {
        id: "CTP1hVwSE6U",
        title: "Music Masters - Drumming",
        instructor: "Oronjey",
        description: "Ronjey is a drummer who takes us through his career in the music and education industries. He shares insights on how to maintain the traditional African drums.",
        youtubeEmbedID: "CTP1hVwSE6U",
        poster: "/drumming.png"        
    },
    {
        id: "BuR6MqWJAag",
        title: "Music Masters - Playing the Nyatiti",
        instructor: "Makadem",
        description: "Makadem is a prolific musician who has over the years mastered the art of playing the traditional Luo Nyatiti. In this Music Master he takes you through his instrument’s features, how to build and maintained it with brief insights on how to play one.",
        youtubeEmbedID: "BuR6MqWJAag",
        poster: "/musicMaster.png"        
    },
    {
        id: "inf73acocgs",
        title: "L.E.D Lighting",
        instructor: "Tom Shea",
        description: "Tom Shea is an amateur custom lighting engineering enthusiast, computer geek and hacker who happens to have been lucky enough to build large-scale stages and installations at a multitude of festivals and events across three different continents. He learned almost everything he knows from Googling stuff and then trying it. ",
        youtubeEmbedID: "inf73acocgs",
        poster: "/ledLighting.png"        
    },
    {
        id: "0_Awn46Ad1g",
        title: "Gig Economy",
        instructor: "Kip Ketter",
        description: "Kip Ketter is a creative producer who has scaled the heights in the creative sector through pushing onto his dreams. He studied in South Africa and after coming back to Kenya he has grown to be a strategist, a brand developer and a creative content producer. In this masterclass Kip Ketter takes you through the dynamics of the gig economy and networking within it.",
        youtubeEmbedID: "0_Awn46Ad1g",
        poster: "/gigEconomy.png"        
    },
]

{/* 

{
  id: ,
  title: "Storytelling",
  instructor: "Aleya Kassam",
  description: "Aleya Kassam is a Kenyan feminist, storyteller, writer and performer, whose work explores narratives from the margins. As a compulsive writer, she is widely experimental with form, from page to stage, screen to speaker, micro fiction to memory poems, docu-theatre to participatory filmmaking, blogs to twitter threads - she loves to play with the ways people experience a story. In this masterclass, Aleya explores how to tell your personal story in a variety of different mediums, and how to stay in a state of play and exploration.",
  youtubeEmbedID: "",
  poster: ""        
},

{
  id: ,
  title: "Decolonising Art",
  instructor: "Sitawa Damalie",
  description: "Sitawa Damalie is an award-winning Kenyan poet, playwright, writer and performer who discovered her poetic gift in 2007 and by 2008 staged her first dramatized poetry show “Cut off My Tongue”, which was published as a book in 2009. There are many highlights to Sitawa’s journey. Her first-ever public performance of “Cut off My Tongue”, held on 27, June 2008 was beyond special. Performing at the UK’s prestigious Hay Festival in the UK in 2009 was almost as special as the one in Lang’ata Women’s Prison in 2012 for an audience of over 300 women inmates. Like her compatriot Eluid Kipchoge, Sitawa does not believe in limits and explores various genres, writing poetry, plays, short stories, musicals and essays, and more. For her master class, Sitawa Namwalie talks about how we can decolonize our arts. Decolonizing the mind means deconstructing the thoughts, preferences, and values derived from a colonial way of thinking. This is a process that inevitably leads to more fundamental questions which Sitawa explores. We once viewed decolonization as the formal process of handing over the instruments of government. However, it is now recognised as a long-term process involving the bureaucratic, cultural, linguistic and psychological divesting of colonial power.",
  youtubeEmbedID: "",
  poster: ""        
},

**/}
